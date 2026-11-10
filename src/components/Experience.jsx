import { ExperienceArt } from './Illustrations'

const jobs = [
  { company: 'Oxford Academy', role: 'Senior graphic designer', place: 'Jeddah, Saudi Arabia', period: 'Nov 2025 to present' },
  { company: 'Creative Solution', role: 'Graphic designer', place: 'Jeddah, Saudi Arabia', period: 'Aug 2025 to Nov 2025' },
  { company: 'Son of a Bee', role: 'Digital marketing and graphic designer', place: 'Jeddah, Saudi Arabia', period: 'Jun 2025 to Jul 2025' },
  { company: 'Blood Chain Pakistan', role: 'Digital marketing and graphic designer', place: 'Islamabad, Pakistan', period: 'Jun 2023 to present' },
  { company: 'Saif Group Limited', role: 'Digital marketing and graphic designer', place: 'Peshawar, Pakistan', period: 'Mar 2022 to present' },
  { company: 'Khan Builders and Real Estate', role: 'Digital marketing and graphic designer', place: 'Islamabad, Pakistan', period: '2022 to 2024' },
  { company: 'Markhor Group of Companies', role: 'Digital marketing and graphic designer', place: 'Peshawar, Pakistan', period: 'Aug 2019 to Jun 2025' },
]

function Experience() {
  return (
    <section id="experience" className="section section--stone">
      <div className="container">
        <div className="split">
          <div className="split__aside">
            <h2 className="section-title">Where I've worked.</h2>
            <p className="section-lead">
              Roles in Saudi Arabia and Pakistan, across education, real estate, retail and
              non-profit work.
            </p>
            <div className="split__art">
              <ExperienceArt />
            </div>
          </div>

          <ul className="rows">
            {jobs.map((j) => (
              <li className="rows__item" key={j.company}>
                <span className="rows__lead rows__lead--small">{j.period}</span>
                <div className="rows__main">
                  <strong>{j.company}</strong>
                  {j.role}, {j.place}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
