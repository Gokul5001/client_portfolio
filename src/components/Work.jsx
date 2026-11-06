import './Work.css'

// Replace `image` with real exports later, e.g. image: '/src/assets/work/delicious-kitchen.jpg'
const projects = [
  { title: 'Delicious Kitchen', category: 'Food · Social media', tone: 'warm' },
  { title: 'A Spark of Royalty', category: 'Jewellery · Campaign', tone: 'indigo' },
  { title: 'Honey Citrus Cooler', category: 'Beverage · Packaging', tone: 'amber' },
  { title: 'What Builds a Nation?', category: 'Independence Day · Education', tone: 'violet' },
  { title: 'On the Head — Markhor Stimulant Drink', category: 'Beverage · Advertising', tone: 'forest' },
  { title: 'Al Sark Chips', category: 'Snacks · Branding', tone: 'dark' },
  { title: 'Abeer Medical Group', category: 'Healthcare · Corporate', tone: 'teal' },
  { title: 'Real Estate Campaigns', category: 'Property · Bilingual layouts', tone: 'blue' },
]

function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-2 gap-3">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title mb-0">Recent projects.</h2>
          </div>
          <a
            href="https://www.behance.net/wwwmuhammabilal110"
            target="_blank"
            rel="noreferrer"
            className="btn btn-pill-outline"
          >
            Full portfolio on Behance ↗
          </a>
        </div>

        <div className="row g-4 mt-3">
          {projects.map((p) => (
            <div className="col-md-6 col-lg-3" key={p.title}>
              <article className="work-card">
                <div className={`work-card__thumb tone-${p.tone}`}></div>
                <div className="work-card__body">
                  <h3>{p.title}</h3>
                  <p>{p.category}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
