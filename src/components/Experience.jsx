import './Experience.css'

const jobs = [
  { company: 'Oxford Academy', role: 'Senior graphic designer', place: 'Jeddah, Saudi Arabia', period: 'Nov 2025 to present' },
  { company: 'Creative Solution', role: 'Graphic designer', place: 'Jeddah, Saudi Arabia', period: 'Aug 2025 to Nov 2025' },
  { company: 'Son of a Bee', role: 'Digital marketing and graphic designer', place: 'Jeddah, Saudi Arabia', period: 'Jun 2025 to Jul 2025' },
  { company: 'Blood Chain Pakistan', role: 'Digital marketing and graphic designer', place: 'Islamabad, Pakistan', period: 'Jun 2023 to present' },
  { company: 'Saif Group Limited', role: 'Digital marketing and graphic designer', place: 'Peshawar, Pakistan', period: 'Mar 2022 to present' },
  { company: 'Khan Builders and Real Estate', role: 'Digital marketing and graphic designer', place: 'Islamabad, Pakistan', period: '2022 to 2024' },
  { company: 'Markhor Group of Companies', role: 'Digital marketing and graphic designer', place: 'Peshawar, Pakistan', period: 'Aug 2019 to Jun 2025' },
]

const awards = [
  { org: 'Creative Solution', date: 'Oct 2025', text: 'Branding, marketing creatives and promotional materials for collaborative projects with NADEC and Hyundai.' },
  { org: 'Markhor Group of Companies', date: 'Mar 2025', text: 'Outstanding performance and creative campaign execution in digital marketing and graphic design.' },
  { org: 'Blood Chain Pakistan', date: 'Jun 2023', text: 'Supporting blood donation awareness through strategy and design.' },
  { org: 'Saif Group Limited', date: 'Apr 2022', text: 'Creativity, strategy and measurable impact in a university-level digital marketing campaign.' },
]

function Experience() {
  return (
    <section id="experience" className="section section--stone">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Where I've worked.</h2>
          <p className="section-lead">
            Roles in Saudi Arabia and Pakistan, across education, real estate, retail and
            non-profit work.
          </p>
        </div>

        <ul className="rows">
          {jobs.map((j) => (
            <li className="rows__item" key={j.company}>
              <span className="rows__lead rows__lead--small">{j.period}</span>
              <div className="rows__main">
                <strong>{j.company}</strong>
                {j.role}
              </div>
              <span className="rows__side">{j.place}</span>
            </li>
          ))}
        </ul>

        <h3 className="experience__sub">Certificates of appreciation</h3>

        <ul className="rows">
          {awards.map((a) => (
            <li className="rows__item" key={a.org}>
              <span className="rows__lead rows__lead--small">{a.date}</span>
              <div className="rows__main">
                <strong>{a.org}</strong>
                {a.text}
              </div>
              <span className="rows__side"></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience
