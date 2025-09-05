export default function Capabilities() {
  const coreCapabilities = [
    {
      title: "Multi-Source OSINT Ingestion",
      description: "RSS feeds, social media, official notices, and web scraping from multiple relevant sources"
    },
    {
      title: "Mission-Adaptive Focus",
      description: "Configurable for any operational domain including space, air, land, and cyber mission configurations"
    },
    {
      title: "Geotemporal Enrichment",
      description: "Precise location resolution and UTC-normalized temporal processing"
    },
    {
      title: "Structured Intelligence Products",
      description: "Machine-readable indicators, intent assessment, and full chain analysis for operational contexts"
    },
    {
      title: "COA Adjudication Support",
      description: "Activity patterns, hostility context, and operational intent shaping for mission awareness"
    }
  ]

  const keyFeatures = [
    {
      title: "Domain Extensibility",
      description: "Proven across multiple domains (space, air, land, cyber) with modular processing pipelines"
    },
    {
      title: "Air-Gapped Ready",
      description: "Offline-capable processing and alignment of previous scrapes and records with no external dependencies for secure environments"
    },
    {
      title: "Quality Assurance",
      description: "Confidence scoring, provenance tracking, and deduplication with >90% duplicate reduction rates"
    },
    {
      title: "Scalable Architecture",
      description: "Modular design supporting parallel processing and distributed deployment"
    },
    {
      title: "Advanced Analytics",
      description: "Semantic processing, entity extraction, sentiment analysis, and model training parameters"
    }
  ]

  return (
    <section id="capabilities" className="section bg-gray">
      <div className="container">
        <h2 className="section-title">Core Capabilities</h2>
        <p className="section-subtitle">
          Advanced OSINT processing with enterprise-grade reliability and security
        </p>
        
        <div className="grid grid-2" style={{marginBottom: '3rem'}}>
          <div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '2rem', color: '#1f2937'}}>Processing Capabilities</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {coreCapabilities.map((capability, index) => (
                <div key={index} className="card">
                  <h4 style={{color: '#2563eb', marginBottom: '0.5rem', fontSize: '1.125rem'}}>
                    {capability.title}
                  </h4>
                  <p>{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '2rem', color: '#1f2937'}}>Key Features</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {keyFeatures.map((feature, index) => (
                <div key={index} className="card">
                  <h4 style={{color: '#2563eb', marginBottom: '0.5rem', fontSize: '1.125rem'}}>
                    {feature.title}
                  </h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="card" style={{textAlign: 'center'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '2rem', color: '#1f2937'}}>
            Deployment Timeline
          </h3>
          
          <div style={{marginBottom: '2rem'}}>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1.5rem'}}>
              <div style={{background: '#10b981', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', fontSize: '0.875rem', fontWeight: '600'}}>
                ✓ COMPLETED
              </div>
            </div>
            <h4 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>
              2024-2025: Demonstrated Capability
            </h4>
            <p style={{color: '#6b7280', fontSize: '1rem'}}>
              SDA TAP LAB (USSF) Accelerator Cohorts 4 through 8
            </p>
          </div>

          <div style={{marginBottom: '2rem'}}>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1.5rem'}}>
              <div style={{background: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', fontSize: '0.875rem', fontWeight: '600'}}>
                UPCOMING
              </div>
            </div>
            <h4 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>
              September 2025: Enterprise Integration
            </h4>
            <p style={{color: '#6b7280', fontSize: '1rem', marginBottom: '1rem'}}>
              Full deployment ready for enterprise customers
            </p>
            
            <h4 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>
              Q4 2025: Global Marketplace
            </h4>
            <p style={{color: '#6b7280', fontSize: '1rem'}}>
              Available on Global Data Marketplace
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}