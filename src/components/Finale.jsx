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

const stroke = { fill: 'none', stroke: '#d9b46a', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' }

const contactIcons = {
  WhatsApp: (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <path d="M20 6a14 14 0 0 0-12 21l-2 7 7-2a14 14 0 1 0 7-26z" {...stroke} />
      <path d="M15 15c0 5 5 10 10 10l2-3-4-2-2 1c-2-1-3-2-4-4l1-2-2-4z" fill="#d9b46a" stroke="none" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <rect x="5" y="9" width="30" height="22" rx="3" {...stroke} />
      <path d="M6 12l14 11 14-11" {...stroke} />
    </svg>
  ),
  Behance: (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <rect x="5" y="7" width="30" height="26" rx="3" {...stroke} />
      <path d="M5 15h30" {...stroke} />
      <circle cx="12" cy="11" r="1.4" fill="#d9b46a" stroke="none" />
      <circle cx="17" cy="11" r="1.4" fill="#d9b46a" stroke="none" />
      <path d="M12 26l5-6 4 4 3-3 4 5" {...stroke} />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <rect x="5" y="5" width="30" height="30" rx="4" {...stroke} />
      <path d="M13 17v10M13 12v1" {...stroke} />
      <path d="M19 27V17M19 21c0-5 9-5 9 0v6" {...stroke} />
    </svg>
  ),
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
      <div className="wrap">
        <div className="contact__head">
          <h2 className="title">Let&rsquo;s roll.</h2>
          <p className="contact__status"><i aria-hidden="true"></i>Open for freelance &middot; Jeddah, Saudi Arabia</p>
        </div>

        <ul className="contact__cards">
          {rows.map((r) => {
            const inner = (
              <>
                <span className="contact__icon">{contactIcons[r.k]}</span>
                <span className="contact__k">{r.k}</span>
                <span className="contact__v">{r.v}</span>
              </>
            )
            return (
              <li key={r.k}>
                {r.href ? (
                  <a className="contact__card" href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{inner}</a>
                ) : (
                  <div className="contact__card">{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Credits() {
  return (
    <section id="credits" className="credits">
      <div className="wrap credits__roll">
        <header className="credits__head rv in">
          <h2 className="title credits__name">Muhammad Bilal</h2>
          <p className="credits__in">in</p>
          <p className="credits__film">A film about your next project</p>
        </header>
      </div>
    </section>
  )
}

export { Awards, Contact, Credits }