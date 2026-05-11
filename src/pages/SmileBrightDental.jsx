import React from 'react';
import { motion } from 'framer-motion';
import {
    Phone, Mail, MapPin, Clock, ArrowRight, Quote,
    Smile, Stethoscope, ShieldCheck, Sparkles, Activity, Baby
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TIMELINE = [
    { year: '2005', title: 'A single chair in Mannady', desc: 'Dr. Ayesha opens the first room — endodontics-focused, walk-ins only.' },
    { year: '2011', title: 'Implants & on-site lab', desc: 'CBCT imaging arrives. Crowns and bridges start being made in-house.' },
    { year: '2017', title: 'Sedation & laser dentistry', desc: 'Two more rooms added. Nitrous oxide and IV sedation go live.' },
    { year: '2024', title: 'A full specialist team', desc: 'Orthodontist, paediatric dentist, and surgeon now under one roof.' },
];

const SPECIALTIES = [
    { icon: Smile, label: 'Cosmetic & smile design' },
    { icon: Stethoscope, label: 'Implants & full-mouth rehab' },
    { icon: Activity, label: 'Endodontics (root canals)' },
    { icon: Sparkles, label: 'Laser & minimally-invasive care' },
    { icon: Baby, label: 'Paediatric dentistry' },
    { icon: ShieldCheck, label: 'Sedation & anxiety care' },
];

const SmileBrightDental = () => {
    const baseUrl = import.meta.env.BASE_URL;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Header />
            <main className="sbd2-page">

                {/* Hero — magazine cover */}
                <section className="sbd2-hero">
                    <div className="container sbd2-hero-grid">
                        <motion.div
                            className="sbd2-hero-text"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="sbd2-eyebrow">EST. 2005 · MANNADY, CHENNAI</span>
                            <h1>
                                A clinic built on <em>quiet, careful</em> dentistry.
                            </h1>
                            <p>
                                Smile Bright Dental has been one street, one chair, and a slowly growing team for nearly two
                                decades. Most of our patients have been with us for years — and so have most of our staff.
                            </p>
                            <div className="sbd2-hero-meta">
                                <div><strong>20+</strong><span>years in practice</span></div>
                                <div><strong>25,000+</strong><span>patients seen</span></div>
                                <div><strong>4.9★</strong><span>500+ reviews</span></div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="sbd2-hero-image"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <img src={`${baseUrl}dr_ayesha_treatment.png`} alt="Dr. Ayesha Subhan Treatment" />
                        </motion.div>
                    </div>
                </section>

                {/* Mission band */}
                <section className="sbd2-mission">
                    <div className="container">
                        <p>
                            <span>Our promise —</span> save the natural tooth where we can, explain the plan in plain language,
                            and never rush a procedure that benefits from being slow.
                        </p>
                    </div>
                </section>

                {/* Doctor quote feature */}
                <section className="sbd2-quote-section">
                    <div className="container sbd2-quote-grid">
                        <div className="sbd2-quote-photo">
                            <img src={`${baseUrl}dr_ayesha_treatment.png`} alt="Dr. Ayesha Subhan Treatment" />
                        </div>
                        <div className="sbd2-quote-content">
                            <Quote className="sbd2-quote-mark" size={48} />
                            <p>
                                Most of what we do here isn't dramatic. It's small, careful work — done well, the first time,
                                and explained before we begin. That's the bit patients remember years later.
                            </p>
                            <div className="sbd2-quote-attr">
                                <h4>Dr. Ayesha Subhan</h4>
                                <span>BDS, MDS · Endodontist · Founder, Smile Bright Dental</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visit card / CTA */}
                <section className="sbd2-visit">
                    <div className="container sbd2-visit-grid">
                        <div className="sbd2-visit-text">
                            <span className="sbd2-section-label light">Visit us</span>
                            <h2>Drop in, or get a written plan first.</h2>
                            <p>
                                Consultations are unhurried. We'll look, we'll talk, we'll write down what we'd suggest —
                                and you decide from there.
                            </p>
                            <div className="sbd2-visit-actions">
                                <a href="https://wa.me/919444408087" target="_blank" rel="noopener noreferrer" className="sbd2-cta-primary">
                                    Book on WhatsApp <ArrowRight size={16} />
                                </a>
                                <a href="tel:+919444408087" className="sbd2-cta-ghost">
                                    <Phone size={16} /> +91 94444 08087
                                </a>
                            </div>
                        </div>
                        <div className="sbd2-visit-info">
                            <div><MapPin size={18} /><div><strong>Mannady, Chennai</strong><span>Ground floor, easy street access</span></div></div>
                            <div><Clock size={18} /><div><strong>Mon – Sat · 9:30 AM – 8:00 PM</strong><span>Sundays by appointment</span></div></div>
                            <div><Mail size={18} /><div><strong>ayeshasubhan1408@gmail.com</strong><span>We reply within a working day</span></div></div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </motion.div>
    );
};

export default SmileBrightDental;
