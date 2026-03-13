import React from 'react';
import { ArrowRight, Activity, CalendarDays, HeartPulse } from 'lucide-react';
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
                        <Activity size={16} />
                        <span>Excellence in Healthcare</span>
                    </div>
                    <h1>
                        Advanced Care.<br />
                        <span className="text-secondary">Compassionate</span> Healing.
                    </h1>
                    <p className="hero-description">
                        Welcome to NovaCare Hospital. We combine cutting-edge medical technology
                        with world-class specialists to provide the highest standard of personalized care.
                    </p>

                    <div className="hero-ctas">
                        <button className="btn btn-primary">
                            Book an Appointment
                            <ArrowRight size={20} />
                        </button>
                        <button className="btn btn-secondary glass-btn">
                            <CalendarDays size={20} />
                            View Specialists
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h4>24/7</h4>
                            <p>Emergency Care</p>
                        </div>
                        <div className="stat-separator"></div>
                        <div className="stat-item">
                            <h4>150+</h4>
                            <p>Expert Doctors</p>
                        </div>
                        <div className="stat-separator"></div>
                        <div className="stat-item">
                            <h4>50k+</h4>
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
                        src="https://images.unsplash.com/photo-1551076805-e18690c5e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Doctor advising patient"
                        className="hero-image"
                    />
                    {/* Floating glass card element */}
                    <div className="floating-card glass-card">
                        <div className="card-icon-wrapper pulse-anim">
                            <HeartPulse size={24} color="var(--secondary-color)" />
                        </div>
                        <div className="card-text">
                            <span className="bold">Top Rated</span>
                            <span>Healthcare Provider</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
