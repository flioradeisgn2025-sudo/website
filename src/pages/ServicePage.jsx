import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  Phone, CalendarDays, Star, Shield, Clock, MapPin
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getServiceBySlug, getRelatedServices } from '../data/servicesData';

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Header />
        <main className="section flex flex-col items-center justify-center min-vh-80 text-center">
          <div className="container">
            <h2>Service not found</h2>
            <Link to="/" className="btn btn-primary mt-8">Go Home</Link>
          </div>
        </main>
        <Footer />
      </motion.div>
    );
  }

  const related = getRelatedServices(service.relatedServices);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="service-page-main">

        {/* ── Hero Banner ─────────────────────────────────────── */}
        <section className="service-page-hero">
          <div
            className="service-hero-img-bg"
            style={{ backgroundImage: `url(${service.heroImage})` }}
          />
          <div className="service-hero-overlay" />
          <div className="container relative z-10">
            <motion.div 
              className="service-hero-inner"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7 }}
            >
              <nav className="service-breadcrumb light">
                <Link to="/">Home</Link>
                <ArrowRight size={12} />
                <Link to="/">Services</Link>
                <ArrowRight size={12} />
                <span>{service.title}</span>
              </nav>
              <h1 className="section-title light" style={{ textAlign: 'left', margin: '0' }}>{service.title}</h1>
              <p className="service-hero-tagline">{service.tagline}</p>
              <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
                <a href="https://wa.me/919444408087" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <CalendarDays size={18} /> Book Appointment
                </a>
                <a href="tel:+919444408087" className="btn btn-ghost-white">
                  <Phone size={18} /> Call Specialist
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="service-overview-grid-premium">
              <motion.div 
                className="service-main-content"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="section-subtitle">The treatment</span>
                <h2>About {service.title}</h2>
                <div className="service-description-text">
                  {service.overview.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>

              {/* Benefits sidebar */}
              <motion.div 
                className="service-sidebar"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="service-benefits-card-premium">
                  <h3>Key Benefits</h3>
                  <ul className="service-benefits-list-premium">
                    {service.benefits.map((b, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className="text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-sidebar-cta">
                    <div className="icon-box">
                      <Phone size={24} />
                    </div>
                    <div className="text-box">
                      <p>Have Questions?</p>
                      <a href="tel:+919444408087">+91 94444 08087</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────── */}
        <section className="section section-alt">
          <div className="container" style={{ maxWidth: '900px' }}>
            <motion.div 
                className="section-header" 
                style={{ textAlign: 'center', justifyContent: 'center' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              <div>
                <span className="section-subtitle">Common questions</span>
                <h2 className="section-title">Things people usually ask</h2>
              </div>
            </motion.div>
            <div className="faq-list-premium">
              {service.faqs.map((faq, i) => (
                <div key={i} className={`faq-item-premium ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="faq-question-premium">
                    <span>{faq.q}</span>
                    <div className="faq-icon-wrapper">
                        {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        className="faq-answer-premium" 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }} 
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Services ─────────────────────────────────── */}
        {related.length > 0 && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <div>
                  <span className="section-subtitle">Explore More</span>
                  <h2 className="section-title">Related Treatments</h2>
                </div>
              </div>
              <div className="related-services-grid-premium">
                {related.map((rel, i) => (
                  <motion.div 
                    key={i} 
                    className="related-service-card-premium"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link to={`/services/${rel.slug}`}>
                      <div className="related-img-wrapper">
                        <img src={rel.heroImage} alt={rel.title} />
                        <div className="related-overlay">
                          <ArrowRight size={24} />
                        </div>
                      </div>
                      <div className="related-content">
                        <h4>{rel.title}</h4>
                        <p>{rel.subtitle}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Appointment CTA ──────────────────────────────────── */}
        <section className="section section-cta-premium">
          <div className="container text-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="cta-card-premium"
            >
              <Star size={48} className="text-secondary" style={{ margin: '0 auto 1.5rem' }} />
              <h2>Want to talk it through first?</h2>
              <p className="hero-description">
                Book a consultation. We'll have a proper look, explain what we'd suggest, and put a written quote together — no pressure to decide on the spot.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <a href="https://wa.me/919444408087" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  <CalendarDays size={20} /> Book Appointment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </motion.div>
  );
};
export default ServicePage;
