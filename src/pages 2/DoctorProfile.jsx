import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, GraduationCap, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Heart, Quote } from 'lucide-react';
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

const education = [
    'MDS (Endodontics) — Gold Medalist',
    'BDS — Top Honours Graduate',
    'Certified in Laser Endodontics',
    'Microscopic Root Canal Procedures Specialist',
];

const highlights = [
    'Specialist in Painless Root Canal Treatments',
    'Pioneering Microscopic Endodontics in Chennai',
    'Over 15 Years of Clinical Excellence',
    'Recognized as Top Endodontist in the Region',
];

const DoctorProfile = () => {
    const baseUrl = import.meta.env.BASE_URL;
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>

                {/* Hero Banner */}
                <section className="doctor-profile-hero" style={{ background: 'linear-gradient(135deg, #2d1b8e 0%, #7B6CF6 100%)' }}>
                    <div className="doctor-hero-overlay" />
                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                            className="doctor-hero-content"
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                        >
                            <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>Lead Specialist</span>
                            <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 800 }}>
                                Dr. Sasha Helene
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.4rem', marginTop: '0.75rem', fontWeight: 500 }}>
                                BDS MDS (Endodontist)
                            </p>
                            <div className="doctor-badges" style={{ marginTop: '2rem' }}>
                                <span className="doctor-badge-chip" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}><Star size={14} /> Master Clinician</span>
                                <span className="doctor-badge-chip" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}><Award size={14} /> Award Winning</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Profile Section */}
                <section className="section">
                    <div className="container">
                        <div className="doctor-profile-grid" style={{ gridTemplateColumns: 'minmax(300px, 420px) 1fr', gap: '4rem' }}>
                            {/* Left – Photo Card */}
                            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="doctor-photo-card glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                                    <img
                                        src={`${baseUrl}dr-sasha.png`}
                                        alt="Dr. Sasha Helene"
                                        className="doctor-profile-photo"
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                    <div className="doctor-contact-info" style={{ padding: '2rem' }}>
                                        <h3 style={{ marginBottom: '1.25rem', fontSize: '1.4rem' }}>Request a Consultation</h3>
                                        <a href="tel:+919444408087" className="contact-row">
                                            <Phone size={18} color="var(--primary-color)" />
                                            <span>+91 94444 08087</span>
                                        </a>
                                        <a href="mailto:ayeshasubhan1408@gmail.com" className="contact-row">
                                            <Mail size={18} color="var(--primary-color)" />
                                            <span>ayeshasubhan1408@gmail.com</span>
                                        </a>
                                        <button className="btn btn-primary w-full" style={{ marginTop: '1.5rem' }}>
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right – Bio */}
                            <div className="doctor-bio-content">
                                <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <span className="section-subtitle">Excellence in Endodontics</span>
                                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.4rem' }}>Commitment to Precision and Patient Comfort</h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                        Dr. Sasha Helene is a distinguished specialist in Endodontics, renowned for her gentle approach and technical mastery in corrective dental procedures. With over 15 years of clinical experience, she has pioneered painless root canal technologies in Chennai, transforming the patient experience through microscopic precision and laser-assisted treatments.
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                                        A firm believer in biological tooth preservation, Dr. Sasha Helene employs advanced diagnostic imaging and minimally invasive techniques to ensure the longevity of natural teeth. Her dedication to clinical excellence and patient-first philosophy has made her a trusted name in complex dental rehabilitations.
                                    </p>
                                </motion.div>

                                {/* Education & Expertise */}
                                <div className="expertise-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                    <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                        <div className="info-block">
                                            <div className="info-block-title" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <GraduationCap size={22} color="var(--primary-color)" />
                                                <h3 style={{ fontSize: '1.25rem' }}>Education & Credentials</h3>
                                            </div>
                                            <ul className="qualification-list">
                                                {education.map((item, i) => (
                                                    <li key={i} className="qualification-item" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                        <CheckCircle2 size={16} color="var(--primary-color)" style={{ marginTop: '3px' }} />
                                                        <span style={{ fontSize: '1rem' }}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>

                                    <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                        <div className="info-block">
                                            <div className="info-block-title" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <ShieldCheck size={22} color="var(--primary-color)" />
                                                <h3 style={{ fontSize: '1.25rem' }}>Professional Highlights</h3>
                                            </div>
                                            <ul className="qualification-list">
                                                {highlights.map((item, i) => (
                                                    <li key={i} className="qualification-item" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                        <Heart size={16} color="var(--secondary-color)" style={{ marginTop: '3px' }} />
                                                        <span style={{ fontSize: '1rem' }}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Patient Philosophy Section */}
                <section className="section section-alt" style={{ padding: '6rem 0' }}>
                    <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <Quote size={48} color="var(--primary-color)" style={{ opacity: 0.2, margin: '0 auto 1.5rem' }} />
                            <h2 style={{ marginBottom: '1.5rem' }}>My Patient Care Philosophy</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: 1.8, fontStyle: 'italic' }}>
                                "I believe that every patient deserves a dental experience that is not only clinically superior but also deeply empathetic. My goal is to make every procedure completely painless, ensuring that you leave our clinic with a healthier, more confident smile and a renewed sense of trust in modern dentistry."
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Publications & Research */}
                <section className="section">
                    <div className="container">
                        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="info-block-title" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                                <BookOpen size={32} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
                                <h2>Professional Contributions</h2>
                                <p style={{ maxWidth: '600px', margin: '1rem auto 0' }}>Dr. Sasha Helene is active in clinical research and has published several papers on modern endodontic practices.</p>
                            </div>
                        </motion.div>
                        <div className="publications-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { title: 'Modern Advances in Laser Root Canal Therapy', journal: 'International Endodontic Journal, 2023', year: '2023' },
                                { title: 'Micro-Endodontic Outcomes: A Multi-Year Analysis', journal: 'Journal of Dental Research, 2024', year: '2024' },
                                { title: 'Minimally Invasive Techniques in Dental Trauma', journal: 'National Dental Symposium, 2025', year: '2025' },
                            ].map((pub, i) => (
                                <motion.div key={i} custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <div className="publication-card glass-card" style={{ padding: '2rem' }}>
                                        <div style={{ color: 'var(--primary-color)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>{pub.year}</div>
                                        <h4 style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>{pub.title}</h4>
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

export default DoctorProfile;
