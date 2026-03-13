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
    'BDS – Bachelor of Dental Surgery, Rajiv Gandhi University of Health Sciences',
    'MDS – Master of Dental Surgery (Oral Medicine & Radiology)',
    'Fellowship in Implantology – International Congress of Oral Implantologists',
    'Certified Laser Dentistry Practitioner',
];

const expertise = [
    'Full Mouth Rehabilitation',
    'Dental Implants',
    'Laser Dentistry',
    'Oral Cancer Screening',
    'Smile Designing',
    'Cosmetic Dentistry',
    'Sedation Dentistry',
    'Paediatric Dentistry',
];

const milestones = [
    { year: '2002', event: 'Graduated BDS with Distinction' },
    { year: '2005', event: 'Completed MDS in Oral Medicine & Radiology' },
    { year: '2007', event: 'Founded Smile Bright Dental Clinic' },
    { year: '2012', event: 'Received State-Level Excellence in Dentistry Award' },
    { year: '2018', event: 'Introduced Laser Dentistry to the clinic' },
    { year: '2023', event: 'Surpassed 25,000 successful treatments' },
];

const DrVijailakshmi = () => {
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
                            <span className="section-subtitle">Our Specialist</span>
                            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                                Dr. Vijailakshmi Acharya
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginTop: '0.75rem' }}>
                                BDS, MDS (Oral Medicine &amp; Radiology) &nbsp;|&nbsp; 20+ Years of Excellence
                            </p>
                            <div className="doctor-badges">
                                <span className="doctor-badge-chip"><Star size={14} /> Top Rated Specialist</span>
                                <span className="doctor-badge-chip"><Award size={14} /> Award Winning</span>
                                <span className="doctor-badge-chip"><Stethoscope size={14} /> 25,000+ Patients</span>
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
                                        src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Dr. Vijailakshmi Acharya"
                                        className="doctor-profile-photo"
                                    />
                                    <div className="doctor-contact-info">
                                        <h3 style={{ marginBottom: '1.25rem' }}>Book a Consultation</h3>
                                        <a href="tel:+919876543210" className="contact-row">
                                            <Phone size={18} color="var(--primary-color)" />
                                            <span>+91 98765 43210</span>
                                        </a>
                                        <a href="mailto:dr.vijailakshmi@smilebrightdental.com" className="contact-row">
                                            <Mail size={18} color="var(--primary-color)" />
                                            <span>dr.vijailakshmi@smilebrightdental.com</span>
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
                                    <h2 style={{ marginBottom: '1rem' }}>A Legacy of Compassionate Dental Care</h2>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                        Dr. Vijailakshmi Acharya is a highly acclaimed dental surgeon and oral medicine specialist
                                        with over two decades of experience. She is the co-founder and clinical director of
                                        Smile Bright Dental Clinic, a state-of-the-art facility renowned for delivering
                                        world-class dental care with a personal touch.
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                        Trained at some of India's premier dental institutions, Dr. Vijailakshmi has dedicated
                                        her career to transforming smiles and improving the quality of life for thousands of
                                        patients. Her gentle approach, combined with pioneering use of advanced technologies
                                        like laser dentistry, has earned her recognition at the state and national level.
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
                                { title: 'Laser Therapy in Management of Oral Mucositis', journal: 'Journal of Oral Medicine, 2019' },
                                { title: 'Digital Smile Design: A Contemporary Approach', journal: 'Indian Dental Review, 2021' },
                                { title: 'Full Mouth Rehabilitation in Bruxism Patients', journal: 'Dental Clinics of India, 2022' },
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

export default DrVijailakshmi;
