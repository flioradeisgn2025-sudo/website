import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Globe, Shield, HeartPulse, CheckCircle2, Phone, Mail, MapPin, CalendarDays, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const countries = ['UAE', 'UK', 'USA', 'Singapore', 'Australia', 'Canada', 'Saudi Arabia', 'Kuwait', 'Bahrain', 'Germany', 'Malaysia', 'New Zealand'];

const services = [
  { icon: CalendarDays, title: 'Pre-Arrival Consultation', desc: 'Virtual video consultations with our specialists before you travel, so your treatment plan is ready when you arrive.' },
  { icon: Plane, title: 'Airport Pickup Assistance', desc: 'We coordinate comfortable airport transfers and help you settle into Bangalore before your appointment.' },
  { icon: HeartPulse, title: 'Priority Treatment Scheduling', desc: 'International patients receive priority scheduling to maximise your time in Bangalore.' },
  { icon: Globe, title: 'Hotel & Accommodation', desc: 'Partnered hotels near our clinic offer discounted stays for international patients and their families.' },
  { icon: Shield, title: 'Comprehensive After-Care', desc: 'Detailed treatment records, X-rays, and digital files provided for follow-up care at your home dentist.' },
  { icon: Mail, title: 'Dedicated International Coordinator', desc: 'A dedicated English-speaking patient coordinator handles all your queries before, during, and after your visit.' },
];

const whyBangalore = [
  'World-class dental expertise at a fraction of Western costs',
  'No waiting lists — treatment within days of arrival',
  'Shorter travel times for South & South-East Asian patients',
  'Rich culture, cuisine, and tourism opportunities',
  'English widely spoken — easy to navigate',
  'Leading IT hub with excellent modern infrastructure',
];

const treatments = [
  { name: 'Dental Implant (Single)', india: '₹20,000–35,000', uk: '£2,000–3,000', usa: '$3,000–5,000' },
  { name: 'Full Mouth Rehabilitation', india: '₹1,50,000–3,00,000', uk: '£15,000–30,000', usa: '$20,000–40,000' },
  { name: 'Invisalign (Full)', india: '₹1,50,000–2,50,000', uk: '£3,500–6,000', usa: '$5,000–8,000' },
  { name: 'Porcelain Veneer (per tooth)', india: '₹8,000–15,000', uk: '£700–1,200', usa: '$1,000–2,000' },
  { name: 'Smile Makeover', india: '₹80,000–2,00,000', uk: '£5,000–15,000', usa: '$8,000–20,000' },
];

const InternationalPatients = () => (
  <>
    <Header />
    <main style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <section className="intl-hero">
        <div className="intl-hero-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="intl-hero-countries">
              {countries.slice(0, 6).map(c => <span key={c} className="intl-country-chip">{c}</span>)}
            </div>
            <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Welcome, International Patients</span>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '700px' }}>
              World-Class Dental Care in Bangalore — For Patients Worldwide
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '580px', marginTop: '1rem', lineHeight: 1.7 }}>
              Acharya Dental welcomes patients from across the globe. Receive the same world-class treatment at a fraction of the cost, with personalised support every step of the way.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary"><CalendarDays size={18} /> Book Consultation</button>
              <a href="mailto:international@acharyadental.com" className="btn btn-ghost-white"><Mail size={18} /> Email Us</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countries Served */}
      <section style={{ background: 'var(--primary-color)', padding: '1.25rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
            {countries.map(c => (
              <span key={c} className="intl-country-tag">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-subtitle">How We Help</span>
            <h2>International Patient Services</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              We have designed a seamless end-to-end experience so you can focus entirely on your treatment and recovery.
            </p>
          </motion.div>
          <div className="intl-services-grid">
            {services.map((s, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="intl-service-card glass-card">
                  <div className="intl-icon-wrapper">
                    <s.icon size={28} color="var(--primary-color)" />
                  </div>
                  <h3 style={{ marginBottom: '0.75rem', color: 'var(--text-primary)', fontSize: '1.1rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section section-alt">
        <div className="container">
          <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-subtitle">Save up to 80%</span>
            <h2>Cost Comparison</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto' }}>
              Exceptional quality at a fraction of the price — including your travel and accommodation.
            </p>
          </motion.div>
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="cost-table-wrapper">
              <table className="cost-table">
                <thead>
                  <tr>
                    <th>Treatment</th>
                    <th className="highlight-col">India (Acharya Dental)</th>
                    <th>UK</th>
                    <th>USA</th>
                  </tr>
                </thead>
                <tbody>
                  {treatments.map((t, i) => (
                    <tr key={i}>
                      <td>{t.name}</td>
                      <td className="highlight-col">{t.india}</td>
                      <td>{t.uk}</td>
                      <td>{t.usa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '1rem' }}>
              * Prices are approximate and may vary. Contact us for a personalised quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Bangalore */}
      <section className="section intl-why-section">
        <div className="intl-why-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="intl-why-grid">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Why Choose Bangalore</span>
              <h2 style={{ color: '#fff' }}>India's Silicon Valley — Your Perfect Dental Destination</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                {whyBangalore.map((w, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#4CAF50" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'rgba(255,255,255,0.9)' }}>{w}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="intl-contact-box glass-card" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.2)' }}>
                <h3 style={{ color: '#fff', marginBottom: '1.5rem' }}>International Patient Enquiry</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href="mailto:international@acharyadental.com" className="contact-row" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <Mail size={18} color="#FFD700" /><span>international@acharyadental.com</span>
                  </a>
                  <a href="https://wa.me/919876543210" className="contact-row" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <Phone size={18} color="#4CAF50" /><span>WhatsApp: +91 98765 43210</span>
                  </a>
                  <div className="contact-row" style={{ color: 'rgba(255,255,255,0.85)', cursor: 'default' }}>
                    <MapPin size={18} color="#FF6B6B" /><span>Acharya Dental, MG Road, Bangalore 560001</span>
                  </div>
                </div>
                <button className="btn btn-primary w-full" style={{ marginTop: '1.5rem' }}>
                  <CalendarDays size={18} /> Request Free Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </>
);

export default InternationalPatients;
