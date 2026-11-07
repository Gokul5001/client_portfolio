import './Skills.css'

const groups = [
  {
    title: 'Design',
    items: ['Brand identity', 'Social media design', 'Product packaging', 'Print design', 'Presentation design', 'Bilingual layouts', 'UI and UX basics', 'Website and app design'],
  },
  {
    title: 'Marketing',
    items: ['Content strategy', 'Platform management', 'Community management', 'Trend research'],
  },
  {
    title: 'Motion and video',
    items: ['Motion graphics', 'Video editing', 'Video animation'],
  },
  {
    title: 'Tools',
    items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Premiere Pro', 'CapCut', 'Figma', 'CorelDRAW', 'Canva and Canva Pro', 'MS Office'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="row gx-0 gx-lg-5 gy-5">
          <div className="col-lg-4">
            <h2 className="section-title">Skills and tools.</h2>
            <p className="section-lead">What I use to plan, design and ship campaigns.</p>
          </div>

          <div className="col-lg-8">
            <div className="skills-grid">
              {groups.map((g) => (
                <div key={g.title}>
                  <h3 className="skills-grid__title">{g.title}</h3>
                  <ul className="skills-grid__list">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
