import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-grid p-6">
      <div className="max-w-md w-full text-center space-y-8 bg-white border-2 border-black p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-8xl font-black text-black">404</h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-black uppercase tracking-wide">Page Not Found</h2>
          <p className="text-black font-medium leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-yellow-300 text-black px-8 py-4 font-black uppercase border-2 border-black transition-all hover:bg-black hover:text-white hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
