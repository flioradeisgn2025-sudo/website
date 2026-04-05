import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Stethoscope, Phone, Mail, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
};

const facilities = [
    'State-of-the-art diagnostic imaging',
    'Advanced sterilization protocols',
    'In-house dental laboratory',
    'Comfortable, anxiety-free environment',
];

const expertise = [
    'Comprehensive Dental Care',
    'Specialized Implantology',
    'Laser & Preventive Care',
    'Cosmetic Smile Makeovers',
    '24/7 Support for Emergencies',
    'Patient-Centric Approach',
];

const milestones = [
    { year: '2007', event: 'Founded Smile Bright Dental Clinic' },
    { year: '2012', event: 'Recognized as Top Clinic in Bangalore' },
    { year: '2016', event: 'Pioneered Advanced Implant Technology' },
    { year: '2018', event: 'Introduced Laser Dentistry to the clinic' },
    { year: '2021', event: 'Awarded Best Patient Experience' },
    { year: '2023', event: 'Surpassed 25,000 successful treatments' },
];

const SmileBrightDental = () => {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>

                {/* Hero Banner */}
                <section className="doctor-profile-hero">
                    <div className="doctor-hero-overlay" />
                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                            className="doctor-hero-content"
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                        >
                            <span className="section-subtitle">About Us</span>
                            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                                Smile Bright Dental
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                                <span>Bangalore's Premier Dental Destination</span>
                                <span style={{ opacity: 0.7, fontSize: '1rem' }}>20+ Years of Excellence</span>
                            </p>
                            <div className="doctor-badges">
                                <span className="doctor-badge-chip"><Star size={14} /> Top Rated</span>
                                <span className="doctor-badge-chip"><Award size={14} /> Award Winning</span>
                                <span className="doctor-badge-chip"><Stethoscope size={14} /> 25,000+ Happy Smiles</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Profile Section */}
                <section className="section">
                    <div className="container">
                        <div className="doctor-profile-grid">
                            {/* Left – Photo Card */}
                            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="doctor-photo-card glass-card">
                                    <img
                                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Smile Bright Clinic"
                                        className="doctor-profile-photo"
                                    />
                                    <div className="doctor-contact-info">
                                        <h3 style={{ marginBottom: '1.25rem' }}>Visit Our Clinic</h3>
                                        <a href="tel:+919876543210" className="contact-row">
                                            <Phone size={18} color="var(--primary-color)" />
                                            <span>+91 98765 43210</span>
                                        </a>
                                        <a href="mailto:info@smilebrightdental.com" className="contact-row">
                                            <Mail size={18} color="var(--primary-color)" />
                                            <span>info@smilebrightdental.com</span>
                                        </a>
                                        <div className="contact-row">
                                            <MapPin size={18} color="var(--primary-color)" />
                                            <span>Smile Bright Dental Clinic, Bangalore</span>
                                        </div>
                                        <button className="btn btn-primary w-full" style={{ marginTop: '1.5rem' }}>
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right – Bio */}
                            <div>
                                <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <span className="section-subtitle">Our Mission</span>
                                    <h2 style={{ marginBottom: '1rem' }}>Exceptional Dental Care with a Human Touch</h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                        At Smile Bright Dental, we believe a healthy, confident smile can transform lives. For nearly two decades, our multi-specialty clinic has stood as a beacon of dental excellence in Bangalore, offering a comprehensive suite of advanced treatments delivered with unmatched precision and care.
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                        Our lead specialist, Dr. Sasha Helene, brings together global expertise and the latest in dental technology to ensure every patient experiences painless, effective, and lasting results. From preventative care to complex endodontic treatments and full-mouth rehabilitations, our patient-first approach guarantees a comfortable and reassuring journey toward optimal oral health.
                                    </p>
                                </motion.div>

                                {/* Facilities */}
                                <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <div className="info-block">
                                        <div className="info-block-title">
                                            <ShieldCheck size={22} color="var(--primary-color)" />
                                            <h3>Why Choose Us?</h3>
                                        </div>
                                        <ul className="qualification-list">
                                            {facilities.map((q, i) => (
                                                <li key={i} className="qualification-item">
                                                    <CheckCircle2 size={16} color="var(--primary-color)" />
                                                    <span>{q}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Core Values */}
                                <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <div className="info-block" style={{ marginTop: '1.5rem' }}>
                                        <div className="info-block-title">
                                            <Star size={22} color="var(--primary-color)" />
                                            <h3>Our Approach</h3>
                                        </div>
                                        <div className="expertise-tags">
                                            {expertise.map((e, i) => (
                                                <span key={i} className="expertise-tag">{e}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clinic Milestones */}
                <section className="section section-alt">
                    <div className="container">
                        <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <span className="section-subtitle">A Legacy Built on Trust</span>
                            <h2>Our Journey</h2>
                        </motion.div>
                        <div className="timeline">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={i}
                                    className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                >
                                    <div className="timeline-dot" />
                                    <div className="timeline-content glass-card">
                                        <span className="timeline-year">{m.year}</span>
                                        <p>{m.event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Publications */}
                <section className="section">
                    <div className="container">
                        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="info-block-title" style={{ marginBottom: '2rem' }}>
                                <BookOpen size={26} color="var(--primary-color)" />
                                <h2>Clinical Excellence & Research</h2>
                            </div>
                        </motion.div>
                        <div className="publications-grid">
                            {[
                                { title: 'Innovations in Sedation Dentistry', journal: 'Smile Bright Internal Review, 2022' },
                                { title: 'Painless Implantology Best Practices', journal: 'Dental Excellence Symposium, 2023' },
                                { title: 'Digital Smile Makeovers Handbook', journal: 'Cosmetic Dentistry Quarterly, 2024' },
                            ].map((pub, i) => (
                                <motion.div key={i} custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <div className="publication-card glass-card">
                                        <BookOpen size={24} color="var(--primary-color)" style={{ marginBottom: '0.75rem' }} />
                                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{pub.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{pub.journal}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default SmileBrightDental;
