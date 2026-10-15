import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Prevent background scrolling when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const links = [
    { 
      to: '/', 
      label: 'HOME', 
      desc: 'Generate temporary emails',
      color: 'hover:bg-blue-300',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      to: '/about', 
      label: 'ABOUT', 
      desc: 'Our mission and vision',
      color: 'hover:bg-purple-300',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      to: '/contact', 
      label: 'CONTACT', 
      desc: 'Get in touch with us',
      color: 'hover:bg-green-300',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      to: '/privacy-policy', 
      label: 'PRIVACY', 
      desc: 'How we protect your data',
      color: 'hover:bg-yellow-300',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    { 
      to: '/terms', 
      label: 'TERMS', 
      desc: 'Rules and guidelines',
      color: 'hover:bg-red-300',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 flex items-center justify-center font-black uppercase cursor-pointer transition-transform duration-300 hover:bg-black hover:text-white border-black bg-yellow-300
          bottom-0 left-1/2 w-32 h-12 border-x-2 border-t-2 border-b-0 shadow-[4px_-4px_0px_0px_rgba(0,0,0,1)]
          sm:bottom-auto sm:left-auto sm:top-1/2 sm:right-0 sm:w-12 sm:h-28 sm:border-y-2 sm:border-l-2 sm:border-r-0 sm:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] sm:[writing-mode:vertical-rl]
          ${isOpen 
            ? '-translate-x-1/2 translate-y-[150%] sm:translate-y-[-50%] sm:translate-x-[360px]' 
            : '-translate-x-1/2 translate-y-0 sm:translate-y-[-50%] sm:translate-x-0'
          }
        `}
      >
        MENU
      </button>

      <div
        className={`fixed z-40 bg-white border-black transform transition-transform duration-300 ease-in-out flex flex-col
          bottom-0 left-0 w-full h-[85vh] border-t-2 border-l-0 shadow-[0px_-8px_0px_0px_rgba(0,0,0,1)]
          sm:bottom-auto sm:top-0 sm:right-0 sm:left-auto sm:w-[360px] sm:h-full sm:border-t-0 sm:border-l-2 sm:shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)]
          ${isOpen 
            ? 'translate-x-0 translate-y-0 sm:translate-x-0 sm:translate-y-0' 
            : 'translate-x-0 translate-y-full sm:translate-y-0 sm:translate-x-full'
          }
        `}
      >
        {/* Close button attached to the left edge on desktop, top-left on mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute 
            -top-12 left-1/2 -translate-x-1/2 w-32 h-12 border-x-2 border-t-2 border-b-0 shadow-[4px_-4px_0px_0px_rgba(0,0,0,1)]
            sm:top-1/2 sm:-translate-y-1/2 sm:-left-12 sm:translate-x-0 sm:w-12 sm:h-28 sm:border-y-2 sm:border-l-2 sm:border-r-0 sm:border-b-2 sm:[writing-mode:vertical-rl] sm:shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]
            border-black bg-yellow-300 text-black hover:bg-black hover:text-white font-black uppercase cursor-pointer transition-colors flex items-center justify-center z-50"
        >
          CLOSE
        </button>

        <nav className="flex-1 overflow-y-auto flex flex-col p-4 sm:p-6 gap-4 bg-gray-50 bg-grid">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`group flex items-start gap-4 p-4 border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] ${
                  isActive ? 'bg-black text-white' : `bg-white text-black ${link.color}`
                }`}
              >
                <div className={`mt-0.5 p-2 border-2 border-black ${isActive ? 'bg-white text-black' : 'bg-black text-white group-hover:bg-white group-hover:text-black'} transition-colors`}>
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-wide">{link.label}</h3>
                  <p className={`text-xs font-bold mt-1 ${isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-black'}`}>
                    {link.desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </nav>

        <div className="p-5 sm:p-6 border-t-2 border-black bg-white flex flex-col items-center gap-3">
           <a 
              href="https://github.com/nitesh-katara/glideinbox" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 border-2 border-black bg-white text-black font-black uppercase text-sm flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          <p className="font-bold text-xs uppercase text-gray-500">GlideInbox © {new Date().getFullYear()}</p>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
