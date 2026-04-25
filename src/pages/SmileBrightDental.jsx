import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Stethoscope, Phone, Mail, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SmileBrightDental = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Header />
            <main className="about-page-main">

                {/* Hero Banner */}
                <section className="page-hero">
                    <div className="container relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="section-subtitle light">Our Legacy</span>
                            <h1 className="section-title light">Smile Bright Dental</h1>
                            <div className="doctor-badges" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
                                <span className="doctor-badge-chip"><Star size={14} /> Top Rated</span>
                                <span className="doctor-badge-chip"><Award size={14} /> Award Winning</span>
                                <span className="doctor-badge-chip"><Stethoscope size={14} /> 25,000+ Happy Smiles</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="section">
                    <div className="container">
                        <div className="service-overview-grid-premium">
                            {/* Left – Photo Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="doctor-photo-card glass-card">
                                    <img
                                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Smile Bright Clinic"
                                        className="doctor-profile-photo"
                                    />
                                    <div className="doctor-contact-info">
                                        <h3>Visit Our Clinic</h3>
                                        <a href="tel:+919444408087" className="contact-row">
                                            <Phone size={18} />
                                            <span>+91 94444 08087</span>
                                        </a>
                                        <a href="mailto:ayeshasubhan1408@gmail.com" className="contact-row">
                                            <Mail size={18} />
                                            <span>ayeshasubhan1408@gmail.com</span>
                                        </a>
                                        <div className="contact-row">
                                            <MapPin size={18} />
                                            <span>Mannady, Chennai</span>
                                        </div>
                                        <a href="https://wa.me/919444408087" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full" style={{ marginTop: '1.5rem' }}>
                                            Book Appointment
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right – Bio */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="section-subtitle">About the practice</span>
                                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>A small clinic that grew up alongside its patients.</h2>
                                <p className="hero-description" style={{ textAlign: 'left', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                                    Smile Bright Dental started out almost twenty years ago as a single-chair practice in Mannady. Most of our patients still come from word-of-mouth — children of patients we saw a decade ago, neighbours, the family across the street. We've grown the team and the equipment, but the way we work hasn't really changed.
                                </p>
                                <p className="hero-description" style={{ textAlign: 'left', fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                                    Dr. Ayesha Subhan leads the practice. She trained as an endodontist and brought a quieter, more conservative style of dentistry to the chair: keep the natural tooth where you can, take time to explain the plan, and never rush a procedure that benefits from being slow.
                                </p>

                                <div className="info-block-premium" style={{ marginTop: '2.5rem' }}>
                                   <div className="info-header">
                                       <ShieldCheck size={20} />
                                       <h4>What you'll find here</h4>
                                   </div>
                                   <ul className="info-list-premium">
                                       <li><CheckCircle2 size={16} /> Digital imaging and 3D CBCT for implant planning</li>
                                       <li><CheckCircle2 size={16} /> Autoclave sterilisation, single-use where it matters</li>
                                       <li><CheckCircle2 size={16} /> An on-site lab — same-day crowns when possible</li>
                                       <li><CheckCircle2 size={16} /> Sedation options for anyone who finds the chair stressful</li>
                                   </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Excellence Grid */}
                <section className="section section-alt">
                    <div className="container">
                        <div className="section-header" style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <div>
                                <span className="section-subtitle">In print</span>
                                <h2 className="section-title">Papers, talks, and clinical writing</h2>
                            </div>
                        </div>
                        <div className="publications-grid">
                            {[
                                { title: 'Innovations in Sedation Dentistry', journal: 'Smile Bright Internal Review, 2022' },
                                { title: 'Painless Implantology Best Practices', journal: 'Dental Excellence Symposium, 2023' },
                                { title: 'Digital Smile Makeovers Handbook', journal: 'Cosmetic Dentistry Quarterly, 2024' },
                            ].map((pub, i) => (
                                <motion.div 
                                    key={i} 
                                    className="publication-card glass-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <BookOpen size={24} className="text-primary" style={{ marginBottom: '1rem' }} />
                                    <h4>{pub.title}</h4>
                                    <p>{pub.journal}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </motion.div>
    );
};

export default SmileBrightDental;
