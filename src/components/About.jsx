import './About.css'
import { portrait } from '../data/images'

const languages = [
  ['English', 'Fluent'],
  ['Urdu', 'Native'],
  ['Pashto', 'Native'],
  ['Arabic', 'Conversational'],
]

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row gx-0 gx-lg-5 gy-5 align-items-start">
          <div className="col-lg-5">
            <figure className="about__photo">
              {portrait ? (
                <img src={portrait} alt="Muhammad Bilal" />
              ) : (
                <div className="about__photo-empty">MB</div>
              )}
              <figcaption>
                <span lang="ar" dir="rtl">محمد بلال</span>
                <small>Jeddah, Saudi Arabia</small>
              </figcaption>
            </figure>
          </div>

          <div className="col-lg-7">
            <h2 className="section-title">I turn a brand's goals into work people notice.</h2>

            <p className="about__text">
              I'm a digital marketing expert and graphic designer who builds brand presence through
              strategic content and visual design. I use audience data to shape campaigns that grow
              engagement, followers and conversions.
            </p>
            <p className="about__text">
              My work ranges from content strategy and social media management to brand identity,
              packaging and bilingual layouts. Today I'm a senior graphic designer at Oxford
              Academy in Jeddah.
            </p>

            <dl className="about__langs">
              {languages.map(([lang, level]) => (
                <div key={lang}>
                  <dt>{lang}</dt>
                  <dd>{level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
