import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const baseUrl = import.meta.env.BASE_URL;
    return (
        <footer className="footer section">
            <div className="container">

                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <a href="#" className="logo">
                            <img src={`${baseUrl}logo.png`} alt="Smile Bright Logo" style={{ height: '160px', filter: 'brightness(0) invert(1)' }} />
                        </a>
                        <p className="footer-desc">
                            Looking after Chennai's smiles for more than two decades — implants,
                            alignment, laser dentistry, and the everyday work that keeps a mouth
                            healthy. Specialist care without the rush.
                        </p>
                        <div className="social-links">
                            <a href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}><Facebook size={20} /></a>
                            <a href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}><Twitter size={20} /></a>
                            <a href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}><Instagram size={20} /></a>
                            <a href="#" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }}><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/about/smile-bright-dental">Smile Bright Dental</Link></li>
                            <li><Link to="/about/doctors">Our Specialists</Link></li>
                            <li><Link to="/take-a-tour">Take a Tour</Link></li>
                            <li><Link to="/about/media">Media & Gallery</Link></li>
                            <li><Link to="/testimonials">Patient Testimonials</Link></li>
                            <li><Link to="/contact/feedback">Patient Feedback</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Our Services</h3>
                        <ul>
                            <li><Link to="/services/teeth-replacement">Teeth Replacement</Link></li>
                            <li><Link to="/services/teeth-alignment">Teeth Alignment</Link></li>
                            <li><Link to="/services/pain-management">Pain Management</Link></li>
                            <li><Link to="/services/preventive-dentistry">Preventive Dentistry</Link></li>
                            <li><Link to="/services/laser-dentistry">Laser Dentistry</Link></li>
                            <li><Link to="/services/sedation-dentistry">Sedation Dentistry</Link></li>
                            <li><Link to="/services/pediatric-dentistry">Pediatric Dentistry</Link></li>
                            <li><Link to="/services/teeth-cleaning">Teeth Cleaning</Link></li>
                            <li><Link to="/services/teeth-whitening">Teeth Whitening</Link></li>
                            <li><Link to="/services/oral-cancer-screening">Oral Cancer Screening</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h3>Contact Info</h3>
                        <ul className="contact-info">
                            <li>
                                <MapPin size={20} />
                                <span>#38/238, Angappa Naicken Street, Mannady, Landmark: Near Eidgah Mosque., Chennai, Tamil Nadu 600001</span>
                            </li>
                            <li>
                                <Phone size={20} />
                                <span>+91 94444 08087</span>
                            </li>
                            <li>
                                <Mail size={20} />
                                <span>ayeshasubhan1408@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Smile Bright Dental. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
