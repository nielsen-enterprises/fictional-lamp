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
        
        <div className="grid grid-4" style={{marginBottom: '3rem'}}>
          {dataProducts.map((product, index) => (
            <div key={index} className="card">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        
        <div className="card" style={{background: '#f9fafb'}}>
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
      </div>
    </section>
  )
}