function Contact() {
  return (
    <section id="contact" className="section-pad section-alt">
      <div className="container text-center">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Let's build something worth looking at.</h2>
        <p className="about-text mx-auto" style={{ maxWidth: 520 }}>
          Available for freelance projects and full-time roles. Based in Jeddah, Saudi Arabia.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a href="mailto:bilalfreelancer2003@gmail.com" className="btn btn-pill-primary btn-lg">
            bilalfreelancer2003@gmail.com
          </a>
          <a href="tel:+966597630124" className="btn btn-pill-outline btn-lg">+966 59 763 0124</a>
        </div>
        <div className="mt-4 d-flex justify-content-center gap-4">
          <a className="contact-link" href="https://www.behance.net/wwwmuhammabilal110" target="_blank" rel="noreferrer">Behance</a>
          <a className="contact-link" href="https://www.linkedin.com/in/muhammad-bilal-bbb93a36b" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
