import { useEffect } from 'react'
import './theme.css'
import Poster from './components/Poster'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Work from './components/Work'
import { Awards, Contact, Credits } from './components/Finale'
import Scrubber from './components/Scrubber'
import Cursor from './components/Cursor'

// Page plays like a film: poster → about → education → experience → work → awards → contact → credits.
export default function App() {
  // Fade-in for every .rv block once it scrolls into view.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('.rv:not(.in)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="stage-bg" aria-hidden="true"></div>
      <main>
        <Poster />
        <About />
        <Education />
        <Experience />
        <Work />
        <Awards />
        <Contact />
        <Credits />
      </main>
      <Scrubber />
      <Cursor />
    </>
  )
}