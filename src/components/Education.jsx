const items = [
  { title: 'Bachelor Study in English Art & Literature', school: 'City University of Science & IT, Peshawar', period: 'Sep 2020 – Jul 2024' },
  { title: 'Diploma in Digital Marketing', school: 'National Skills University, Islamabad', period: 'Apr 2019 – Oct 2020' },
  { title: 'Diploma in Information Technology', school: 'National Skills University, Islamabad', period: 'Jun 2018 – Aug 2020' },
  { title: 'Diploma in Office Management', school: 'National Skills University, Islamabad', period: 'Apr 2018 – Oct 2018' },
  { title: 'Diploma in Video Editing', school: 'National Skills University, Islamabad', period: 'Apr 2018 – Oct 2018' },
  { title: 'Freelancing & Graphic Design Course', school: 'University of Spoken English & CS, Peshawar', period: 'Jun 2017 – Dec 2017' },
]

function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container">
        <p className="eyebrow">Education</p>
        <h2 className="section-title">Learning along the way.</h2>
        <div className="row g-4">
          {items.map((e) => (
            <div className="col-md-6 col-lg-4" key={e.title}>
              <div className="card-soft h-100">
                <div className="timeline__period">{e.period}</div>
                <h3 className="card-soft__title mt-2 mb-1">{e.title}</h3>
                <p className="timeline__meta mb-0">{e.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
