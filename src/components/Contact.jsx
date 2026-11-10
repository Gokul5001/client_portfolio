import './Contact.css'
import { ContactArt } from './Illustrations'

function Contact() {
  return (
    <section id="contact" className="section section--dark">
      <div className="container">
        <div className="row gx-0 gx-lg-5 gy-5 align-items-end">
          <div className="col-lg-7">
            <h2 className="section-title contact__title">Have a project in mind?</h2>
            <p className="section-lead">
              I'm available for freelance projects and full-time roles. Send a short brief and we
              can take it from there.
            </p>
            <a className="contact__email" href="mailto:bilalfreelancer2003@gmail.com">
              bilalfreelancer2003@gmail.com
            </a>
          </div>

          <div className="col-lg-5">
            <div className="contact__art">
              <ContactArt />
            </div>
            <dl className="contact__list">
              <div>
                <dt>Phone</dt>
                <dd><a href="tel:+966597630124">+966 59 763 0124</a></dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Jeddah, Saudi Arabia</dd>
              </div>
              <div>
                <dt>Behance</dt>
                <dd>
                  <a href="https://www.behance.net/wwwmuhammabilal110" target="_blank" rel="noreferrer">
                    behance.net/wwwmuhammabilal110
                  </a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href="https://www.linkedin.com/in/muhammad-bilal-bbb93a36b" target="_blank" rel="noreferrer">
                    Muhammad Bilal
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
