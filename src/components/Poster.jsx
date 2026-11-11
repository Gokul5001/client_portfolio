import { useEffect, useRef, useState } from 'react'
import './Poster.css'
import { portrait } from '../data/images'
import { prefersReducedMotion, useTyped } from '../hooks'

const roles = ['Senior Graphic Designer', 'Digital Marketing Specialist', 'AI Video Editor & Filmmaker', 'Course Content Writer']

const intro = `Hi, I'm Muhammad Bilal, a graphic designer and digital marketer based in Jeddah.

For over 7 years I have handled the whole job for brands: the design, the video edits, the copywriting and the campaign.`

function Poster() {
  const [i, setI] = useState(0)
  const [typeGo, setTypeGo] = useState(false)
  const typed = useTyped(intro, typeGo, 32)
  const flare = useRef(null)

  // A lens-flare streak and glow follow the pointer across the poster.
  const onMove = (e) => {
    const el = flare.current
    if (!el) return
    const r = e.currentTarget.getBoundingClientRect()
    el.style.setProperty('--fx', `${e.clientX - r.left}px`)
    el.style.setProperty('--fy', `${e.clientY - r.top}px`)
    el.style.opacity = 1
  }
  const onLeave = () => flare.current && (flare.current.style.opacity = 0)

  // Start typing the intro once the poster has faded in.
  useEffect(() => {
    const t = setTimeout(() => setTypeGo(true), 1100)
    return () => clearTimeout(t)
  }, [])

  // The role line swaps role every few seconds.
  useEffect(() => {
    if (prefersReducedMotion()) return undefined
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="poster" className="poster" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={flare} className="poster__flare" aria-hidden="true">
        <i className="poster__streak"></i>
        <i className="poster__glow"></i>
        <i className="poster__star-core"></i>
      </div>
      <div className="poster__top">
        <p className="poster__presents">
          Jeddah, Saudi Arabia
          <br />
          presents
        </p>
        <a href="#about" className="poster__scroll">
          Scroll to roll <i aria-hidden="true"></i>
        </a>
      </div>

      <div className="poster__grid">
        <div className="poster__copy">
          <h1 className="poster__name poster__in" style={{ '--d': '0.1s' }}>
            Muhammad
            <br />
            Bilal
          </h1>

          <p className="poster__star poster__in" style={{ '--d': '0.35s' }}>
            <b key={i} className="poster__role">{roles[i]}</b>
          </p>

          <div className="poster__intro poster__in" style={{ '--d': '0.6s' }}>
            <p className="poster__intro-ghost" aria-hidden="true">{intro}</p>
            <p className="poster__intro-live" aria-label={intro}>
              <span aria-hidden="true">{typed}</span>
              <i className="poster__caret" aria-hidden="true"></i>
            </p>
          </div>
        </div>
        <figure className="poster__card poster__in" style={{ '--d': '0.3s' }}>
          <div className="poster__card-in">
            {portrait ? <img src={portrait} alt="Muhammad Bilal" /> : <span>MB</span>}
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Poster