import './Hero.css'
import portrait from '../assets/Professional Passport Portrait.png'

function Hero() {
  return (
    <section id="top" className="bilal-hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 order-2 order-lg-1">
            <p className="eyebrow">Graphic Designer · Digital Marketer</p>
            <h1 className="bilal-hero__title">Hi, I'm Muhammad Bilal </h1>
            <p className="bilal-hero__subhead">
              Senior graphic designer and digital marketing expert in
              Jeddah, turning brand goals into strategic content, pixel-perfect layouts and
              measurable digital impact.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#work" className="btn btn-pill-primary btn-lg">View my work</a>
              <a href="#contact" className="btn btn-pill-outline btn-lg">Let's talk</a>
            </div>
            <div className="bilal-stats d-flex flex-wrap gap-5 mt-5">
              <div>
                <div className="bilal-stats__num">6+</div>
                <div className="bilal-stats__label">Years of experience</div>
              </div>
              <div>
                <div className="bilal-stats__num">7</div>
                <div className="bilal-stats__label">Brands &amp; organisations</div>
              </div>
              <div>
                <div className="bilal-stats__num">4</div>
                <div className="bilal-stats__label">Certificates of appreciation</div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 text-center">
            {/* Replace with portrait: <img src="/src/assets/muhammad.jpg" alt="Muhammad Bilal" /> */}
            <div className="bilal-portrait">
  <img src={portrait} alt="Muhammad Bilal" />
</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
