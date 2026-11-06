import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top bilal-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand bilal-logo" href="#top">
          muhammad bilal
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bilalNav"
          aria-controls="bilalNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="bilalNav">
          <ul className="navbar-nav mx-auto gap-lg-4">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#work">Work</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
          </ul>

          <a href="#contact" className="btn bilal-btn-cta d-none d-lg-inline-flex">
            Hire me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
