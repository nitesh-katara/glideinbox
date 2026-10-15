import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import faviconUrl from './assets/favicon.png'

// Inject favicon from bundled asset (survives public/ deletion)
const link = document.querySelector<HTMLLinkElement>("link[rel='icon']") || document.createElement('link')
link.rel = 'icon'
link.type = 'image/png'
link.href = faviconUrl
document.head.appendChild(link)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
