import React from 'react';
import { ArrowRight, Phone, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <section className="hero-ph">

            {/* Full-bleed background image */}
            <div className="hero-ph-bg">
                <img src={`${baseUrl}hero.png`} alt="Dental care" className="hero-ph-bg-img" />
                {/* Gradient overlay */}
                <div className="hero-ph-bg-overlay" />
            </div>

            {/* Main content */}
            <div className="hero-ph-body container">
                <motion.div
                    className="hero-ph-left-content"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="hero-ph-title">
                        Compassionate care,<br />exceptional results.
                    </h1>

                    <div className="hero-ph-desc-row">
                        <div className="hero-ph-brand-col">
                            <span className="hero-ph-brand-name">Smile Bright</span>
                        </div>

                        <p className="hero-ph-desc">
                            Our team of experienced doctors and healthcare professionals are committed to providing quality dental and personalised attention to our patients.
                        </p>
                    </div>

                    {/* Buttons — unchanged */}
                    <div className="hero-ph-actions">
                        <button className="btn btn-primary" onClick={() => window.location.href = 'https://wa.me/919444408087'}>
                            Book an Appointment
                            <ArrowRight size={20} />
                        </button>
                        <a href="tel:+919444408087" className="btn btn-secondary glass-btn">
                            <Phone size={20} />
                            Contact Us
                        </a>
                    </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                    className="hero-ph-float-badge"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="hero-ph-float-avatars">
                        <img src={`${baseUrl}dr_ayesha_subhan.png`} alt="" />
                        <img src={`${baseUrl}dr_ponni_valavan.png`} alt="" />
                        <img src={`${baseUrl}dr-sasha.png`} alt="" />
                    </div>
                    <div className="hero-ph-float-text">
                        <span className="hero-ph-float-num">2,000+</span>
                        <span className="hero-ph-float-label">Patient Recover</span>
                    </div>
                    <div className="hero-ph-float-check">
                        <Check size={14} strokeWidth={3} />
                    </div>
                </motion.div>
            </div>

            {/* Bottom Glass Stats Bar */}
            <div className="hero-ph-bottom-bar">
                <div className="container hero-ph-bottom-inner">
                    <div className="hero-ph-bottom-stat">
                        <h4>10+</h4>
                        <p>Years of experience</p>
                    </div>
                    <div className="hero-ph-bottom-stat">
                        <h4>98%</h4>
                        <p>Patient satisfaction rating</p>
                    </div>
                    <div className="hero-ph-bottom-stat">
                        <h4>2000+</h4>
                        <p>Patients served annually</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
