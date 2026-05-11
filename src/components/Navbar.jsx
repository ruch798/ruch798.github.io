import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDd, setOpenDd] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!openDd) return
    const close = (e) => {
      if (!e.target.closest('.dropdown')) setOpenDd(null)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [openDd])

  const scrollToEl = useCallback((href) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return true
    }
    return false
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    setOpenDd(null)
    if (isHome) {
      scrollToEl(href)
      return
    }
    navigate('/')
    const poll = setInterval(() => {
      if (scrollToEl(href)) clearInterval(poll)
    }, 50)
    setTimeout(() => clearInterval(poll), 3000)
  }

  const toggleDd = (name, e) => {
    e.preventDefault()
    setOpenDd(openDd === name ? null : name)
  }

  return (
    <nav className={`navbar navbar-b navbar-expand-md fixed-top ${scrolled || menuOpen ? 'navbar-reduce' : 'navbar-trans'}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">Ruchi Bhatia</Link>
        <button className={`navbar-toggler ${menuOpen ? '' : 'collapsed'}`} type="button"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <div className={`navbar-collapse ${menuOpen ? 'show' : 'collapse'} justify-content-end`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={e => go(e, '#about')}>About</a>
            </li>

            {/* Experience dropdown */}
            <li className={`nav-item dropdown ${openDd === 'exp' ? 'show' : ''}`}>
              <a className="nav-link dropdown-toggle" href="#work" onClick={e => toggleDd('exp', e)}
                role="button" aria-expanded={openDd === 'exp'}>Experience</a>
              <div className={`dropdown-menu ${openDd === 'exp' ? 'show' : ''}`}>
                <a className="dropdown-item" href="#work" onClick={e => go(e, '#work')}>Roles</a>
                <a className="dropdown-item" href="#collaborations" onClick={e => go(e, '#collaborations')}>Speaking</a>
              </div>
            </li>

            {/* Portfolio dropdown */}
            <li className={`nav-item dropdown ${openDd === 'port' ? 'show' : ''}`}>
              <a className="nav-link dropdown-toggle" href="#" onClick={e => toggleDd('port', e)}
                role="button" aria-expanded={openDd === 'port'}>Portfolio</a>
              <div className={`dropdown-menu ${openDd === 'port' ? 'show' : ''}`}>
                <a className="dropdown-item" href="#voice" onClick={e => go(e, '#voice')}>Featured In</a>
                <a className="dropdown-item" href="#social" onClick={e => go(e, '#social')}>On Social</a>
                <a className="dropdown-item" href="#projects" onClick={e => go(e, '#projects')}>Projects</a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#newsletter" onClick={e => go(e, '#newsletter')}>Newsletter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials" onClick={e => go(e, '#testimonials')}>Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={e => go(e, '#gallery')}>Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={e => go(e, '#contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
