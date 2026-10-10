const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero */}
      <section className="pt-10 sm:pt-14 pb-16 px-4 sm:px-6 bg-grid relative border-b-2 border-black">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-yellow-300 text-black font-bold uppercase tracking-wider mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            👋 About Us
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-black mb-6 uppercase">
            Built for <span className="inline-block bg-primary-300 px-2 sm:px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black -rotate-1">Privacy</span>
          </h1>
          <p className="text-xl text-black font-medium leading-relaxed max-w-2xl mx-auto border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            GlideInbox was created to give everyone a simple, fast way to protect their real email from spam, data brokers, and unwanted sign-ups.
          </p>
        </div>
      </section>

      {/* Developer section */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-blue-300">
            <div className="flex flex-col md:flex-row gap-8 items-center sm:items-start">
              <div className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-black bg-white flex-shrink-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform overflow-hidden">
                <img src="/profile.jpg" alt="Nitesh Katara" className="w-full h-full object-cover" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-3xl font-black text-black mb-4 uppercase">Nitesh Katara</h2>
                <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-black font-medium leading-relaxed mb-4">
                    Hello and welcome! I'm <strong>Nitesh Katara</strong>, and I'm thrilled to have you here. As someone passionate about web development, I created GlideInbox to help users <strong>safeguard their primary email accounts</strong> from spam and unwanted messages.
                  </p>
                  <p className="text-black font-medium leading-relaxed">
                    This project generates disposable email addresses, offering a seamless experience to protect your privacy. Moving forward, I aspire to <strong>develop more innovative applications</strong> that positively impact people's online interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50 border-b-2 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-black mb-12 text-center uppercase">Strategic Outlook</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 border-2 border-black bg-purple-300 text-black flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-black text-black mb-3 text-2xl uppercase">Our Vision</h3>
              <p className="text-black font-medium leading-relaxed">
                A digital landscape where users can navigate with ease, confidence, and security. We envision empowering individuals to take control of their online experience, <strong>free from spam and unwanted messages</strong>.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-14 h-14 border-2 border-black bg-green-300 text-black flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-black text-black mb-3 text-2xl uppercase">Our Promise</h3>
              <p className="text-black font-medium leading-relaxed">
                We prioritize user experience in everything we do. From intuitive interfaces to responsive support, we're committed to making your experience with GlideInbox <strong>seamless and enjoyable</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50 border-b-2 border-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-black mb-12 text-center uppercase">Attribution</h2>
          <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-16 h-16 border-2 border-black bg-black flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-black text-black mb-3 text-2xl uppercase">Guerrilla Mail</h3>
                <p className="text-black font-medium leading-relaxed">
                  We utilize the <strong>API and domains</strong> provided by{' '}
                  <a href="https://www.guerrillamail.com/" target="_blank" rel="noopener noreferrer" className="font-black underline decoration-4 decoration-blue-500 hover:bg-black hover:text-white transition-colors">
                    guerrillamail.com
                  </a>{' '}
                  to offer disposable email services. This allows users to generate disposable email addresses for receiving emails <strong>securely and efficiently</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
