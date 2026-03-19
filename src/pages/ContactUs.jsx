import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, CalendarDays } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const contactInfo = [
  {
    icon: Phone, title: 'Call Us', color: '#4CAF50',
    lines: ['+91 98765 43210', '+91 98765 43211'],
    note: 'Mon–Sat: 9 AM – 8 PM',
    action: 'tel:+919876543210',
  },
  {
    icon: Mail, title: 'Email Us', color: '#2196F3',
    lines: ['info@acharyadental.com', 'appointments@acharyadental.com'],
    note: 'We reply within 4 hours',
    action: 'mailto:info@acharyadental.com',
  },
  {
    icon: MapPin, title: 'Visit Us', color: '#FF5722',
    lines: ['No. 42, MG Road, Shivajinagar,', 'Bangalore – 560001, Karnataka'],
    note: 'Near Trinity Metro Station',
    action: 'https://maps.google.com',
  },
  {
    icon: Clock, title: 'Clinic Hours', color: '#9C27B0',
    lines: ['Mon – Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 2:00 PM'],
    note: 'Emergency: Always available',
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
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>

        {/* Hero */}
        <section className="page-hero-banner" style={{ background: 'linear-gradient(135deg, #2d1b8e 0%, #7B6CF6 100%)' }}>
          <div className="page-hero-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="section-subtitle">Get in Touch</span>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Contact Us</h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginTop: '0.75rem', maxWidth: '560px' }}>
                We are here to help. Reach out to book an appointment, ask a question, or simply learn more about our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="section">
          <div className="container">
            <div className="contact-cards-grid">
              {contactInfo.map((info, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  {info.action ? (
                    <a href={info.action} className="contact-info-card glass-card" target={info.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      <div className="contact-card-icon" style={{ background: `${info.color}20` }}>
                        <info.icon size={26} color={info.color} />
                      </div>
                      <h3 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{info.title}</h3>
                      {info.lines.map((l, j) => <p key={j} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{l}</p>)}
                      <span style={{ color: info.color, fontSize: '0.82rem', fontWeight: 600, marginTop: '0.5rem', display: 'block' }}>{info.note}</span>
                    </a>
                  ) : (
                    <div className="contact-info-card glass-card">
                      <div className="contact-card-icon" style={{ background: `${info.color}20` }}>
                        <info.icon size={26} color={info.color} />
                      </div>
                      <h3 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>{info.title}</h3>
                      {info.lines.map((l, j) => <p key={j} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{l}</p>)}
                      <span style={{ color: info.color, fontSize: '0.82rem', fontWeight: 600, marginTop: '0.5rem', display: 'block' }}>{info.note}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Map */}
        <section className="section section-alt">
          <div className="container">
            <div className="contact-main-grid">

              {/* Form */}
              <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="section-subtitle">Send a Message</span>
                <h2 style={{ marginBottom: '2rem' }}>Book an Appointment</h2>

                {submitted ? (
                  <motion.div className="form-success-card glass-card" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <CheckCircle2 size={56} color="#4CAF50" />
                    <h3 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>Message Received!</h3>
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                      Thank you, {form.name}! Our team will contact you within 4 hours to confirm your appointment.
                    </p>
                    <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Service Required</label>
                      <select className="form-input form-select" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea className="form-input form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your dental concern or preferred appointment time..." rows={4} />
                    </div>
                    <button className="btn btn-primary w-full" type="submit">
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Map */}
              <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="section-subtitle">Find Us</span>
                <h2 style={{ marginBottom: '1.5rem' }}>Our Location</h2>
                <div className="map-embed" style={{ marginBottom: '1.5rem' }}>
                  <iframe
                    title="Acharya Dental"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9847823617!2d77.6024!3d12.9766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzM1LjgiTiA3N8KwMzYnMDguNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%" height="350" style={{ border: 0, borderRadius: '16px' }} allowFullScreen loading="lazy"
                  />
                </div>
                <div className="nearby-landmarks glass-card" style={{ padding: '1.5rem' }}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Nearby Landmarks</h4>
                  {[
                    ['Trinity Metro Station', '200m walk'],
                    ['MG Road Commercial Street', '0.3 km'],
                    ['Ulsoor Lake', '1.2 km'],
                    ['Bangalore Railway Station', '3.5 km'],
                  ].map(([place, dist], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: i < 3 ? '1px solid var(--border-color)' : 'none' }}>
                      <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{place}</span>
                      <span style={{ color: 'var(--primary-color)', fontSize: '0.85rem', fontWeight: 600 }}>{dist}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="section" style={{ background: '#25D366', padding: '3rem 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <MessageSquare size={40} color="#fff" />
              <div>
                <h3 style={{ color: '#fff', marginBottom: '0.25rem' }}>Chat on WhatsApp</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>Get instant replies — we respond within minutes during clinic hours</p>
              </div>
            </div>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#fff', color: '#25D366', fontWeight: 700 }}>
              Start Chat
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
