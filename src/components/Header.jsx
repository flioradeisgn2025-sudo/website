import React, { useState, useEffect } from 'react';
import { HeartPulse, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={`${baseUrl}logo.png`} alt="Smile Bright Logo" className="logo-img" />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <div className="nav-item has-dropdown">
            <a href="#about" className="nav-link">
              About Us <ChevronDown size={14} style={{ display: 'inline', marginLeft: '2px' }} />
            </a>
            <div className="dropdown-menu">
              <Link to="/about/dr-sasha-helene" className="dropdown-item">Dr. Sasha Helene</Link>
              <Link to="/about/smile-bright-dental" className="dropdown-item">Smile Bright Dental</Link>
              <Link to="/about/media" className="dropdown-item">Media</Link>
            </div>
          </div>
          <div className="nav-item has-dropdown">
            <a href="#services" className="nav-link">
              Services <ChevronDown size={14} style={{ display: 'inline', marginLeft: '2px' }} />
            </a>
            <div className="dropdown-menu">
              <Link to="/services/teeth-replacement" className="dropdown-item">Teeth Replacement</Link>
              <Link to="/services/teeth-alignment" className="dropdown-item">Teeth Alignment</Link>
              <Link to="/services/pain-management" className="dropdown-item">Pain Management</Link>
              <Link to="/services/preventive-dentistry" className="dropdown-item">Preventive Dentistry</Link>
              <Link to="/services/laser-dentistry" className="dropdown-item">Laser Dentistry</Link>
              <Link to="/services/sedation-dentistry" className="dropdown-item">Sedation Dentistry</Link>
              <Link to="/services/paediatric-dentistry" className="dropdown-item">Paediatric Dentistry</Link>
              <Link to="/services/teeth-cleaning" className="dropdown-item">Teeth Cleaning</Link>
              <Link to="/services/teeth-whitening" className="dropdown-item">Teeth Whitening</Link>
              <Link to="/services/oral-cancer-screening" className="dropdown-item">Oral Cancer Screening</Link>
            </div>
          </div>

          <div className="nav-item">
            <Link to="/testimonials" className="nav-link">Testimonials</Link>
          </div>
          <div className="nav-item">
            <Link to="/take-a-tour" className="nav-link">Take a Tour</Link>
          </div>
          <div className="nav-item has-dropdown">
            <a href="#contact" className="nav-link">
              Contact Us <ChevronDown size={14} style={{ display: 'inline', marginLeft: '2px' }} />
            </a>
            <div className="dropdown-menu" style={{ right: 0, left: 'auto' }}>
              <Link to="/contact" className="dropdown-item">Contact Us</Link>
              <Link to="/contact/feedback" className="dropdown-item">Feedback</Link>
            </div>
          </div>
        </nav>

        <div className="header-actions desktop-nav">
          <button className="btn btn-primary">Book Appointment</button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-nav animate-fade-in">
          <div className="has-dropdown">
            <a href="#about" className="nav-link">About Us</a>
            <div className="mobile-dropdown-menu">
              <Link to="/about/dr-sasha-helene" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Dr. Sasha Helene</Link>
              <Link to="/about/smile-bright-dental" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Smile Bright Dental</Link>
              <Link to="/about/media" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Media</Link>
            </div>
          </div>
          <div className="has-dropdown">
            <a href="#services" className="nav-link">Services</a>
            <div className="mobile-dropdown-menu">
              <a href="#" className="dropdown-item">Teeth Replacement</a>
              <a href="#" className="dropdown-item">Teeth Alignment</a>
              <a href="#" className="dropdown-item">Pain Management</a>
            </div>
          </div>
          <Link to="/testimonials" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
          <Link to="/take-a-tour" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Take a Tour</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          <Link to="/contact/feedback" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Feedback</Link>
          <div className="mobile-nav-actions">
            <button className="btn btn-primary w-full">Book Appointment</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
