function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <p className="eyebrow">About</p>
            <h2 className="section-title">Strategy and design, in one pair of hands.</h2>
          </div>
          <div className="col-lg-7">
            <p className="about-text">
              I'm a results-driven digital marketing expert and graphic designer who builds brand
              presence through strategic content and compelling visual design. I use data-driven
              insights to develop campaigns that lift engagement, audience growth and conversions.
            </p>
            <p className="about-text">
              From content strategy and social media management to brand identity, packaging and
              bilingual layouts, I help businesses translate their goals into measurable digital
              impact.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              {['English — Fluent', 'Urdu — Native', 'Pashto — Native', 'Arabic — Conversational'].map((l) => (
                <span key={l} className="chip">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
