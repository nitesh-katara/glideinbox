const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section className="pt-10 sm:pt-14 pb-16 px-4 sm:px-6 bg-grid relative border-b-2 border-black">
        <div className="max-w-3xl mx-auto text-center relative">
          <h1 className="text-5xl sm:text-6xl font-black text-black mb-6 uppercase">
            Contact <span className="inline-block bg-primary-300 px-2 sm:px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black -rotate-1">Us</span>
          </h1>
          <p className="text-xl text-black font-medium leading-relaxed max-w-2xl mx-auto border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Have questions, suggestions, or just want to say hi? I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-white flex-1 border-b-2 border-black">
        <div className="max-w-3xl mx-auto">
          <div className="bg-yellow-300 border-2 border-black p-4 sm:p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
            
            <div className="w-20 h-20 border-2 border-black bg-white mx-auto flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-3xl font-black text-black mb-4 uppercase">Direct Email</h2>
            <p className="text-lg font-medium text-black mb-8 leading-relaxed max-w-md mx-auto bg-white border-2 border-black p-4">
              For any inquiries regarding GlideInbox, please email me directly at:
            </p>

            <a
              href="mailto:niteshkatara021@gmail.com"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-black text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-xl font-black uppercase border-2 border-black transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] max-w-full"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate">niteshkatara021@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
