const items = [
  { title: 'Bachelor study in English art and literature', school: 'City University of Science and IT, Peshawar', period: 'Sep 2020 to Jul 2024' },
  { title: 'Diploma in digital marketing', school: 'National Skills University, Islamabad', period: 'Apr 2019 to Oct 2020' },
  { title: 'Diploma in information technology', school: 'National Skills University, Islamabad', period: 'Jun 2018 to Aug 2020' },
  { title: 'Diploma in office management', school: 'National Skills University, Islamabad', period: 'Apr 2018 to Oct 2018' },
  { title: 'Diploma in video editing', school: 'National Skills University, Islamabad', period: 'Apr 2018 to Oct 2018' },
  { title: 'Freelancing and graphic design course', school: 'University of Spoken English and CS, Peshawar', period: 'Jun 2017 to Dec 2017' },
]

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Education and training.</h2>
        </div>

        <ul className="rows">
          {items.map((e) => (
            <li className="rows__item" key={e.title}>
              <span className="rows__lead rows__lead--small">{e.period}</span>
              <div className="rows__main">
                <strong>{e.title}</strong>
              </div>
              <span className="rows__side">{e.school}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
