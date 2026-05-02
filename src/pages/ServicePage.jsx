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

        {/* ── Hero Banner (v3 — image-left tall, feature list right) ─── */}
        <section className="svc-hero-v2 svc-hero-opt2">
          <div className="container svc-opt2-grid">
            <motion.div
              className="svc-opt2-image-col"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="svc-opt2-image-frame">
                <img src={service.heroImage} alt={service.title} />
              </div>
              <div className="svc-opt2-image-tag">
                <span className="svc-opt2-image-tag-num">10<sup>+</sup></span>
                <span className="svc-opt2-image-tag-label">Years of<br />expertise</span>
              </div>
            </motion.div>

            <motion.div
              className="svc-opt2-text-col"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <nav className="svc-hero-v2-crumbs">
                <Link to="/">Home</Link>
                <ArrowRight size={12} />
                <Link to="/">Services</Link>
                <ArrowRight size={12} />
                <span>{service.title}</span>
              </nav>

              <h1 className="svc-opt2-title">
                {service.title}
                <span className="svc-opt2-title-bar" />
              </h1>
              <p className="svc-opt2-tagline">{service.tagline}</p>

              <ul className="svc-opt2-features">
                {service.benefits.slice(0, 3).map((b, i) => (
                  <li key={i}>
                    <span className="svc-opt2-feature-num">0{i + 1}</span>
                    <span className="svc-opt2-feature-text">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="svc-hero-v2-actions">
                <a
                  href="https://wa.me/919444408087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc-hero-v2-btn svc-hero-v2-btn-primary"
                >
                  <CalendarDays size={18} /> Book Appointment
                </a>
                <a href="tel:+919444408087" className="svc-hero-v2-btn svc-hero-v2-btn-ghost">
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
                {service.procedure && service.procedure.length > 0 && (
                  <div className="service-process-inline">
                    <h3>How it works</h3>
                    <ol className="service-process-list">
                      {service.procedure.map((p) => (
                        <li key={p.step}>
                          <span className="service-process-step">{p.step}</span>
                          <div>
                            <h4>{p.title}</h4>
                            <p>{p.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                {service.whyUs && service.whyUs.length > 0 && (
                  <div className="service-whyus-inline">
                    <h3>Why patients choose us</h3>
                    <ul className="service-whyus-list">
                      {service.whyUs.map((w, i) => (
                        <li key={i}>
                          <CheckCircle2 size={18} className="text-primary" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.relatedServices && service.relatedServices.length > 0 && (
                  <div className="service-related-inline">
                    <h3>Explore other treatments</h3>
                    <div className="service-related-grid">
                      {service.relatedServices
                        .map((slug) => getServiceBySlug(slug))
                        .filter(Boolean)
                        .map((rs) => (
                          <Link
                            key={rs.slug}
                            to={`/services/${rs.slug}`}
                            className="service-related-card"
                          >
                            <div className="service-related-card-text">
                              <span className="service-related-card-eyebrow">{rs.subtitle}</span>
                              <h4>{rs.title}</h4>
                              <p>{rs.tagline}</p>
                              <span className="service-related-card-cta">
                                Learn more <ArrowRight size={16} />
                              </span>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
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



      </main>
      <Footer />
    </motion.div>
  );
};
export default ServicePage;
