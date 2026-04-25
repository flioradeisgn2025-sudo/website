import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, CalendarDays } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const contactInfo = [
  {
    icon: Phone, title: 'Call', color: '#4CAF50',
    lines: ['+91 94444 08087'],
    note: 'Mon–Sat: 9 AM – 8 PM',
    action: 'tel:+919444408087',
  },
  {
    icon: Mail, title: 'Email', color: '#2196F3',
    lines: ['ayeshasubhan1408@gmail.com'],
    note: 'We reply within four hours',
    action: 'mailto:ayeshasubhan1408@gmail.com',
  },
  {
    icon: MapPin, title: 'Walk in', color: '#FF5722',
    lines: ['#38/238, Angappa Naicken Street', 'Mannady, Chennai, 600001'],
    note: 'Near Eidgah Mosque',
    action: 'https://maps.google.com',
  },
  {
    icon: Clock, title: 'Hours', color: '#9C27B0',
    lines: ['Mon – Sat: 9:00 AM – 9:00 PM'],
    note: 'Emergencies: anytime',
    action: null,
  },
];

const services = [
  'Dental Implants', 'Teeth Alignment', 'Pain Management',
  'Preventive Dentistry', 'Laser Dentistry', 'Teeth Cleaning',
  'Teeth Whitening', 'Emergency Dental', 'Other',
];

const ContactUs = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    const handleSubmit = e => {
        e.preventDefault();
        const text = `Hi, I am reaching out from the website.\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Service:* ${form.service}\n*Message:* ${form.message}`;
        window.location.href = `https://wa.me/919444408087?text=${encodeURIComponent(text)}`;
        setSubmitted(true);
    };

    return (
        <div className="contact-page-main">
            <Header />
            <main>
                {/* Hero */}
                <section className="page-hero">
                    <div className="container">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="section-subtitle light">Get in Touch</span>
                            <h1 className="section-title light" style={{ marginBottom: '1rem' }}>How to reach us.</h1>
                            <p className="hero-description light">
                                Phone, WhatsApp, email, or just walk in — whichever works for you. If it's a question we can answer in two minutes, we will.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Cards */}
                <section className="section" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
                    <div className="container">
                        <div className="doctors-grid-premium">
                            {contactInfo.map((info, i) => (
                                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    {info.action ? (
                                        <a href={info.action} className="info-block-premium" style={{ display: 'block', height: '100%' }} target={info.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                            <div className="info-header">
                                                <info.icon size={28} />
                                                <h4>{info.title}</h4>
                                            </div>
                                            {info.lines.map((l, j) => <p key={j} style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '4px' }}>{l}</p>)}
                                            <span style={{ color: 'var(--primary-color)', fontSize: '0.85rem', fontWeight: 700, marginTop: '1rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>{info.note}</span>
                                        </a>
                                    ) : (
                                        <div className="info-block-premium" style={{ height: '100%' }}>
                                            <div className="info-header">
                                                <info.icon size={28} />
                                                <h4>{info.title}</h4>
                                            </div>
                                            {info.lines.map((l, j) => <p key={j} style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '4px' }}>{l}</p>)}
                                            <span style={{ color: 'var(--primary-color)', fontSize: '0.85rem', fontWeight: 700, marginTop: '1rem', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>{info.note}</span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Form + Map */}
                <ContactSection />

                {/* WhatsApp CTA */}
                <section className="section section-cta-premium" style={{ background: '#25D366', color: 'white' }}>
                    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '16px' }}>
                                <MessageSquare size={40} color="#fff" />
                            </div>
                            <div>
                                <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.75rem' }}>Easier on WhatsApp?</h3>
                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Send us a message — we usually reply within minutes during clinic hours.</p>
                            </div>
                        </div>
                        <a href="https://wa.me/919444408087" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#fff', color: '#25D366', fontWeight: 700, padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Start Chat
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;
