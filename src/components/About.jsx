import { useEffect, useRef, useState } from 'react'
import './About.css'
import { prefersReducedMotion, useInView, useTyped } from '../hooks'

const script = `Hi, I'm Muhammad Bilal | Graphic Designer, Digital Marketing Specialist, AI Videoeditor/Filmmaker Content Writer | Jeddah, Saudi Arabia

With over 7 years of industry experience, I provide end-to-end creative and marketing solutions for brands — encompassing brand identity design, video editing, copywriting, and integrated campaign management.

My approach enables clients to partner with a single, dedicated professional rather than coordinating with multiple teams. This ensures strategic clarity, creative consistency, and premium quality — from initial concept to final delivery.

Fluent in English, Urdu, and Arabic, I help brands communicate effectively with diverse audiences and build a strong, lasting presence in the Saudi market and beyond.

Let's elevate your brand together.`

const statStroke = { fill: 'none', stroke: '#d9b46a', strokeWidth: 3, strokeLinejoin: 'round', strokeLinecap: 'round' }

// n = number that counts up when the panel scrolls into view
const stats = [
  {
    n: 7, suffix: '+', label: 'Years of experience',
    // film reel
    icon: (
      <svg viewBox="0 0 120 120" width="56" height="56" aria-hidden="true">
        <circle cx="60" cy="60" r="44" {...statStroke} />
        <circle cx="60" cy="60" r="8" fill="#d9b46a" />
        <circle cx="60" cy="32" r="9" {...statStroke} />
        <circle cx="60" cy="88" r="9" {...statStroke} />
        <circle cx="32" cy="60" r="9" {...statStroke} />
        <circle cx="88" cy="60" r="9" {...statStroke} />
      </svg>
    ),
  },
  {
    n: 7, suffix: '', label: 'Companies worked with',
    // buildings
    icon: (
      <svg viewBox="0 0 120 120" width="56" height="56" aria-hidden="true">
        <rect x="14" y="30" width="46" height="76" rx="3" {...statStroke} />
        <rect x="60" y="56" width="46" height="50" rx="3" {...statStroke} />
        <path d="M26 46h8M40 46h8M26 62h8M40 62h8M26 78h8M40 78h8M72 72h8M86 72h8M72 88h8M86 88h8" {...statStroke} />
        <path d="M8 106h104" {...statStroke} />
      </svg>
    ),
  },
  {
    n: 18, suffix: '', label: 'Projects showcased',
    // stacked frames
    icon: (
      <svg viewBox="0 0 120 120" width="56" height="56" aria-hidden="true">
        <rect x="30" y="12" width="76" height="60" rx="4" {...statStroke} />
        <rect x="14" y="30" width="76" height="60" rx="4" fill="#17120a" stroke="#d9b46a" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="34" cy="50" r="6" fill="#d9b46a" />
        <path d="M18 86l22-22 16 14 12-10 16 16" {...statStroke} />
        <path d="M14 106h76" {...statStroke} />
      </svg>
    ),
  },
]

function Count({ to, run, suffix = '' }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!run) return undefined
    if (prefersReducedMotion()) { setV(to); return undefined }
    let raf, start
    const tick = (t) => {
      start = start ?? t
      const k = Math.min(1, (t - start) / 1800)
      setV(Math.round(to * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, to])
  return <>{v}{suffix}</>
}

const skills = [
  'Brand identity', 'Social media design', 'Packaging', 'Print design', 'Bilingual layouts',
  'Video editing', 'Motion graphics', 'Content strategy', 'Community management',
  'Adobe Illustrator', 'Photoshop', 'Premiere Pro', 'CapCut', 'Figma', 'CorelDRAW', 'Canva',
]

function About() {
  const paper = useRef(null)
  const seen = useInView(paper)
  const specsRef = useRef(null)
  const specsSeen = useInView(specsRef)
  const typed = useTyped(script, seen, 22)

  return (
    <section id="about" className="about">
      <div className="wrap about__top">
        <div ref={paper} className="paper rv in">
          <i className="paper__hole paper__hole--a"></i>
          <i className="paper__hole paper__hole--b"></i>
                    <p className="paper__head">ABOUT ME</p>
          <pre className="paper__text" aria-label={script}>
            <span aria-hidden="true">{typed}</span>
            <span className="paper__caret" aria-hidden="true"></span>
          </pre>
          <p className="paper__cut">Let's work together.</p>
        </div>

        <div ref={specsRef} className="stats rv" style={{ '--d': '0.15s' }}>
          {stats.map((r) => (
            <div className="stat" key={r.label}>
              <span className="stat__icon">{r.icon}</span>
              <b className="stat__n"><Count to={r.n} run={specsSeen} suffix={r.suffix} /></b>
              <span className="stat__l">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="strip" aria-label="Skills and tools">
        <div className="strip__run" aria-hidden="true">
          {[...skills, ...skills].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About