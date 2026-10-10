const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section className="pt-10 sm:pt-14 pb-16 px-4 sm:px-6 bg-grid relative border-b-2 border-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-black mb-6 uppercase">
            Privacy <span className="inline-block bg-primary-300 px-2 sm:px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black -rotate-1">Policy</span>
          </h1>
          <div className="inline-block border-2 border-black bg-yellow-300 p-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            LAST UPDATED: OCTOBER 2026
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-white flex-1 border-b-2 border-black">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-10 text-black">
            <div>
              <p className="text-xl font-bold leading-relaxed border-b-2 border-black pb-8">
                Thank you for using GlideInbox! Your privacy is important to us, and this Privacy Policy outlines how we handle your data when you use our service.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase">Information Usage</h3>
              <p className="font-medium leading-relaxed">
                When you use GlideInbox to generate temporary email addresses, we do not require any personal information like your name, phone number, or real email address. The temporary emails are generated and managed via the Guerrilla Mail API.
              </p>
              <ul className="list-disc pl-5 space-y-2 font-medium">
                <li>We do not store the content of the emails you receive.</li>
                <li>Temporary emails and their contents are transient and deleted according to the Guerrilla Mail API retention policies.</li>
                <li>We do not share, sell, or rent any usage data to third parties.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase">Data Security</h3>
              <p className="font-medium leading-relaxed">
                Since we do not collect personal information, there is minimal risk of data breaches involving your personal identity. However, please note that any email sent to the temporary address is visible to anyone who knows the exact address, as there is no password protection for temporary inboxes.
              </p>
              <div className="bg-yellow-300 border-2 border-black p-6 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-4">
                WARNING: Do not use temporary email addresses for sensitive information, financial accounts, or permanent account registrations.
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase">Third-Party Services</h3>
              <p className="font-medium leading-relaxed">
                Our service integrates with the Guerrilla Mail API to provide the core functionality. By using GlideInbox, you are also subject to the terms and privacy practices of Guerrilla Mail regarding the routing and temporary storage of emails.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t-2 border-black">
              <h3 className="text-2xl font-black uppercase">Contact Us</h3>
              <p className="font-medium leading-relaxed">
                If you have any questions or concerns regarding this Privacy Policy, please feel free to reach out to us via our <a href="/contact" className="font-black underline decoration-4 decoration-blue-500 hover:bg-black hover:text-white transition-colors">Contact Page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPage
