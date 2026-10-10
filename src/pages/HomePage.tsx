import EmailInbox from '../components/EmailInbox'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Privacy Protection',
    desc: 'Shield your real email from spam, data brokers, and unwanted sign-ups.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant & Free',
    desc: 'No registration, no credit card. Just type a username and get your inbox in seconds.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: 'Custom Username',
    desc: 'Choose any username you like across multiple domains to organize your temp emails.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Auto Refresh',
    desc: 'Your inbox refreshes automatically every 5 seconds so you never miss a message.',
  },
]

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero */}
      <section className="pt-10 sm:pt-14 pb-16 px-4 sm:px-6 bg-grid relative border-b-2 border-black">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-10 sm:mb-16 max-w-4xl mx-auto">
            
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="border-4 border-black bg-white px-3 py-2 sm:px-6 sm:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform">
                <span className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-black">
                  Glide<span className="text-white bg-black px-2 ml-1">Inbox</span>
                </span>
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 border-2 border-black bg-yellow-300 text-black font-bold uppercase tracking-wider mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm max-w-full">
              <span className="w-2.5 h-2.5 bg-black rounded-none animate-pulse flex-shrink-0" />
              <span className="truncate whitespace-normal text-center">No registration required — 100% free</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-black leading-tight mb-8 sm:mb-6 uppercase">
              Disposable Email,<br />
              <span className="text-gradient">Real Privacy</span>
            </h1>
            <p className="text-base sm:text-xl text-black font-medium leading-relaxed max-w-2xl mx-auto border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Get a free temporary email address instantly. Protect your inbox from spam, data breaches, and unwanted marketing — forever.
            </p>
          </div>

          {/* Inline generator */}
          <div className="mb-10">
            <EmailInbox />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50 border-b-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-4 uppercase">
              Why choose <span className="text-gradient">GlideInbox?</span>
            </h2>
            <p className="text-black font-bold text-lg max-w-xl mx-auto">Everything you need to keep your primary inbox clean and your privacy intact.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group p-6 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-14 h-14 border-2 border-black bg-yellow-300 flex items-center justify-center text-black mb-6 group-hover:bg-white group-hover:border-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 uppercase">{f.title}</h3>
                <p className="font-medium opacity-90">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b-2 border-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-4 uppercase">How it works</h2>
            <p className="text-black font-bold text-lg">Three simple steps to protect your privacy</p>
          </div>
          <div className="pb-4 pr-2 sm:pr-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {[
                {
                  step: '01',
                  title: 'Generate',
                  desc: 'Enter a username, pick a domain, and click "Get Email". Your temporary address is ready in seconds.',
                  color: 'bg-blue-300',
                },
                {
                  step: '02',
                  title: 'Receive',
                  desc: 'Share this address for sign-ups, promotions, or verifications. Emails arrive in your inbox automatically.',
                  color: 'bg-purple-300',
                },
                {
                  step: '03',
                  title: 'Dispose',
                  desc: 'Once done, simply close the tab. No cleanup needed — your real inbox stays spotless.',
                  color: 'bg-green-300',
                },
              ].map((step) => (
                <div key={step.step} className="text-center border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white relative">
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 border-2 border-black ${step.color} flex items-center justify-center text-black text-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-black text-black mt-4 mb-4 uppercase">{step.title}</h3>
                  <p className="text-black font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default HomePage
