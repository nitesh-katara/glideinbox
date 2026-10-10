const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section className="pt-10 sm:pt-14 pb-16 px-4 sm:px-6 bg-grid relative border-b-2 border-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-black mb-6 uppercase">
            Terms & <span className="inline-block bg-primary-300 px-2 sm:px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black -rotate-1">Conditions</span>
          </h1>
          <div className="inline-block border-2 border-black bg-blue-300 p-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            LAST UPDATED: OCTOBER 2026
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-white flex-1 border-b-2 border-black">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-10 text-black">
            
            <div className="space-y-4 border-b-2 border-black pb-8">
              <h3 className="text-2xl font-black uppercase">General Terms</h3>
              <p className="font-medium leading-relaxed">
                By accessing and using GlideInbox, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below.
              </p>
              <ul className="list-disc pl-5 space-y-3 font-medium">
                <li>GlideInbox makes no warranties about reliability or suitability for any purpose.</li>
                <li>Any email received may be available or inaccessible for viewing and may be modified or deleted by the system.</li>
                <li>You agree not to use GlideInbox, directly or indirectly, for any unlawful purpose.</li>
                <li>You agree that any email you receive will go into the public domain without expectation of privacy.</li>
                <li>You agree not to use the system to receive, store, or view emails that contain sensitive, private, or confidential information.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase">Limitation of Liability</h3>
              <p className="font-medium leading-relaxed bg-gray-100 border-l-4 border-black p-4">
                Under no circumstances shall the GlideInbox team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials or services on this site.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase">Disclaimer</h3>
              <p className="font-medium leading-relaxed">
                Our Service and its contents are provided "as is" and "as available" without any warranty or representations of any kind, whether express or implied. We specifically disclaim all warranties and representations in any content transmitted on or in connection with our Service.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t-2 border-black">
              <h3 className="text-2xl font-black uppercase">Changes to Terms</h3>
              <p className="font-medium leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage
