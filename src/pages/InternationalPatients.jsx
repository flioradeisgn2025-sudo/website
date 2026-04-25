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
  { icon: CalendarDays, title: 'Video consult before you fly', desc: 'A 30-minute video call with the specialist before you travel, so your plan is ready before you board the plane.' },
  { icon: Plane, title: 'Airport pickup', desc: 'We arrange a transfer from the airport and help you settle in before your first appointment.' },
  { icon: HeartPulse, title: 'Priority scheduling', desc: 'Treatment is sequenced to fit your time in Chennai — fewer trips back to the chair, more breathing room.' },
  { icon: Globe, title: 'Hotel partners nearby', desc: 'Partnered hotels within walking distance, with discounted rates for our patients and their families.' },
  { icon: Shield, title: 'Records you can take home', desc: 'Full treatment notes, X-rays, and digital files in a format your home dentist can pick up from.' },
  { icon: Mail, title: 'A coordinator on WhatsApp', desc: 'One English-speaking point of contact for everything — before, during, and after the visit.' },
];

const whyChennai = [
  'Specialist dental work at a fraction of UK or US prices',
  'No waiting lists — treatment usually starts within days of arrival',
  'Shorter flights for patients from South and South-East Asia',
  'Plenty to do between appointments — food, temples, the coast',
  'English widely spoken; menus, signs, and taxis are no trouble',
  'Modern infrastructure — the IT capital of South India',
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
            <span className="section-subtitle light">Welcome, International Patients</span>
            <h1 className="section-title light" style={{ textAlign: 'left', margin: '1rem 0', maxWidth: '700px' }}>
              Coming to Chennai for treatment? We've got you covered.
            </h1>
            <p className="hero-description light" style={{ maxWidth: '580px', lineHeight: 1.7 }}>
              Patients fly in from a dozen countries every year — usually because the same treatment costs a fraction of what it would at home. We sort out the logistics so you can focus on the visit itself.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary"><CalendarDays size={18} /> Book Consultation</button>
              <a href="mailto:ayeshasubhan1408@gmail.com" className="btn btn-ghost-white"><Mail size={18} /> Email Us</a>
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
            <h2>What we look after for you.</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              The bits that make travelling for treatment less stressful — pre-arrival, during the visit, and the follow-up after you fly home.
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
            <h2>What it costs, side by side.</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto' }}>
              Honest comparison — even after you factor in flights and a hotel, the math usually still works out.
            </p>
          </motion.div>
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="cost-table-wrapper">
              <table className="cost-table">
                <thead>
                  <tr>
                    <th>Treatment</th>
                    <th className="highlight-col">India (Smile Bright Dental)</th>
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

      {/* Why Chennai */}
      <section className="section intl-why-section">
        <div className="intl-why-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="intl-why-grid">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Why Choose Chennai</span>
              <h2 style={{ color: '#fff' }}>Why Chennai works as a dental destination.</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                {whyChennai.map((w, i) => (
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
                  <a href="mailto:ayeshasubhan1408@gmail.com" className="contact-row" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <Mail size={18} color="#FFD700" /><span>ayeshasubhan1408@gmail.com</span>
                  </a>
                  <a href="https://wa.me/919876543210" className="contact-row" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <Phone size={18} color="#4CAF50" /><span>WhatsApp: +91 98765 43210</span>
                  </a>
                  <div className="contact-row" style={{ color: 'rgba(255,255,255,0.85)', cursor: 'default' }}>
                    <MapPin size={18} color="#FF6B6B" /><span>Smile Bright Dental, MG Road, Chennai 560001</span>
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
