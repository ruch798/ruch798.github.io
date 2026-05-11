import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import App from './App'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import './styles.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/* Handle GitHub Pages SPA redirect stored by 404.html */
function SpaRedirectHandler() {
  const navigate = useNavigate()
  useEffect(() => {
    const redirect = window.__SPA_REDIRECT
    if (redirect && redirect !== '/') {
      delete window.__SPA_REDIRECT
      navigate(redirect, { replace: true })
    }
  }, [navigate])
  return null
}

function Layout() {
  return (
    <BrowserRouter>
      <SpaRedirectHandler />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Contact />
      <BackToTop />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
)
