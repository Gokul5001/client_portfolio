import { useEffect, useRef, useState } from 'react'
import './Poster.css'
import { portrait } from '../data/images'
import { prefersReducedMotion } from '../hooks'

const roles = ['Senior graphic designer', 'Digital marketing expert', 'Brand and social media creator']

const credits = [
  ['Graphic design', 'Muhammad Bilal'],
  ['Digital marketing', 'Muhammad Bilal'],
  ['Bilingual layouts', 'Muhammad Bilal'],
  ['Video editing', 'Muhammad Bilal'],
]

function Poster() {
  const [i, setI] = useState(0)
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

  // The "starring as" line swaps role every few seconds.
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
            <span>starring as</span>
            <b key={i} className="poster__role">{roles[i]}</b>
          </p>

          <div className="poster__foot poster__in" style={{ '--d': '0.6s' }}>
            <div className="poster__badge">
              <span className="poster__badge-mark">F</span>
              <p>
                <b>Freelance</b>
                Open for new projects in design, campaigns, copy and video.
              </p>
            </div>

            <dl className="poster__credits">
              {credits.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <figure className="poster__card poster__in" style={{ '--d': '0.3s' }}>
          <div className="poster__card-in">
            {portrait ? <img src={portrait} alt="Muhammad Bilal" /> : <span>MB</span>}
          </div>
          <figcaption>Now showing</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Poster
