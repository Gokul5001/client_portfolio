import { useRef } from 'react'
import './Finale.css'
import { useInView, useScramble } from '../hooks'

const awards = [
  { date: 'Oct 2025', org: 'Creative Solution', text: 'Branding, marketing creatives and promotional materials for collaborative projects with NADEC and Hyundai.' },
  { date: 'Mar 2025', org: 'Markhor Group of Companies', text: 'Outstanding performance and creative campaign execution in digital marketing and graphic design.' },
  { date: 'Jun 2023', org: 'Blood Chain Pakistan', text: 'Supporting blood donation awareness through strategy and design.' },
  { date: 'Apr 2022', org: 'Saif Group Limited', text: 'Creativity, strategy and measurable impact in a university-level digital marketing campaign.' },
]

function Awards() {
  const head = useRef(null)
  const seen = useInView(head)
  const word = useScramble('AWARDS', seen)
  return (
    <section id="awards" className="awards">
      <div className="wrap">
        <div ref={head} className="awards__head">
          <h2 className="title" aria-label="Awards"><span aria-hidden="true">{word}</span></h2>
          <p className="sub">Certificates of appreciation from four organisations.</p>
        </div>
        <div className="awards__grid">
          {awards.map((a, i) => (
            <article className="award rv in" key={a.org} style={{ '--d': `${i * 0.08}s` }}>
              <svg viewBox="0 0 48 64" width="30" height="40" aria-hidden="true">
                <path d="M24 4l5 10 11 1.5-8 7.6 2 11L24 29l-10 5.1 2-11-8-7.6L19 14z" fill="#d9b46a" />
                <path d="M14 40l-4 20 14-8 14 8-4-20" fill="none" stroke="#d9b46a" strokeWidth="2.5" strokeLinejoin="round" />
              </svg>
              <p className="award__date">{a.date}</p>
              <h3 className="award__org">{a.org}</h3>
              <p className="award__text">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const rows = [
    { k: 'WhatsApp', v: '+966 59 763 0124', href: 'https://wa.me/966597630124' },
    { k: 'Email', v: 'bilalfreelancer2003@gmail.com', href: 'mailto:bilalfreelancer2003@gmail.com' },
    { k: 'Behance', v: 'wwwmuhammabilal110', href: 'https://www.behance.net/wwwmuhammabilal110' },
    { k: 'LinkedIn', v: 'Muhammad Bilal' },
  ]
  return (
    <section id="contact" className="contact">
      <div className="wrap contact__grid">
        <div className="contact__copy">
          <h2 className="title">Let&rsquo;s roll.</h2>
          <p className="contact__lead">
            Tell Bilal what you&rsquo;re making and when it has to go out. Book the whole production, or just one department.
          </p>
          <svg className="contact__chair" viewBox="0 0 80 80" width="84" height="84" aria-hidden="true">
            <rect x="12" y="6" width="56" height="18" fill="none" stroke="#d9b46a" strokeWidth="1.6" />
            <rect x="14" y="8" width="52" height="14" fill="rgba(217,180,106,.35)" />
            <text x="40" y="19" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="9" fill="#d9b46a" letterSpacing="1">YOU</text>
            <rect x="10" y="38" width="60" height="6" fill="none" stroke="#d9b46a" strokeWidth="1.6" />
            <path d="M16 44L64 76M64 44L16 76" stroke="#d9b46a" strokeWidth="1.6" fill="none" />
            <path d="M16 24v14M64 24v14" stroke="#d9b46a" strokeWidth="1.6" />
          </svg>
        </div>

        <div className="ticket">
          <div className="ticket__main">
            <div className="ticket__top">
              <p className="ticket__admit">Admit one</p>
              <p className="ticket__no">No. 000001</p>
            </div>
            <div className="ticket__meta">
              <div><span>Feature</span><b>Your project</b></div>
              <div><span>Crew</span><b>Muhammad Bilal</b></div>
              <div><span>Seat</span><b>Front row</b></div>
            </div>
            <ul className="ticket__rows">
              {rows.map((r) => (
                <li key={r.k}>
                  <span className="ticket__k">{r.k}</span>
                  {r.href ? (
                    <a className="ticket__pill" href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{r.v}</a>
                  ) : (
                    <span className="ticket__pill">{r.v}</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="ticket__loc">Jeddah, Saudi Arabia</p>
          </div>
          <div className="ticket__stub" aria-hidden="true">
            <span className="ticket__soon">Booking soon</span>
            <span className="ticket__open">Open for freelance</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const crew = [
  ['Directed by', 'Muhammad Bilal'],
  ['Poster and key art', 'Muhammad Bilal'],
  ['Edited by', 'Muhammad Bilal'],
  ['AI cinematography', 'Muhammad Bilal'],
  ['Written by', 'Muhammad Bilal'],
  ['Marketing and release', 'Muhammad Bilal'],
  ['Colour', 'Muhammad Bilal'],
  ['Catering', 'Chai, mostly'],
  ['Next feature', 'Yours'],
]

function Credits() {
  return (
    <section id="credits" className="credits">
      <div className="wrap credits__roll">
        <header className="credits__head rv in">
          <h2 className="title credits__name">Muhammad Bilal</h2>
          <p className="credits__in">in</p>
          <p className="credits__film">A film about your next project</p>
        </header>

        <dl className="credits__crew">
          {crew.map(([role, name], i) => (
            <div className={`credits__row rv in${i >= crew.length - 2 ? ' is-dim' : ''}`} key={role} style={{ '--d': `${i * 0.05}s` }}>
              <dt>{role}</dt>
              <dd>{name}</dd>
            </div>
          ))}
        </dl>

        <div className="credits__thanks">
          <p>Filmed on location in Sahiwal, Punjab, Pakistan.</p>
          <p>Thank you for watching.</p>
        </div>
      </div>

      <div className="credits__end">
        <svg viewBox="0 0 120 56" width="112" height="52" aria-hidden="true">
          <circle cx="28" cy="28" r="22" fill="none" stroke="#d9b46a" strokeWidth="2" />
          <circle cx="28" cy="28" r="4.5" fill="#d9b46a" />
          {[0, 72, 144, 216, 288].map((deg) => (
            <circle key={deg} cx="28" cy="15" r="4.5" fill="#d9b46a" transform={`rotate(${deg} 28 28)`} />
          ))}
          <rect x="44" y="30" width="72" height="14" fill="#2a2214" stroke="#d9b46a" strokeWidth="2" />
          {[52, 62, 72, 82, 92, 102].map((x) => (
            <rect key={x} x={x} y="34" width="5" height="6" fill="#d9b46a" />
          ))}
        </svg>
        <h2 className="credits__fin">Fin.</h2>
        <p className="credits__line">A Muhammad Bilal picture. Made in Sahiwal, Punjab, Pakistan.</p>
        <a href="#poster" className="credits__again">Watch it again</a>
      </div>
    </section>
  )
}

export { Awards, Contact, Credits }