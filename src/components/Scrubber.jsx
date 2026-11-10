import { useEffect, useRef, useState } from 'react'
import './Scrubber.css'
import { prefersReducedMotion } from '../hooks'

const chapters = [
  { id: 'poster', label: 'Poster' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
  { id: 'credits', label: 'Credits' },
]

const RUNTIME = 360 // the whole page plays as a six-minute film

const pad = (n, l = 2) => String(n).padStart(l, '0')
function timecode(frac) {
  const total = frac * RUNTIME
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = Math.floor(total % 60)
  const f = Math.floor((total % 1) * 30)
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`
}

// Bottom timeline: one segment per chapter, a playhead that follows the scroll,
// and a running timecode. Click a segment to jump.
function Scrubber() {
  const [widths, setWidths] = useState(chapters.map(() => 100 / chapters.length))
  const [active, setActive] = useState(0)
  const [head, setHead] = useState(0)
  const [frac, setFrac] = useState(0)
  const rects = useRef([])

  useEffect(() => {
    const measure = () => {
      const list = chapters.map((c) => {
        const el = document.getElementById(c.id)
        if (!el) return { top: 0, h: 1 }
        return { top: el.getBoundingClientRect().top + window.scrollY, h: el.offsetHeight }
      })
      rects.current = list
      const total = list.reduce((a, r) => a + r.h, 0) || 1
      setWidths(list.map((r) => Math.max(7, (r.h / total) * 100)))
    }

    let raf
    const update = () => {
      const list = rects.current
      if (!list.length) return
      const y = window.scrollY + window.innerHeight * 0.4
      let idx = 0
      list.forEach((r, i) => {
        if (y >= r.top) idx = i
      })
      const sum = list.reduce((a, r) => a + r.h, 0) || 1
      const before = list.slice(0, idx).reduce((a, r) => a + r.h, 0)
      const within = Math.min(1, Math.max(0, (y - list[idx].top) / list[idx].h))
      setActive(idx)
      setHead(((before + within * list[idx].h) / sum) * 100)

      const max = document.documentElement.scrollHeight - window.innerHeight
      setFrac(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    measure()
    update()
    const ro = new ResizeObserver(() => {
      measure()
      update()
    })
    ro.observe(document.body)
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    window.addEventListener('load', on)
    return () => {
      ro.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
      window.removeEventListener('load', on)
    }
  }, [])

  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <nav className="scrub" aria-label="Page chapters">
      <span className="scrub__time" aria-hidden="true">{timecode(frac)}</span>
      <div className="scrub__track">
        {chapters.map((c, i) => (
          <button
            key={c.id}
            type="button"
            className={`scrub__seg ${i === active ? 'is-on' : ''}`}
            style={{ flexBasis: `${widths[i]}%` }}
            onClick={() => go(c.id)}
            aria-current={i === active ? 'true' : undefined}
          >
            <span>{c.label}</span>
          </button>
        ))}
        <i className="scrub__head" style={{ left: `${head}%` }} aria-hidden="true"></i>
      </div>
    </nav>
  )
}

export default Scrubber
