import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
