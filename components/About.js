export default function About() {
  return (
    <section className="section bg-gray">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Leadership</h2>
          <p className="section-subtitle">
            Pioneering Intelligence Solutions Through Advanced Analytics
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/alex_nielsen.jpeg" 
              alt="Alex Nielsen, Founder & CEO"
              className="headshot"
            />
          </div>
          
          <div className="about-text">
            <h3 className="about-name">Alex Nielsen</h3>
            <h4 className="about-title">Founder & Principal Architect</h4>
            
            <div className="bio">
              <p>
                Alex Nielsen is an innovation and integration specialist with an Active Secret Clearance who has 
                spearheaded transformative technology initiatives across space, defense, health, and cloud domains. 
                As a Principal Investigator and Research Director, he has captured and led over <strong>$10 million in funded research </strong> 
                while contributing to an additional <strong>$20+ million in support and innovation roles</strong>, driving real-world 
                impact and successful commercialization.
              </p>
              
              <p>
                His academic foundation includes doctoral studies (ABD) in Complex Information Systems Design and Technical Communication from Old Dominion University. 
                Nielsen has served in executive roles including <strong>Director of Strategic Capabilities Development</strong> at Virginia 
                Modeling, Analysis & Simulation Center and <strong>Co-Director of the Applied Research Cloud Center of Excellence</strong>. 
                His peer-reviewed research emphasizes open-source platforms, high-trust simulations, and user-centric design.
              </p>
              
              <p>
                Nielsen has designed and delivered classified products exceeding <strong>$3M in value</strong> within Defense industry 
                domains including International Agreements, Intelligence Automation, and Multi-modal AI Data Fusion systems 
                under highly-controlled environments to <strong>Impact Level 6</strong>. His portfolio spans Space Force Apollo 
                Accelerator leadership (Cohorts 4-6), NATO Innovation Hub partnerships, and AWS Research Champion recognition.
              </p>
              
              <p>
                Currently leading Nielsen Aerospace Enterprises in advancing Space Domain Awareness through OSINT capabilities, 
                Nielsen bridges cutting-edge technology with mission-driven products, emphasizing transparent, impactful solutions 
                that drive operational excellence in the aerospace and defense sectors.
              </p>
            </div>
            
            <div className="credentials">
              <div className="credential-item">
                <span className="credential-label">Education:</span>
                <span className="credential-value">Old Dominion University (ABD) - Complex Information Systems Design</span>
              </div>
              <div className="credential-item">
                <span className="credential-label">Clearance:</span>
                <span className="credential-value">Active Secret Clearance</span>
              </div>
              <div className="credential-item">
                <span className="credential-label">Research:</span>
                <span className="credential-value">$10M+ Principal Investigator, $20M+ Supporting Roles</span>
              </div>
              <div className="credential-item">
                <span className="credential-label">Leadership:</span>
                <span className="credential-value">Director Strategic Capabilities, Space Force Apollo Accelerator</span>
              </div>
              <div className="credential-item">
                <span className="credential-label">Recognition:</span>
                <span className="credential-value">AWS Research Champion, NATO Innovation Hub Analyst</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
