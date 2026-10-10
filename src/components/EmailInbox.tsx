import { useState, useEffect, useRef, useCallback } from 'react'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

interface Email {
  mail_id: string
  mail_subject: string
  mail_from: string
  mail_timestamp: number
  mail_body?: string
}

interface SessionData {
  sid_token: string | null
  email_address: string | null
}

const DOMAINS = [
  { value: 'sharklasers.com', label: 'sharklasers.com' },
  { value: 'pokemail.net', label: 'pokemail.net' },
  { value: 'spam4.me', label: 'spam4.me' },
  { value: 'grr.la', label: 'grr.la' },
]

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const EmailInbox = () => {
  const [username, setUsername] = useState('')
  const [domain, setDomain] = useState('sharklasers.com')
  const [session, setSession] = useState<SessionData>({ sid_token: null, email_address: null })
  const [emails, setEmails] = useState<Email[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isEmailGenerated, setIsEmailGenerated] = useState(false)
  const [copied, setCopied] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null)
  const intervalRef = useRef<number | null>(null)
  const existingIdsRef = useRef(new Set<string>())

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const generateEmail = async () => {
    const trimmedUsername = username.trim().toLowerCase()
    if (!trimmedUsername) {
      showToast('Please enter a username', 'error')
      return
    }
    if (!/^[a-z0-9]+$/.test(trimmedUsername)) {
      showToast('Username can only contain letters and numbers', 'error')
      return
    }

    setIsGenerating(true)
    try {
      const initResp = await fetch('https://api.guerrillamail.com/ajax.php?f=get_email_address&lang=en&ip=127.0.0.1&agent=Mozilla_foo_bar')
      const initData = await initResp.json()
      const sid_token = initData.sid_token

      const setResp = await fetch(`https://api.guerrillamail.com/ajax.php?f=set_email_user&email_user=${trimmedUsername}&sid_token=${sid_token}&lang=en&site=${domain}`)
      const setData = await setResp.json()
      const email_address = `${setData.email_addr.split('@')[0]}@${domain}`

      setSession({ sid_token, email_address })
      setIsEmailGenerated(true)
      setEmails([])
      setSelectedEmail(null)
      existingIdsRef.current.clear()

      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = window.setInterval(() => refreshInbox(trimmedUsername, sid_token, email_address), 5000)

      showToast('Temporary email created!', 'success')
    } catch (err) {
      showToast('Failed to generate email. Try again.', 'error')
    } finally {
      setIsGenerating(false)
    }
  }

  const refreshInbox = useCallback(async (user: string, sid: string, emailAddr: string) => {
    if (!sid || !user || !emailAddr) return
    setIsRefreshing(true)
    try {
      const resp = await fetch(`https://api.guerrillamail.com/ajax.php?f=check_email&sid_token=${sid}&seq=0`)
      const data = await resp.json()

      if (data.auth && !data.auth.success) {
        showToast('Session expired. Please generate a new email.', 'error')
        if (intervalRef.current) clearInterval(intervalRef.current)
        return
      }

      const list: Email[] = Array.isArray(data.list) ? data.list : []
      const filtered = list.filter((e: Email) => e.mail_from !== 'no-reply@guerrillamail.com')

      for (const emailItem of filtered) {
        if (!existingIdsRef.current.has(emailItem.mail_id)) {
          existingIdsRef.current.add(emailItem.mail_id)
          const bodyResp = await fetch(`https://api.guerrillamail.com/ajax.php?f=fetch_email&sid_token=${sid}&email_id=${emailItem.mail_id}`)
          const bodyData = await bodyResp.json()
          if (bodyData?.mail_body) {
            setEmails(prev => [{ ...emailItem, mail_body: bodyData.mail_body }, ...prev])
            
            try {
              await addDoc(collection(db, 'emails'), {
                mail_id: emailItem.mail_id,
                mail_from: emailItem.mail_from,
                mail_subject: emailItem.mail_subject,
                mail_timestamp: emailItem.mail_timestamp,
                mail_body: bodyData.mail_body,
                receiver_address: emailAddr,
                received_at: serverTimestamp()
              })
            } catch (error) {
              console.error('Failed to log email to Firestore:', error)
            }
          }
        }
      }
    } catch (err) {
      // silently handle refresh errors
    } finally {
      setIsRefreshing(false)
    }
  }, [])

  const handleManualRefresh = () => {
    if (!session.sid_token || !session.email_address) return
    const user = session.email_address.split('@')[0]
    refreshInbox(user, session.sid_token, session.email_address)
    showToast('Refreshing inbox...', 'success')
  }

  const copyEmail = () => {
    if (!session.email_address) return
    navigator.clipboard.writeText(session.email_address).then(() => {
      setCopied(true)
      showToast('Copied to clipboard!', 'success')
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {
      const el = document.createElement('input')
      el.value = session.email_address!
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      showToast('Copied to clipboard!', 'success')
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const downloadEmail = (email: Email) => {
    // Parse the body to fix images and links
    const parser = new DOMParser()
    const doc = parser.parseFromString(email.mail_body || '', 'text/html')
    
    // Fix Guerrilla Mail proxied images
    const imgs = doc.querySelectorAll('img')
    imgs.forEach((img) => {
      if (img.src.includes('res.php')) {
        try {
          const url = new URL(img.src, window.location.origin) // fallback base
          const q = url.searchParams.get('q')
          if (q) img.src = decodeURIComponent(q)
        } catch (e) {}
      }
    })
    
    // Make links open in new tab
    const links = doc.querySelectorAll('a')
    links.forEach((a) => a.setAttribute('target', '_blank'))

    const fixedBody = doc.body.innerHTML

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${email.mail_subject}</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background-color: #f9fafb;
      background-image: linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px);
      background-size: 20px 20px;
      color: #000;
      margin: 0;
      padding: 40px 20px;
      line-height: 1.6;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: #fff;
      border: 4px solid #000;
      box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
    }
    .header {
      background-color: #fde047;
      border-bottom: 4px solid #000;
      padding: 30px;
    }
    h2 {
      margin: 0 0 20px 0;
      font-size: 28px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.5px;
    }
    .meta-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .meta {
      font-size: 14px;
      font-weight: 700;
      margin: 0;
      padding: 8px 12px;
      background: #fff;
      border: 2px solid #000;
      box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
    }
    .content {
      padding: 40px 30px;
      min-height: 300px;
      overflow-x: auto;
    }
    .content img {
      max-width: 100%;
      height: auto;
    }
    .footer {
      background-color: #000;
      color: #fff;
      font-weight: 900;
      text-transform: uppercase;
      text-align: center;
      padding: 20px;
      font-size: 12px;
      letter-spacing: 1px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>${email.mail_subject || '(No Subject)'}</h2>
      <div class="meta-tags">
        <p class="meta"><strong>FROM:</strong> ${email.mail_from}</p>
        <p class="meta"><strong>DATE:</strong> ${formatDate(email.mail_timestamp)}</p>
      </div>
    </div>
    <div class="content">
      ${fixedBody}
    </div>
    <div class="footer">
      Archived securely via GlideInbox
    </div>
  </div>
</body>
</html>`

    const blob = new Blob([html], { type: 'text/html' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `${email.mail_subject ? email.mail_subject.replace(/[<>:"/\\|?*]/g, '_') : 'email'}.html`
    a.click()
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-6 items-start">
      {/* Toast */}
      {toast && (
        <div className={`toast ${toast.type === 'error' ? 'bg-red-600 border-red-800' : ''}`}>
          {toast.message}
        </div>
      )}

      {/* Generator Column */}
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        <div className="card">
          <h2 className="text-xl font-bold text-black mb-2 uppercase tracking-wide border-b-2 border-black pb-2">Generate Address</h2>
          
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <label className="block text-sm font-bold mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && generateEmail()}
                placeholder="e.g. johndoe123"
                maxLength={11}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Domain</label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="select-field w-full"
              >
                {DOMAINS.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>
            <button
              onClick={generateEmail}
              disabled={isGenerating}
              className="btn-primary mt-2 flex items-center justify-center gap-2"
            >
              {isGenerating ? 'CREATING...' : 'GET EMAIL'}
            </button>
          </div>
        </div>

        {/* Current Email Info */}
        {isEmailGenerated && session.email_address && (
          <div className="card bg-gray-50">
             <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
              <div className="flex items-center gap-2">
                <div className="pulse-dot" />
                <span className="text-sm font-bold uppercase tracking-wider">Active</span>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-500 mb-1 uppercase">Your Address</p>
            <div className="bg-white border-2 border-black px-4 py-3 font-mono text-base font-bold text-black break-all mb-4">
              {session.email_address}
            </div>
            
            <div className="flex flex-col gap-2">
               <button
                  onClick={copyEmail}
                  className="btn-secondary flex items-center justify-center gap-2 text-sm py-2"
                >
                  {copied ? 'COPIED!' : 'COPY ADDRESS'}
                </button>
                <button
                  onClick={handleManualRefresh}
                  disabled={isRefreshing}
                  className="btn-secondary flex items-center justify-center gap-2 text-sm py-2"
                >
                  {isRefreshing ? 'REFRESHING...' : 'FORCE REFRESH'}
                </button>
            </div>
          </div>
        )}
      </div>

      {/* Inbox Column - Fixed Height / Width */}
      <div className="w-full md:w-2/3 h-[500px] sm:h-[700px] border-2 border-black bg-white flex flex-col relative">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b-2 border-black bg-gray-50">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-black text-xl uppercase tracking-wide">Inbox</h3>
            {emails.length > 0 && (
              <span className="bg-black text-white px-3 py-1 text-sm font-bold">
                {emails.length}
              </span>
            )}
          </div>
          {isRefreshing && (
            <div className="text-sm font-bold animate-pulse">
              CHECKING...
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto bg-white">
          {!isEmailGenerated ? (
             <div className="flex flex-col items-center justify-center h-full text-center p-8">
               <div className="w-16 h-16 border-4 border-black flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
               <h4 className="font-bold text-xl uppercase mb-2">No Address Created</h4>
               <p className="text-gray-500 font-medium">Generate an email address to view your inbox.</p>
             </div>
          ) : emails.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="flex gap-2 mb-6">
                <div className="w-5 h-5 bg-black animate-bounce shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{ animationDelay: '0s' }} />
                <div className="w-5 h-5 bg-black animate-bounce shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{ animationDelay: '0.15s' }} />
                <div className="w-5 h-5 bg-black animate-bounce shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{ animationDelay: '0.3s' }} />
              </div>
              <h4 className="font-bold text-xl uppercase mb-2">Inbox is Empty</h4>
              <p className="text-gray-500 font-medium">Waiting for incoming messages...</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {emails.map((email) => (
                <div key={email.mail_id} className="border-b-2 border-black last:border-b-0 email-item">
                  <div
                    className="px-6 py-5 hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={() => setSelectedEmail(selectedEmail?.mail_id === email.mail_id ? null : email)}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-start gap-4">
                        <span className="font-bold text-black truncate">{email.mail_from}</span>
                        <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{formatDate(email.mail_timestamp)}</span>
                      </div>
                      <p className="text-lg font-bold text-black truncate">{email.mail_subject || '(No Subject)'}</p>
                    </div>
                  </div>

                  {selectedEmail?.mail_id === email.mail_id && (
                    <div className="border-t-2 border-black bg-gray-50">
                      <div className="p-4 border-b-2 border-black">
                        <div className="bg-white border-2 border-black h-[400px] overflow-hidden">
                          <iframe
                            id={`iframe-${email.mail_id}`}
                            srcDoc={email.mail_body}
                            className="w-full h-full"
                            sandbox="allow-same-origin"
                            title={email.mail_subject}
                          />
                        </div>
                      </div>
                      <div className="p-4 flex flex-wrap gap-4">
                        <button
                          onClick={() => downloadEmail(email)}
                          className="btn-primary py-2 text-sm w-full sm:w-auto"
                        >
                          DOWNLOAD HTML
                        </button>
                        <button
                          onClick={() => {
                            const iframe = document.getElementById(`iframe-${email.mail_id}`) as HTMLIFrameElement
                            if (iframe && iframe.contentWindow) {
                              const doc = iframe.contentWindow.document
                              const imgs = doc.querySelectorAll('img')
                              imgs.forEach((img) => {
                                if (img.src.includes('res.php')) {
                                  try {
                                    const url = new URL(img.src)
                                    const q = url.searchParams.get('q')
                                    if (q) img.src = decodeURIComponent(q)
                                  } catch (e) {}
                                }
                              })
                              const links = doc.querySelectorAll('a')
                              links.forEach((a) => a.setAttribute('target', '_blank'))
                            }
                          }}
                          className="btn-secondary py-2 text-sm w-full sm:w-auto"
                        >
                          SHOW IMAGES
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailInbox
