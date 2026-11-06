import './Experience.css'

const jobs = [
  { company: 'Oxford Academy', place: 'Jeddah, Saudi Arabia', period: 'Nov 2025 – Present' },
  { company: 'Creative Solution', place: 'Jeddah, Saudi Arabia', period: 'Aug 2025 – Nov 2025' },
  { company: 'Son of a Bee', place: 'Jeddah, Saudi Arabia', period: 'Jun 2025 – Jul 2025' },
  { company: 'Blood Chain Pakistan', place: 'Islamabad, Pakistan', period: 'Jun 2023 – Present' },
  { company: 'Saif Group Limited', place: 'Peshawar, Pakistan', period: 'Mar 2022 – Present' },
  { company: 'Khan Builders & Real Estate', place: 'Islamabad, Pakistan', period: '2022 – 2024' },
  { company: 'Markhor Group of Companies', place: 'Peshawar, Pakistan', period: 'Aug 2019 – Jun 2025' },
]

const awards = [
  { org: 'Creative Solution', date: 'Oct 2025', text: 'Branding, marketing creatives and promotional materials for collaborative projects with NADEC and Hyundai.' },
  { org: 'Markhor Group of Companies', date: 'Mar 2025', text: 'Outstanding performance and creative campaign execution in digital marketing and graphic design.' },
  { org: 'Blood Chain Pakistan', date: 'Jun 2023', text: 'Supporting blood donation awareness through strategy and design.' },
  { org: 'Saif Group Limited', date: 'Apr 2022', text: 'Creativity, strategy and measurable impact in a university-level digital marketing campaign.' },
]

function Experience() {
  return (
    <section id="experience" className="section-pad section-alt">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">Where I've worked.</h2>

        <div className="row g-5">
          <div className="col-lg-6">
            <ul className="timeline">
              {jobs.map((j) => (
                <li key={j.company}>
                  <div className="timeline__period">{j.period}</div>
                  <div className="timeline__company">{j.company}</div>
                  <div className="timeline__meta">Digital Marketing &amp; Graphic Designer · {j.place}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6">
            <h3 className="card-soft__title mb-3">Certificates of appreciation</h3>
            <div className="d-flex flex-column gap-3">
              {awards.map((a) => (
                <div className="card-soft" key={a.org}>
                  <div className="timeline__period">{a.date}</div>
                  <div className="timeline__company">{a.org}</div>
                  <p className="timeline__meta mb-0 mt-1">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
