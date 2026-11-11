import { useEffect, useRef, useState } from 'react'
import './Education.css'
import { useInView, useScramble } from '../hooks'

// roll = year the course started
const items = [
  { roll: 2020, title: 'Bachelor study in English literature', school: 'City University of Science and IT, Peshawar', period: 'Sep 2020 to Jul 2024' },
  { roll: 2018, title: 'FSc (Faculty of Science)', school: 'Frontier College System, Peshawar', period: 'Apr 2018 to Jul 2020' },
]

const certItems = [
  {
    roll: 2017,
    title: 'Diploma and certifications',
    list: [
      { name: 'Diploma in digital marketing', school: 'National Skills University, Islamabad', period: 'Apr 2019 to Oct 2020' },
      { name: 'Diploma in information technology', school: 'National Skills University, Islamabad', period: 'Jun 2018 to Aug 2020' },
      { name: 'Diploma in office management', school: 'National Skills University, Islamabad', period: 'Apr 2018 to Oct 2018' },
      { name: 'Diploma in video editing', school: 'National Skills University, Islamabad', period: 'Apr 2018 to Oct 2018' },
      { name: 'Freelancing and graphic design course', school: 'University of Spoken English and CS, Peshawar', period: 'Jun 2017 to Dec 2017' },
    ],
  },
]

function Board({ item, scene, production }) {
  const ref = useRef(null)
  const seen = useInView(ref, '-18% 0px')

  return (
    <div ref={ref} className={`board ${seen ? 'is-in' : ''}`}>
      <div className="board__clap" aria-hidden="true"></div>
      <div className="board__body">
        <p className="board__k">Production</p>
        <p className="board__v">{production}</p>
        <div className="board__nums">
          <div><span>Roll</span><b>{item.roll}</b></div>
          <div><span>Scene</span><b>{scene}</b></div>
          <div><span>Take</span><b>1</b></div>
        </div>
        <p className="board__k">Title</p>
        <p className="board__title">{item.title}</p>
        {item.list ? (
          <ul className="board__list">
            {item.list.map((c) => (
              <li key={c.name}>
                <b>{c.name}</b>
                <span>{c.school}</span>
                <em>{c.period}</em>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p className="board__k">Location</p>
            <p className="board__loc">{item.school}</p>
            <p className="board__period">{item.period}</p>
          </>
        )}
      </div>
    </div>
  )
}

// Gold curve that threads the clapperboards, drawn as the page scrolls.
function Thread({ listRef }) {
  const [geo, setGeo] = useState({ w: 0, h: 0, d: '' })
  const [p, setP] = useState(0)
  const path = useRef(null)
  const [len, setLen] = useState(0)

  useEffect(() => {
    const list = listRef.current
    if (!list) return undefined
    const measure = () => {
      const base = list.getBoundingClientRect()
      const pts = [...list.querySelectorAll('.edu__dot')].map((d) => {
        const r = d.getBoundingClientRect()
        return [r.left - base.left + r.width / 2, r.top - base.top + r.height / 2]
      })
      // dots on the centre line, with waypoints swinging left and right between them
      const swing = Math.min(240, base.width * 0.2)
      const way = []
      pts.forEach((pt, i) => {
        way.push(pt)
        if (i < pts.length - 1) {
          const n = pts[i + 1]
          way.push([pt[0] + (i % 2 ? -swing : swing), (pt[1] + n[1]) / 2])
        }
      })
      // Catmull-Rom through the waypoints gives one smooth, kink-free line
      let d = way.length ? `M${way[0][0]},${way[0][1]}` : ''
      for (let i = 0; i < way.length - 1; i++) {
        const p0 = way[i - 1] || way[i], p1 = way[i], p2 = way[i + 1], p3 = way[i + 2] || p2
        d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`
      }
      setGeo({ w: base.width, h: base.height, d })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(list)
    return () => ro.disconnect()
  }, [listRef])

  useEffect(() => {
    if (path.current) setLen(path.current.getTotalLength())
  }, [geo.d])

  useEffect(() => {
    const calc = () => {
      const r = listRef.current?.getBoundingClientRect()
      if (!r) return
      setP(Math.min(1, Math.max(0, (window.innerHeight * 0.75 - r.top) / r.height)))
    }
    calc()
    window.addEventListener('scroll', calc, { passive: true })
    window.addEventListener('resize', calc)
    return () => {
      window.removeEventListener('scroll', calc)
      window.removeEventListener('resize', calc)
    }
  }, [listRef])

  if (!geo.d) return null
  return (
    <svg className="edu__thread" width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w} ${geo.h}`} aria-hidden="true">
      <path ref={path} d={geo.d} fill="none" stroke="#d9b46a" strokeWidth="1.6" strokeLinecap="round"
        strokeDasharray={len || 1} strokeDashoffset={len ? len * (1 - p) : 1} />
    </svg>
  )
}

function Block({ id, items, word: heading, sub, icon, production }) {
  const listRef = useRef(null)
  const head = useRef(null)
  const seen = useInView(head)
  const word = useScramble(heading.toUpperCase(), seen)

  return (
    <section id={id} className="edu">
      <div className="wrap">
        <div ref={head} className="edu__head">
          <div>
            <h2 className="title edu__title" aria-label={heading}>
              <span aria-hidden="true">{word}</span>
            </h2>
            <p className="sub" style={{ marginTop: 14 }}>{sub}</p>
          </div>
          {icon}
        </div>

        <ol ref={listRef} className="edu__list">
          <Thread listRef={listRef} />
          {items.map((it, i) => (
            <li className="edu__item" key={it.title}>
              <span className="edu__year" aria-hidden="true">{it.roll}</span>
              <span className="edu__dot" aria-hidden="true"></span>
              <Board item={it} scene={items.length - i} production={production} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const capIcon = (
  <svg className="edu__cap" viewBox="0 0 120 90" width="96" height="72" aria-hidden="true">
    <path d="M60 8L8 32l52 24 52-24z" fill="#d9b46a" />
    <path d="M28 46v22c0 8 14 14 32 14s32-6 32-14V46L60 58z" fill="none" stroke="#d9b46a" strokeWidth="4" strokeLinejoin="round" />
    <path d="M108 36v30" stroke="#d9b46a" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

// certificate with a ribbon, drawn in the same gold line style as the cap
const certIcon = (
  <svg className="edu__cap" viewBox="0 0 120 90" width="96" height="72" aria-hidden="true">
    <rect x="12" y="8" width="96" height="62" rx="4" fill="none" stroke="#d9b46a" strokeWidth="4" strokeLinejoin="round" />
    <path d="M30 28h60M30 40h40" stroke="#d9b46a" strokeWidth="4" strokeLinecap="round" />
    <circle cx="86" cy="54" r="9" fill="#d9b46a" />
    <path d="M80 62l-4 20 10-6 10 6-4-20" fill="#d9b46a" />
  </svg>
)

function Education() {
  return (
    <>
      <Block
        id="education"
        items={items}
        word="Education"
        sub="Every take that led here, in order."
        icon={capIcon}
        production="Education"
      />
      <Block
        id="certification"
        items={certItems}
        word="Certification and Graphics"
        sub="The extra reels: diplomas, courses and craft."
        icon={certIcon}
        production="Certification and Graphics"
      />
    </>
  )
}

export default Education