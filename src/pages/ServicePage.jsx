import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  Phone, CalendarDays, Star, Shield
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getServiceBySlug, getRelatedServices, servicesData } from '../data/servicesData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return (
      <>
        <Header />
        <main style={{ paddingTop: '120px', textAlign: 'center', padding: '10rem 2rem' }}>
          <h2>Service not found</h2>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Go Home</Link>
        </main>
        <Footer />
      </>
    );
  }

  const related = getRelatedServices(service.relatedServices);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>

        {/* ── Hero Banner ─────────────────────────────────────── */}
        <section className="service-page-hero" style={{ '--service-color': service.color }}>
          <div
            className="service-hero-img-bg"
            style={{ backgroundImage: `url(${service.heroImage})` }}
          />
          <div className="service-hero-overlay" />
          <div className="container service-hero-inner">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <nav className="service-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Services</span>
                <span>/</span>
                <span>{service.title}</span>
              </nav>
              <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>
                {service.subtitle}
              </span>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>{service.title}</h1>
              <p className="service-hero-tagline">{service.tagline}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button className="btn btn-primary">
                  <CalendarDays size={18} /> Book Appointment
                </button>
                <a href="tel:+919444408087" className="btn btn-ghost-white">
                  <Phone size={18} /> +91 94444 08087
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────── */}
        <section className="section">
          <div className="container service-overview-grid">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle">Overview</span>
              <h2>What is {service.title}?</h2>
              {service.overview.split('\n\n').map((para, i) => (
                <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem' }}>{para}</p>
              ))}
            </motion.div>

            {/* Benefits sidebar */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="service-benefits-card" style={{ borderTop: `4px solid ${service.color}` }}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Key Benefits</h3>
                <ul className="service-benefits-list">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="service-benefit-item">
                      <CheckCircle2 size={18} color={service.color} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-cta-box" style={{ background: `${service.color}15`, borderColor: `${service.color}30` }}>
                  <Phone size={20} color={service.color} />
                  <div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Call us on <br/>
                    <a href="tel:+919444408087" style={{ color: service.color, fontWeight: 600 }}>+91 94444 08087</a></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* ── Why Choose Us ────────────────────────────────────── */}
        <section className="section service-why-section" style={{ '--service-color': service.color }}>
          <div className="container">
            <div className="service-why-grid">
              <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Our Advantage</span>
                <h2 style={{ color: '#fff' }}>Why Choose Acharya Dental for {service.title}?</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginTop: '1rem' }}>
                  We combine deep clinical expertise with the latest technology to deliver outstanding outcomes for every patient.
                </p>
                <ul className="why-us-list">
                  {service.whyUs.map((w, i) => (
                    <li key={i} className="why-us-item">
                      <Shield size={18} color="#FFD700" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'rgba(255,255,255,0.9)' }}>{w}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
                  <CalendarDays size={18} /> Book a Free Consultation
                </button>
              </motion.div>
              <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="service-trust-grid">
                  {[
                    { value: '20+', label: 'Years of Excellence' },
                    { value: '25K+', label: 'Happy Patients' },
                    { value: '5,000+', label: 'Implants Placed' },
                    { value: '18+', label: 'Awards Won' },
                  ].map((stat, i) => (
                    <div key={i} className="service-trust-stat">
                      <h3 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 800 }}>{stat.value}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.8)' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────── */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle">Questions Answered</span>
              <h2>Frequently Asked Questions</h2>
            </motion.div>
            <div className="faq-list">
              {service.faqs.map((faq, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <div className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <div className="faq-question">
                      <span>{faq.q}</span>
                      {openFaq === i ? <ChevronUp size={20} color="var(--primary-color)" /> : <ChevronDown size={20} />}
                    </div>
                    {openFaq === i && (
                      <motion.div className="faq-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }}>
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Services ─────────────────────────────────── */}
        {related.length > 0 && (
          <section className="section section-alt">
            <div className="container">
              <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="section-subtitle">Explore More</span>
                <h2>Related Services</h2>
              </motion.div>
              <div className="related-services-grid">
                {related.map((rel, i) => (
                  <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <Link to={`/services/${rel.slug}`} className="related-service-card">
                      <div className="related-service-img-wrapper">
                        <img src={rel.heroImage} alt={rel.title} className="related-service-img" />
                        <div className="related-service-overlay" style={{ background: `${rel.color}CC` }}>
                          <ArrowRight size={28} color="#fff" />
                        </div>
                      </div>
                      <div className="related-service-body">
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{rel.title}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{rel.subtitle}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Appointment CTA ──────────────────────────────────── */}
        <section className="service-appointment-cta">
          <div className="container" style={{ textAlign: 'center' }}>
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Star size={40} color="#FFD700" style={{ margin: '0 auto 1rem' }} />
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready for a Healthier, Brighter Smile?</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
                Book your consultation at Acharya Dental today. Our specialists will create a personalised treatment plan just for you.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                  <CalendarDays size={20} /> Book Appointment
                </button>
                <a href="tel:+919444408087" className="btn btn-ghost-white" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                  <Phone size={20} /> +91 94444 08087
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
