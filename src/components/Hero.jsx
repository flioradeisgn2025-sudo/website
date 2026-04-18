import React from 'react';
import { ArrowRight, Smile, CalendarDays, Star, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="hero-badge">
                        <Smile size={16} />
                        <span>Excellence in Dental Care</span>
                    </div>
                    <h1>
                        Beautiful Smiles,<br />
                        <span className="text-secondary">Exceptional</span> Dental Care.
                    </h1>
                    <p className="hero-description">
                        Welcome to Smile Bright Dental. We combine cutting-edge dental
                        technology with specialist expertise to deliver painless, precision care
                        and life-changing smiles.
                    </p>

                    <div className="hero-ctas">
                        <button className="btn btn-primary" onClick={() => window.location.href = 'https://wa.me/919444408087'}>
                            Book an Appointment
                            <ArrowRight size={20} />
                        </button>
                        <a href="tel:+919444408087" className="btn btn-secondary glass-btn">
                            <Phone size={20} />
                            Contact Us
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h4>10+</h4>
                            <p>Years of Excellence</p>
                        </div>
                        <div className="stat-separator"></div>
                        <div className="stat-item">
                            <h4>2,000+</h4>
                            <p>Implants Placed</p>
                        </div>
                        <div className="stat-separator"></div>
                        <div className="stat-item">
                            <h4>15k+</h4>
                            <p>Happy Patients</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="hero-image-decor"></div>
                    <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Dental specialist treating a patient"
                        className="hero-image"
                    />
                    {/* Floating glass card element */}
                    <div className="floating-card glass-card">
                        <div className="card-icon-wrapper pulse-anim">
                            <Star size={24} color="var(--secondary-color)" fill="var(--secondary-color)" />
                        </div>
                        <div className="card-text">
                            <span className="bold">Top Rated</span>
                            <span>Dental Clinic in Chennai</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
