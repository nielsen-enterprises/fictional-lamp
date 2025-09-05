export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img 
                src="/NA_LETTERHEAD.svg" 
                alt="Nielsen Aerospace Enterprises"
              />
            </div>
            <p style={{color: '#d1d5db', marginBottom: '1rem'}}>
              Advanced OSINT data processing and intelligence services for aerospace, defense, and enterprise applications.
            </p>
            <p style={{fontSize: '0.875rem', color: '#9ca3af'}}>
              © 2025 Nielsen Aerospace Enterprises. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 style={{fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem'}}>Services</h4>
            <ul className="footer-links">
              <li>OSINT Data Processing</li>
              <li>Intelligence Analysis</li>
              <li>Mission Support</li>
              <li>System Integration</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem'}}>Contact Information</h4>
            <div style={{color: '#d1d5db'}}>
              <p style={{marginBottom: '0.5rem'}}>Phone: +1 910 216-0299</p>
              <p>Email: sales@nielsen.enterprises</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Secure • Scalable • Mission-Ready | Available September 2025</p>
        </div>
      </div>
    </footer>
  )
}