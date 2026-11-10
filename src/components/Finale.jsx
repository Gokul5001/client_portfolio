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
  return (
    <section id="contact" className="contact">
      <div className="wrap contact__grid">
        <div>
          <h2 className="title">Book the<br />next feature.</h2>
          <p className="sub" style={{ marginTop: 16 }}>
            Open for freelance projects and full-time roles. Send a short brief and we take it from there.
          </p>
          <a className="contact__mail" href="mailto:bilalfreelancer2003@gmail.com">bilalfreelancer2003@gmail.com</a>
        </div>
        <div className="ticket">
          <p className="ticket__admit">Admit one</p>
          <dl>
            <div><dt>Phone</dt><dd><a href="tel:+966597630124">+966 59 763 0124</a></dd></div>
            <div><dt>Location</dt><dd>Jeddah, Saudi Arabia</dd></div>
            <div><dt>Behance</dt><dd><a href="https://www.behance.net/wwwmuhammabilal110" target="_blank" rel="noreferrer">wwwmuhammabilal110</a></dd></div>
            <div><dt>LinkedIn</dt><dd>Muhammad Bilal</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}

function Credits() {
  return (
    <section id="credits" className="credits">
      <svg viewBox="0 0 80 40" width="72" height="36" aria-hidden="true">
        <circle cx="20" cy="20" r="14" fill="none" stroke="#d9b46a" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="4" fill="#d9b46a" />
        <rect x="36" y="14" width="40" height="12" fill="none" stroke="#d9b46a" strokeWidth="2.5" />
      </svg>
      <h2 className="credits__fin">Fin.</h2>
      <p className="credits__line">A Muhammad Bilal picture. Made in Jeddah, Saudi Arabia.</p>
      <a href="#poster" className="credits__again">Watch it again</a>
    </section>
  )
}

export { Awards, Contact, Credits }
