import React from 'react';
import { HeartPulse, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container">

                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <a href="#" className="logo">
                            <img src={logo} alt="Smile Bright Logo" style={{ height: '60px', filter: 'brightness(0) invert(1)' }} />
                        </a>
                        <p className="footer-desc">
                            Providing advanced medical care with compassion. Our mission is to
                            ensure every patient receives the best possible treatment.
                        </p>
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#services">Our Departments</a></li>
                            <li><a href="#doctors">Find a Doctor</a></li>
                            <li><a href="#testimonials">Patient Stories</a></li>
                            <li><a href="#">Career Opportunities</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Our Services</h3>
                        <ul>
                            <li><a href="#">Cardiology Center</a></li>
                            <li><a href="#">Neurology & Brain</a></li>
                            <li><a href="#">Pediatric Ward</a></li>
                            <li><a href="#">Eye Care Clinic</a></li>
                            <li><a href="#">24/7 Emergency Room</a></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h3>Contact Info</h3>
                        <ul className="contact-info">
                            <li>
                                <MapPin size={20} />
                                <span>123 Health Ave, Medical City, NY 10001</span>
                            </li>
                            <li>
                                <Phone size={20} />
                                <span>1-800-NOVA-911</span>
                            </li>
                            <li>
                                <Mail size={20} />
                                <span>support@novacare.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NovaCare Hospital. All rights reserved.</p>
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
