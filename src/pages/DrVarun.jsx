import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, GraduationCap, Stethoscope, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
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

const qualifications = [
    'BDS – Bachelor of Dental Surgery, Manipal University',
    'MDS – Master of Dental Surgery (Prosthodontics & Crown & Bridge)',
    'Fellowship in Implantology – ICOI, USA',
    'Certified Invisalign & Clear Aligner Specialist',
    'Advanced Training in Maxillofacial Prosthetics',
];

const expertise = [
    'Dental Implants',
    'Crowns & Bridges',
    'Teeth Alignment',
    'Invisalign',
    'Full Mouth Rehabilitation',
    'Cosmetic Veneers',
    'Dentures',
    'Teeth Whitening',
];

const milestones = [
    { year: '2008', event: 'Graduated BDS from Manipal University' },
    { year: '2011', event: 'Completed MDS in Prosthodontics' },
    { year: '2012', event: 'Fellowship in Implantology – ICOI, USA' },
    { year: '2013', event: 'Joined Smile Bright Dental Clinic as Lead Prosthodontist' },
    { year: '2019', event: 'Introduced Invisalign & Digital Smile Design services' },
    { year: '2024', event: 'Certified Advanced Implant Surgeon – 5000+ implants placed' },
];

const DrVarun = () => {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>

                {/* Hero Banner */}
                <section className="doctor-profile-hero" style={{ background: 'linear-gradient(135deg, #2d1b8e 0%, #7B6CF6 100%)' }}>
                    <div className="doctor-hero-overlay" />
                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div className="doctor-hero-content" initial="hidden" animate="visible" variants={fadeUp}>
                            <span className="section-subtitle">Our Specialist</span>
                            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                                Dr. Varun Acharya
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginTop: '0.75rem' }}>
                                BDS, MDS (Prosthodontics) &nbsp;|&nbsp; 12+ Years of Excellence
                            </p>
                            <div className="doctor-badges">
                                <span className="doctor-badge-chip"><Star size={14} /> Top Implantologist</span>
                                <span className="doctor-badge-chip"><Award size={14} /> ICOI Fellow</span>
                                <span className="doctor-badge-chip"><Stethoscope size={14} /> 5,000+ Implants</span>
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
                                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Dr. Varun Acharya"
                                        className="doctor-profile-photo"
                                    />
                                    <div className="doctor-contact-info">
                                        <h3 style={{ marginBottom: '1.25rem' }}>Book a Consultation</h3>
                                        <a href="tel:+919876543211" className="contact-row">
                                            <Phone size={18} color="var(--primary-color)" />
                                            <span>+91 98765 43211</span>
                                        </a>
                                        <a href="mailto:dr.varun@smilebrightdental.com" className="contact-row">
                                            <Mail size={18} color="var(--primary-color)" />
                                            <span>dr.varun@smilebrightdental.com</span>
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
                                    <span className="section-subtitle">About the Doctor</span>
                                    <h2 style={{ marginBottom: '1rem' }}>Rebuilding Smiles with Precision &amp; Artistry</h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                        Dr. Varun Acharya is a highly accomplished Prosthodontist and Implantologist
                                        at Smile Bright Dental Clinic. With a meticulous eye for detail and a passion
                                        for restoring function and aesthetics, he has transformed thousands of smiles
                                        across India.
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                        After completing his post-graduation from a premier institution, Dr. Varun
                                        pursued advanced fellowship training in Implantology from the International
                                        Congress of Oral Implantologists (ICOI) in the United States. He is also a
                                        certified Invisalign provider and specializes in complete smile makeovers
                                        using cutting-edge digital planning tools.
                                    </p>
                                </motion.div>

                                {/* Qualifications */}
                                <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <div className="info-block">
                                        <div className="info-block-title">
                                            <GraduationCap size={22} color="var(--primary-color)" />
                                            <h3>Qualifications</h3>
                                        </div>
                                        <ul className="qualification-list">
                                            {qualifications.map((q, i) => (
                                                <li key={i} className="qualification-item">
                                                    <CheckCircle2 size={16} color="var(--primary-color)" />
                                                    <span>{q}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Areas of Expertise */}
                                <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <div className="info-block" style={{ marginTop: '1.5rem' }}>
                                        <div className="info-block-title">
                                            <Stethoscope size={22} color="var(--primary-color)" />
                                            <h3>Areas of Expertise</h3>
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

                {/* Career Milestones */}
                <section className="section section-alt">
                    <div className="container">
                        <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <span className="section-subtitle">Journey of Excellence</span>
                            <h2>Career Milestones</h2>
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
                                <h2>Research &amp; Publications</h2>
                            </div>
                        </motion.div>
                        <div className="publications-grid">
                            {[
                                { title: 'Immediate Loading Implants: Clinical Outcomes Over 5 Years', journal: 'Journal of Prosthodontics, 2020' },
                                { title: 'Zirconia Veneers vs Composite: A Comparative Study', journal: 'Indian Dental Association, 2022' },
                                { title: 'Digital Workflow in Full-Arch Rehabilitation', journal: 'Journal of Implant Dentistry, 2023' },
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

export default DrVarun;
