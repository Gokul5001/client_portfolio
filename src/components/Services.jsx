const services = [
  {
    title: 'Brand identity',
    text: 'Logos, colour and type systems, plus the guidelines that keep a brand consistent everywhere it appears.',
    side: 'Logo, guidelines, stationery',
  },
  {
    title: 'Social media design',
    text: 'Campaign posts, carousels and stories planned around a content calendar and the audience behind it.',
    side: 'Posts, carousels, stories',
  },
  {
    title: 'Packaging and print',
    text: 'Product packaging, flyers, brochures and presentation decks, prepared for press.',
    side: 'Packaging, flyers, decks',
  },
  {
    title: 'Digital marketing',
    text: 'Content strategy, platform management and community management guided by audience data and trends.',
    side: 'Strategy, management, reporting',
  },
  {
    title: 'Motion and video',
    text: 'Short motion graphics and edited video for ads and social channels.',
    side: 'Motion graphics, video editing',
  },
  {
    title: 'Website and app design',
    text: 'Interface layouts built in Figma, with clear structure and consistent components.',
    side: 'Page layouts, UI basics',
  },
]

function Services() {
  return (
    <section id="services" className="section section--stone">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">What I can do for your brand.</h2>
          <p className="section-lead">
            Design and marketing work from a single person, so the strategy and the visuals stay
            connected.
          </p>
        </div>

        <ul className="rows">
          {services.map((s) => (
            <li className="rows__item" key={s.title}>
              <h3 className="rows__lead m-0">{s.title}</h3>
              <p className="rows__main m-0">{s.text}</p>
              <p className="rows__side m-0">{s.side}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services
