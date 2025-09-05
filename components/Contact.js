export default function Contact() {
  return (
    <section id="contact" className="section bg-blue">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem'}}>
            Ready to Deploy OSINT Capabilities?
          </h2>
          <p style={{fontSize: '1.25rem', color: '#bfdbfe', maxWidth: '600px', margin: '0 auto'}}>
            Contact our team to discuss implementation, custom configurations, and integration with your existing systems.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="card">
            <h3 style={{fontSize: '1.5rem', marginBottom: '2rem'}}>Get in Touch</h3>
            
            <div>
              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 910 216-0299</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>sales@nielsen.enterprises</p>
                </div>
              </div>
            </div>
            
            <div style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb'}}>
              <p style={{fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem'}}>
                Available for consultation on:
              </p>
              <div className="tags">
                <span className="tag">Custom Implementation</span>
                <span className="tag">System Integration</span>
                <span className="tag">Training & Support</span>
                <span className="tag">Automation Services</span>
              </div>
            </div>
          </div>
          
          <div style={{color: 'white'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '2rem'}}>Why Choose Nielsen Aerospace?</h3>
            <div>
              <div className="feature-item">
                <div className="feature-icon" style={{background: '#bfdbfe'}}></div>
                <p>Proven expertise in aerospace and defense OSINT processing</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon" style={{background: '#bfdbfe'}}></div>
                <p>Secure, air-gap-ready solutions for sensitive environments</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon" style={{background: '#bfdbfe'}}></div>
                <p>Scalable architecture designed for enterprise deployment</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon" style={{background: '#bfdbfe'}}></div>
                <p>Rich partner network for cross-domain integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}