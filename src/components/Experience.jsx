import { useMemo, useRef } from 'react'
import './Experience.css'
import { scrollToProgress, useSectionProgress } from '../hooks'

// Axis: Jan 2019 → Dec 2026 (96 months). "present" runs to the end of the axis.
const START_YEAR = 2019
const MONTHS = 96
const m = (y, mo) => (y - START_YEAR) * 12 + (mo - 1)
const END = MONTHS - 1

const jobs = [
  { company: 'Markhor Group of Companies', role: 'Digital marketing and graphic designer', place: 'Peshawar, Pakistan', period: 'Aug 2019 to Jun 2025', from: m(2019, 8), to: m(2025, 6) },
  { company: 'Saif Group Limited', role: 'Digital marketing and graphic designer', place: 'Peshawar, Pakistan', period: 'Mar 2022 to present', from: m(2022, 3), to: END },
  { company: 'Khan Builders and Real Estate', role: 'Digital marketing and graphic designer', place: 'Islamabad, Pakistan', period: '2022 to 2024', from: m(2022, 1), to: m(2024, 12) },
  { company: 'Blood Chain Pakistan', role: 'Digital marketing and graphic designer', place: 'Islamabad, Pakistan', period: 'Jun 2023 to present', from: m(2023, 6), to: END },
  { company: 'Son of a Bee', role: 'Digital marketing and graphic designer', place: 'Jeddah, Saudi Arabia', period: 'Jun 2025 to Jul 2025', from: m(2025, 6), to: m(2025, 7) },
  { company: 'Creative Solution', role: 'Graphic designer', place: 'Jeddah, Saudi Arabia', period: 'Aug 2025 to Nov 2025', from: m(2025, 8), to: m(2025, 11) },
  { company: 'Oxford Academy', role: 'Senior graphic designer', place: 'Jeddah, Saudi Arabia', period: 'Nov 2025 to present', from: m(2025, 11), to: END },
]

// Pack the jobs onto as few tracks as possible so bars never overlap.
function pack(list) {
  const ends = []
  return [...list]
    .sort((a, b) => a.from - b.from)
    .map((j) => {
      let lane = ends.findIndex((e) => e < j.from)
      if (lane === -1) lane = ends.length
      ends[lane] = j.to
      return { ...j, lane }
    })
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const label = (t) => `${MONTH_NAMES[t % 12]} ${START_YEAR + Math.floor(t / 12)}`
const years = Array.from({ length: 8 }, (_, i) => START_YEAR + i)
const TRACK_NAMES = ['Track 01', 'Track 02', 'Track 03', 'Track 04']

function Experience() {
  const ref = useRef(null)
  const p = useSectionProgress(ref)
  const placed = useMemo(() => pack(jobs), [])
  const lanes = Math.max(...placed.map((j) => j.lane)) + 1

  // playhead moves from Jan 2019 to the end of the axis as the page scrolls
  const t = p * END
  const pool = placed.filter((j) => j.from <= t + 0.01)
  const live = pool.filter((j) => j.to >= t)
  const current = (live.length ? live : pool).sort((a, b) => b.from - a.from)[0] || placed[0]

  return (
    <section id="experience" ref={ref} className="exp" style={{ height: `${jobs.length * 55 + 100}vh` }}>
      <div className="exp__sticky">
        <div className="wrap exp__inner">
          <header className="exp__head">
            <h2 className="title">Experience</h2>
            <p className="sub">The career, cut on a timeline. Scrolling plays it; select a clip to jump there.</p>
          </header>

          <div className={`monitor lane-${current.lane}`}>
            <div className="monitor__bar">
              <span>Program <b>BILAL_CAREER_FINAL</b></span>
              <span className="monitor__time">{label(Math.round(t))}</span>
            </div>
            <div className="monitor__frame" key={current.company}>
              <p className="monitor__tag">
                {current.period}
              </p>
              <h3 className="monitor__title">{current.company}</h3>
              <p className="monitor__role">{current.role}</p>
              <p className="monitor__place">{current.place}</p>
            </div>
          </div>

          <div className="tl" style={{ '--lanes': lanes }}>
            <div className="tl__row tl__row--axis">
              <span className="tl__label">Year</span>
              <div className="tl__area">
                {years.map((y) => (
                  <span key={y} className="tl__tick" style={{ left: `${((y - START_YEAR) * 12 / MONTHS) * 100}%` }}>{y}</span>
                ))}
                <span className="tl__tick tl__tick--now" style={{ left: `${(END / MONTHS) * 100}%` }}>Now</span>
              </div>
            </div>

            {Array.from({ length: lanes }, (_, lane) => (
              <div className="tl__row" key={lane}>
                <span className="tl__label">{TRACK_NAMES[lane % 4]}</span>
                <div className="tl__area">
                  {placed
                    .filter((j) => j.lane === lane)
                    .map((j) => (
                      <button
                        key={j.company}
                        type="button"
                        className={`tl__bar lane-${lane} ${j.company === current.company ? 'is-current' : ''}`}
                        style={{
                          left: `${(j.from / MONTHS) * 100}%`,
                          width: `${Math.max(((j.to - j.from + 1) / MONTHS) * 100, 1.4)}%`,
                        }}
                        title={`${j.company} · ${j.period}`}
                        onClick={() => scrollToProgress(ref.current, j.from / END)}
                      >
                        <span>{j.company}</span>
                      </button>
                    ))}
                </div>
              </div>
            ))}

            <div className="tl__headwrap" aria-hidden="true">
              <i className="tl__head" style={{ left: `${(t / MONTHS) * 100}%` }}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
