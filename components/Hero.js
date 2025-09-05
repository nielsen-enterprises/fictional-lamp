export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-logo">
          <img 
            src="/NA_SPIRIT.svg" 
            alt="Nielsen Aerospace"
          />
        </div>
        
        <h1>
          OSINT Support<br/>
          <span className="hero-subtitle" style={{display: 'block', fontSize: '0.7em', color: '#bfdbfe'}}>FOR SPACE MISSIONS</span>
        </h1>
        
        <p className="hero-subtitle">
          Nielsen Aerospace Enterprises provides mission-critical customers with Open Source Intelligence regarding prelaunch, 
          launch, and post-launch/on-orbit activity by ally and adversary groups.
          <br /><br />
          Our tools capture space capability development, public sentiment, mission impact and hostility context for service 
          into mission recommenders, COA adjudication, and commander intent shaping activities.
        </p>
        
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get Started</a>
          <a href="#services" className="btn btn-secondary">Learn More</a>
        </div>
        
        <div style={{color: '#bfdbfe', fontSize: '1.125rem'}}>
          Advanced Intelligence Processing • Semantic Analysis • Real-time Monitoring
        </div>
      </div>
    </section>
  )
}