export default function Services() {
  const dataProducts = [
    {
      title: "Events Database",
      description: "Structured operational events with location, timing measurements, assessments, and strategic implications"
    },
    {
      title: "Indicator Feeds",
      description: "Machine-readable activity patterns for automated alerting and decision support"
    },
    {
      title: "Assessment Framework",
      description: "Operational posture evaluation with structured assessments and confidence controls"
    },
    {
      title: "Provenance Chain",
      description: "Complete audit trail from source to operational assessment"
    },
    {
      title: "Near-Peer Satellite Capabilities Analytics",
      description: "Comprehensive OSINT analysis of satellite capabilities through automated scraping, registry checks, and hands-on analyst research services"
    }
  ]

  const operationalValue = [
    "Early warning of operational activity patterns and capability deployments",
    "Strategic cost determinations and viable action assessments",
    "Commander intent context and hostility posture evaluation",
    "Integration with mission recommenders and COA adjudication systems",
    "Real-time threat assessment and anomaly detection for space domain awareness",
    "Automated intelligence fusion from multiple OSINT sources for comprehensive situational awareness"
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">OSINT Data Services</h2>
        <p className="section-subtitle">
          Comprehensive intelligence processing and analysis for mission-critical operations
        </p>
        
        <div className="grid grid-3" style={{marginBottom: '3rem'}}>
          {dataProducts.map((product, index) => (
            <div key={index} className="card">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        
        <div className="card" style={{background: '#f9fafb', marginBottom: '3rem'}}>
          <h3 style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem'}}>
            Operational Value
          </h3>
          <div className="grid grid-2">
            {operationalValue.map((value, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon"></div>
                <p style={{color: '#374151'}}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{background: '#1f2937', color: 'white'}}>
          <h3 style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem', color: 'white'}}>
            Near-Peer Satellite Capabilities Analytics
          </h3>
          <div className="grid grid-2">
            <div>
              <h4 style={{color: '#60a5fa', marginBottom: '1rem', fontSize: '1.125rem'}}>
                Automated Services
              </h4>
              <ul style={{color: '#d1d5db', lineHeight: '1.6'}}>
                <li>Automated scrape-and-test approaches for satellite registry data</li>
                <li>Continuous monitoring of launch activities and orbital deployments</li>
                <li>Real-time capability assessment through OSINT aggregation</li>
                <li>Automated pattern recognition for satellite constellation analysis</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: '#60a5fa', marginBottom: '1rem', fontSize: '1.125rem'}}>
                Hands-On Analyst Services
              </h4>
              <ul style={{color: '#d1d5db', lineHeight: '1.6'}}>
                <li>On-request research and deep-dive capability analysis</li>
                <li>Custom satellite tracking and behavior pattern studies</li>
                <li>Expert assessment of near-peer satellite threat capabilities</li>
                <li>Tailored intelligence reports for mission-specific requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}