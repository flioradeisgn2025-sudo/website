import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Award, ShieldCheck, Users } from 'lucide-react';
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

const awards = [
    {
        icon: Trophy,
        title: 'Best Dental Clinic – Chennai',
        org: 'Healthcare Excellence Awards',
        year: '2025',
        color: '#FFD700',
        description: 'Picked as the top dental clinic in Chennai for patient outcomes, the kit we use, and consistency of care.',
    },
    {
        icon: Medal,
        title: 'Excellence in Oral Medicine',
        org: 'Indian Dental Association – Karnataka Chapter',
        year: '2024',
        color: '#C0C0C0',
        description: 'Awarded to Dr. Ayesha for early adoption of microscopic endodontics and her work mentoring younger dentists in the technique.',
    },
    {
        icon: Star,
        title: 'Top Implantologist Award',
        org: 'International Congress of Oral Implantologists',
        year: '2024',
        color: '#CD7F32',
        description: 'For thousands of successful implant cases — including a number of complex revisions referred from other practices.',
    },
    {
        icon: ShieldCheck,
        title: 'JCI Accreditation',
        org: 'Joint Commission International',
        year: '2023',
        color: '#4CAF50',
        description: 'JCI accreditation — an international audit of patient safety, sterilisation, and clinical quality. Renewed every three years.',
    },
    {
        icon: Award,
        title: 'Innovation in Laser Dentistry',
        org: 'All India Dental Congress',
        year: '2023',
        color: '#9C27B0',
        description: 'For bringing laser-assisted procedures into routine practice — quieter recovery, less bleeding, fewer painkillers afterwards.',
    },
    {
        icon: Users,
        title: 'Community Health Champion',
        org: 'Chennai Urban District Health Authority',
        year: '2022',
        color: '#2196F3',
        description: 'For free dental camps run across the year — over 3,000 patients seen, mostly children and low-income adults.',
    },
];

const certifications = [
    { name: 'ISO 9001:2015 Certified', body: 'Bureau Veritas', year: '2021' },
    { name: 'Invisalign Diamond Provider', body: 'Align Technology', year: '2022' },
    { name: 'OSHA Compliant Dental Facility', body: 'Occupational Safety & Health Administration', year: '2022' },
    { name: 'NABH Accredited Clinic', body: 'National Accreditation Board for Hospitals', year: '2023' },
    { name: 'Digital Smile Design Certified', body: 'DSD Global', year: '2023' },
];

const stats = [
    { value: '18+', label: 'Awards Won' },
    { value: '25K+', label: 'Happy Patients' },
    { value: '5', label: 'Accreditations' },
    { value: '20+', label: 'Years of Excellence' },
];

const Awards = () => {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>

                {/* Page Hero */}
                <section className="page-hero-banner" style={{ background: 'linear-gradient(135deg, #2d1b8e 0%, #7B6CF6 100%)' }}>
                    <div className="page-hero-overlay" />
                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="section-subtitle light">Recognition &amp; Excellence</span>
                            <h1 className="section-title light" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                                Awards &amp; Accreditations
                            </h1>
                            <p className="hero-description light" style={{ margin: '0.75rem auto 0', maxWidth: '600px' }}>
                                A few of the nicer letters and plaques we've received over the years from professional bodies and patient associations. We're prouder of the patients who keep coming back, but these are nice too.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section style={{ background: 'var(--primary-color)', padding: '3rem 0' }}>
                    <div className="container">
                        <div className="awards-stats-row">
                            {stats.map((s, i) => (
                                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="award-stat-item">
                                    <h2 style={{ color: '#fff', fontSize: '2.8rem', fontWeight: 800, marginBottom: '0.25rem' }}>{s.value}</h2>
                                    <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{s.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Awards Grid */}
                <section className="section">
                    <div className="container">
                        <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <span className="section-subtitle">Our Honours</span>
                            <h2>Things we've been recognised for.</h2>
                        </motion.div>
                        <div className="awards-grid">
                            {awards.map((award, i) => (
                                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <div className="award-card glass-card">
                                        <div className="award-icon-wrapper" style={{ background: `${award.color}22`, border: `2px solid ${award.color}55` }}>
                                            <award.icon size={32} color={award.color} />
                                        </div>
                                        <div className="award-year-badge">{award.year}</div>
                                        <h3 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem', fontSize: '1.2rem' }}>{award.title}</h3>
                                        <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>{award.org}</p>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{award.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="section section-alt">
                    <div className="container">
                        <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <span className="section-subtitle">Quality Assurance</span>
                            <h2>Certifications and accreditations.</h2>
                        </motion.div>
                        <div className="certifications-list">
                            {certifications.map((cert, i) => (
                                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <div className="certification-row glass-card">
                                        <div className="cert-icon-wrapper">
                                            <ShieldCheck size={28} color="var(--primary-color)" />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{cert.name}</h4>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.body}</p>
                                        </div>
                                        <div className="cert-year">{cert.year}</div>
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

export default Awards;
