import React, { useState, useEffect } from 'react';
import { HeartPulse, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = import.meta.env.BASE_URL;

  // Active Link Helper
  const isActive = (path) => location.pathname === path;
  const isAboutActive = location.pathname.startsWith('/about');
  const isServicesActive = location.pathname.startsWith('/services');

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
            <a href="#" className={`nav-link ${isAboutActive ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
              About Us <ChevronDown size={14} style={{ display: 'inline', marginLeft: '2px' }} />
            </a>
            <div className="dropdown-menu">
              <Link to="/about/doctors" className={`dropdown-item ${isActive('/about/doctors') ? 'active' : ''}`}>Doctors</Link>
              <Link to="/about/smile-bright-dental" className={`dropdown-item ${isActive('/about/smile-bright-dental') ? 'active' : ''}`}>Smile Bright Dental</Link>
              <Link to="/about/media" className={`dropdown-item ${isActive('/about/media') ? 'active' : ''}`}>Media Center</Link>
            </div>
          </div>
          <div className="nav-item has-dropdown">
            <a href="#" className={`nav-link ${isServicesActive ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
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
            <Link to="/testimonials" className={`nav-link ${isActive('/testimonials') ? 'active' : ''}`}>Testimonials</Link>
          </div>
          <div className="nav-item">
            <Link to="/take-a-tour" className={`nav-link ${isActive('/take-a-tour') ? 'active' : ''}`}>Take a Tour</Link>
          </div>
          <div className="nav-item has-dropdown">
            <a href="#" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
              Contact Us <ChevronDown size={14} style={{ display: 'inline', marginLeft: '2px' }} />
            </a>
            <div className="dropdown-menu" style={{ right: 0, left: 'auto' }}>
              <Link to="/contact" className={`dropdown-item ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
              <Link to="/contact/feedback" className={`dropdown-item ${isActive('/contact/feedback') ? 'active' : ''}`}>Feedback</Link>
            </div>
          </div>
        </nav>

        <div className="header-actions desktop-nav">
          <a href="https://wa.me/919444408087" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Appointment</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-nav-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="mobile-nav-header">
                <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
                  <img src={`${baseUrl}logo.png`} alt="Smile Bright Logo" className="logo-img" />
                </Link>
                <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={32} />
                </button>
              </div>

              <nav className="mobile-menu-items">
                {[
                  {
                    title: 'About Us',
                    items: [
                      { label: 'Doctors', link: '/about/doctors' },
                      { label: 'Smile Bright Dental', link: '/about/smile-bright-dental' }
                    ]
                  },
                  {
                    title: 'Services',
                    items: [
                      { label: 'Teeth Replacement', link: '/services/teeth-replacement' },
                      { label: 'Teeth Alignment', link: '/services/teeth-alignment' },
                      { label: 'Teeth Cleaning', link: '/services/teeth-cleaning' }
                    ]
                  },
                  { label: 'Testimonials', link: '/testimonials' },
                  { label: 'Take a Tour', link: '/take-a-tour' },
                  { label: 'Contact Us', link: '/contact' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    {item.items ? (
                      <div className="mobile-dropdown">
                        <span className="mobile-nav-label">{item.title}</span>
                        <div className="mobile-dropdown-content">
                          {item.items.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              to={sub.link}
                              className="mobile-dropdown-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.link}
                        className="mobile-nav-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mobile-nav-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a href="https://wa.me/919444408087" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                  Book Appointment
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
