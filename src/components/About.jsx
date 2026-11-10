import { useEffect, useRef, useState } from 'react'
import './About.css'
import { prefersReducedMotion, useInView, useTyped } from '../hooks'

const script = `Hi, I'm Muhammad Bilal, a graphic designer and digital marketer based in Jeddah.

For over 7 years I have handled the whole job for brands: the design, the video edits, the copywriting and the campaign.

So a client works with one person instead of four, and the idea stays consistent from the first draft to the final post.

I work in English, Urdu and Arabic.`

// n = number that counts up when the panel scrolls into view
const stats = [
  { n: 7, suffix: '+', label: 'Years of experience' },
  { n: 7, suffix: '', label: 'Companies worked with' },
  { n: 18, suffix: '', label: 'Projects showcased' },
  { n: 3, suffix: '', label: 'Languages: English, Urdu, Arabic' },
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

const stroke = { fill: 'none', stroke: '#d9b46a', strokeWidth: 3, strokeLinejoin: 'round', strokeLinecap: 'round' }

const departments = [
  {
    shot: '01', angle: 'Wide', name: 'Poster', role: 'Graphic design',
    text: 'Brand identities, posters, packaging and social creatives.',
    note: 'Pixels on the poster.',
    icon: (
      <svg viewBox="0 0 120 120" width="92" height="92" aria-hidden="true">
        <rect x="32" y="14" width="56" height="92" rx="4" {...stroke} />
        <circle cx="60" cy="46" r="14" fill="#d9b46a" />
        <path d="M42 80h36M46 90h28" {...stroke} />
      </svg>
    ),
  },
  {
    shot: '02', angle: 'Medium', name: 'Picture', role: 'Video and motion',
    text: 'Edited reels, promo cuts and short motion graphics for social channels.',
    note: 'Cut on the beat.',
    icon: (
      <svg viewBox="0 0 120 120" width="92" height="92" aria-hidden="true">
        <circle cx="42" cy="38" r="22" {...stroke} />
        <circle cx="42" cy="38" r="6" fill="#d9b46a" />
        <circle cx="28" cy="38" r="3.5" fill="#d9b46a" />
        <circle cx="56" cy="38" r="3.5" fill="#d9b46a" />
        <circle cx="42" cy="24" r="3.5" fill="#d9b46a" />
        <circle cx="42" cy="52" r="3.5" fill="#d9b46a" />
        <rect x="16" y="66" width="72" height="34" rx="4" {...stroke} />
        <path d="M88 76l18-8v32l-18-8z" fill="#d9b46a" />
      </svg>
    ),
  },
  {
    shot: '03', angle: 'Insert', name: 'Script', role: 'Content and copy',
    text: 'Captions, ad copy and bilingual layouts in English, Urdu and Arabic.',
    note: 'Keys hit paper.',
    icon: (
      <svg viewBox="0 0 120 120" width="92" height="92" aria-hidden="true">
        <rect x="38" y="10" width="44" height="54" rx="3" {...stroke} />
        <path d="M47 24h26M47 34h26M47 44h16" {...stroke} />
        <rect x="14" y="62" width="92" height="42" rx="6" fill="#d9b46a" />
        <g fill="#17120a">
          <circle cx="32" cy="76" r="3" /><circle cx="46" cy="76" r="3" /><circle cx="60" cy="76" r="3" />
          <circle cx="74" cy="76" r="3" /><circle cx="88" cy="76" r="3" />
          <circle cx="39" cy="90" r="3" /><circle cx="53" cy="90" r="3" /><circle cx="67" cy="90" r="3" />
          <circle cx="81" cy="90" r="3" />
        </g>
      </svg>
    ),
  },
  {
    shot: '04', angle: 'Crane', name: 'Release', role: 'Digital marketing',
    text: 'Content strategy, platform and community management, and reporting.',
    note: 'Out to the crowd.',
    icon: (
      <svg viewBox="0 0 120 120" width="92" height="92" aria-hidden="true">
        <path d="M20 46h24l36-22v72L44 74H20z" fill="#d9b46a" />
        <path d="M30 74l6 26h14l-6-26" fill="#d9b46a" />
        <path d="M90 42c8 8 8 28 0 36M100 32c14 14 14 42 0 56" {...stroke} />
      </svg>
    ),
  },
]

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
              <b className="stat__n"><Count to={r.n} run={specsSeen} suffix={r.suffix} /></b>
              <span className="stat__l">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap about__depts">
        <div className="about__head rv">
          <h2 className="title">
            Four departments.
            <br />
            One crew.
          </h2>
          <p className="sub">The storyboard for every job: what gets made, and who makes it.</p>
        </div>

        <div className="shots">
          {departments.map((d, i) => (
            <article className="shot rv" key={d.name} style={{ '--d': `${i * 0.1}s` }}>
              <div className="shot__frame">
                <span className="shot__meta shot__meta--l">Shot {d.shot}</span>
                <span className="shot__meta shot__meta--r">{d.angle}</span>
                {d.icon}
                <span className="shot__note">{d.note}</span>
              </div>
              <h3 className="shot__name">{d.name}</h3>
              <p className="shot__role">{d.role}</p>
              <p className="shot__text">{d.text}</p>
            </article>
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