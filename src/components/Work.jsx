import { useCallback, useEffect, useRef, useState } from 'react'
import './Work.css'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'
import { workImages } from '../data/images'
import { scrollToProgress, useSectionProgress } from '../hooks'

const pad = (n) => String(n).padStart(2, '0')
const n = projects.length

function Thumb({ p, on, onClick }) {
  const src = workImages[p.slug]
  return (
    <button type="button" className={`reel__thumb ${on ? 'is-on' : ''}`} onClick={onClick} aria-label={`Go to ${p.title}`}>
      {src ? <img src={src} alt="" loading="lazy" /> : <span className="reel__thumb-empty"></span>}
    </button>
  )
}

function Work() {
  const ref = useRef(null)
  const strip = useRef(null)
  const p = useSectionProgress(ref)
  const [open, setOpen] = useState(null)

  const index = Math.min(n - 1, Math.floor(p * n))
  const current = projects[index]
  const image = workImages[current.slug]

  const jump = (i) => scrollToProgress(ref.current, (i + 0.5) / n)

  // keep the active thumbnail centred in the film strip
  useEffect(() => {
    const el = strip.current
    const thumb = el?.children[index]
    if (!el || !thumb) return
    el.scrollTo({ left: thumb.offsetLeft - el.clientWidth / 2 + thumb.clientWidth / 2, behavior: 'smooth' })
  }, [index])

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback((d) => setOpen((v) => (v === null ? v : (v + d + n) % n)), [])
  const prev = useCallback(() => step(-1), [step])
  const next = useCallback(() => step(1), [step])

  return (
    <section id="work" ref={ref} className="work" style={{ height: `${n * 42 + 100}vh` }}>
      <div className="work__sticky">
        <header className="wrap work__head">
          <div>
            <h2 className="title">Now showing</h2>
            <p className="sub">Selected work. Scroll to run the reel, or open a frame for the full project.</p>
          </div>
          <p className="work__count">
            <b>{pad(index + 1)}</b> / {pad(n)}
          </p>
        </header>

        <div className="wrap work__stage">
          <button
            type="button"
            className="screen"
            onClick={() => setOpen(index)}
            aria-label={`${current.title}, open project details`}
          >
            <div key={current.slug} className="screen__in">
              {image ? (
                <>
                  <img className="screen__bg" src={image} alt="" />
                  <img className="screen__img" src={image} alt="" />
                </>
              ) : (
                <span className="screen__empty"></span>
              )}
              <span className="screen__shade"></span>
              <span className="screen__cap">
                <i className="screen__num">{pad(index + 1)}</i>
                <span>
                  <small>{current.group}</small>
                  <strong>{current.title}</strong>
                  <em>{current.client}</em>
                </span>
              </span>
              <svg className="screen__badge" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  <path id="badge-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                </defs>
                <circle cx="50" cy="50" r="48" fill="#d9b46a" />
                <text fontSize="10" letterSpacing="2.4" fontWeight="500" fill="#17120a">
                  <textPath href="#badge-circle">VIEW PROJECT · VIEW PROJECT ·</textPath>
                </text>
                <path d="M40 60l20-20M44 40h16v16" fill="none" stroke="#17120a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>

        <div className="reel" aria-label="Project reel">
          <div className="reel__holes"></div>
          <div className="reel__strip" ref={strip}>
            {projects.map((pr, i) => (
              <Thumb key={pr.slug} p={pr} on={i === index} onClick={() => jump(i)} />
            ))}
          </div>
          <div className="reel__holes"></div>
          <i className="reel__marker" aria-hidden="true"></i>
        </div>
      </div>

      {open !== null && (
        <ProjectModal
          project={projects[open]}
          image={workImages[projects[open].slug]}
          position={open + 1}
          total={n}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}

export default Work
