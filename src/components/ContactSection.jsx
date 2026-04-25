import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const services = [
  'Dental Implants', 'Teeth Alignment', 'Pain Management',
  'Preventive Dentistry', 'Laser Dentistry', 'Teeth Cleaning',
  'Teeth Whitening', 'Emergency Dental', 'Other',
];

const ContactSection = () => {
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
    <section className="section section-alt" id="contact-book">
      <div className="container">
        <div className="contact-main-grid">

          {/* Form */}
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-subtitle">Send a Message</span>
            <h2 style={{ marginBottom: '2rem' }}>Book a slot, or just ask.</h2>

            {submitted ? (
              <motion.div className="form-success-card glass-card" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle2 size={56} color="#4CAF50" />
                <h3 style={{ color: 'var(--text-primary)', margin: '1rem 0 0.5rem' }}>Got it.</h3>
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                  Thanks {form.name} — someone from the team will be in touch within four hours to confirm a time that works.
                  <br/><br/>If WhatsApp didn't open automatically, <a href={`https://wa.me/919444408087?text=${encodeURIComponent('Hi, ' + form.name + ' here. I submitted the form on the website.')}`} target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'underline'}}>tap here to message us directly</a>.
                </p>
                <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                  Send another
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
                    <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 94444 08087" required />
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
                  <textarea className="form-input form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="What's the issue, or when works for you to come in?" rows={4} />
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
            <h2 style={{ marginBottom: '1.5rem' }}>Where we are.</h2>
            <div className="map-embed" style={{ marginBottom: '1.5rem' }}>
              <iframe
                title="Smile Bright Dental Location"
                src="https://maps.google.com/maps?q=13.0985869,80.2912231&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%" height="350" style={{ border: 0, borderRadius: '16px' }} allowFullScreen loading="lazy"
              />
            </div>
            <div className="nearby-landmarks glass-card" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Getting here</h4>
              {[
                ['Trinity Metro Station', '200m walk'],
                ['MG Road Commercial Street', '0.3 km'],
                ['Ulsoor Lake', '1.2 km'],
                ['Chennai Railway Station', '3.5 km'],
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
  );
};

export default ContactSection;
