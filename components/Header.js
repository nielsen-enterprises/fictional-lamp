import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src="/NA_LETTERHEAD.svg" 
              alt="Nielsen Aerospace Enterprises"
            />
          </div>
          
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <div className="contact-info">
            <div>Phone: +1 910 216-0299</div>
            <div>Email: sales@nielsen.enterprises</div>
          </div>
        </div>
      </div>
    </header>
  )
}