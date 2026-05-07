import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Star, ShieldCheck, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_SLIDES = [
    '/website/hero_slide_kid.webp',
    '/website/hero_slide_pain.webp',
    '/website/hero_slide_purple.png',
    '/website/hero_slide_smile.webp',
];

const Hero = () => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSlide((s) => (s + 1) % HERO_SLIDES.length);
        }, 4000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="hero-v2">
            <div className="container hero-v2-grid">
                <motion.div
                    className="hero-v2-left"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <span className="hero-v2-eyebrow">
                        <Star size={14} fill="#7b1fa2" stroke="#7b1fa2" />
                        Chennai's trusted dental specialists
                    </span>

                    <h1 className="hero-v2-title">
                        <span className="hero-v2-title-accent">Smile Bright</span><br />
                        Dental Clinic
                    </h1>

                    <p className="hero-v2-desc">
                        Smile Bright Dental Clinic is a specialist team in Chennai — implants,
                        alignment, laser dentistry, and the routine care that keeps a smile in shape.
                        Honest advice, gentle hands, and treatment plans built around you.
                    </p>

                    <div className="hero-v2-actions">
                        <button
                            className="hero-v2-btn hero-v2-btn-primary"
                            onClick={() => (window.location.href = 'https://wa.me/919444408087')}
                        >
                            Book an Appointment
                            <ArrowRight size={18} />
                        </button>
                        <a href="tel:+919444408087" className="hero-v2-btn hero-v2-btn-ghost">
                            <Phone size={18} />
                            Talk to Us
                        </a>
                    </div>

                    <div className="hero-v2-trust">
                        <div className="hero-v2-trust-item">
                            <ShieldCheck size={18} />
                            <span>Sterile, modern facility</span>
                        </div>
                        <div className="hero-v2-trust-item">
                            <Award size={18} />
                            <span>10+ years of experience</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-v2-right"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                >
                    <div className="hero-v2-image-wrap">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={slide}
                                src={HERO_SLIDES[slide]}
                                alt="Smile Bright Dental Clinic"
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                        </AnimatePresence>
                        <div className="hero-v2-dots">
                            {HERO_SLIDES.map((_, i) => (
                                <button
                                    key={i}
                                    className={`hero-v2-dot ${i === slide ? 'is-active' : ''}`}
                                    onClick={() => setSlide(i)}
                                    aria-label={`Slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="hero-v2-card hero-v2-card-rating">
                        <div className="hero-v2-rating-num">4.9</div>
                        <div className="hero-v2-rating-meta">
                            <div className="hero-v2-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill="#f5b301" stroke="#f5b301" />
                                ))}
                            </div>
                            <span>Based on 500+ reviews</span>
                        </div>
                    </div>

                    <div className="hero-v2-card hero-v2-card-patients">
                        <div className="hero-v2-patients-num">2000+</div>
                        <div className="hero-v2-patients-label">Patients served annually</div>
                    </div>
                </motion.div>
            </div>

            <div className="hero-v2-stats container">
                <div className="hero-v2-stat">
                    <h4>10<span>+</span></h4>
                    <p>Years of experience</p>
                </div>
                <div className="hero-v2-stat">
                    <h4>98<span>%</span></h4>
                    <p>Patient satisfaction</p>
                </div>
                <div className="hero-v2-stat">
                    <h4>2000<span>+</span></h4>
                    <p>Patients served annually</p>
                </div>
                <div className="hero-v2-stat">
                    <h4>15<span>+</span></h4>
                    <p>Specialist treatments</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
