import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, MapPin, Clock, Eye, Sparkles, FlaskConical, Baby, Layers } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const tourSpots = [
  {
    id: 1, icon: Layers,
    title: 'Welcome Lobby & Reception',
    desc: 'Step into our calming, premium lobby designed to put every patient at ease from the moment you arrive. Modern check-in, cosy seating, and a friendly team await you.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2, icon: Eye,
    title: 'Consultation Rooms',
    desc: 'Spacious, private, and fully equipped consultation rooms where Dr. Sasha Helene reviews your case, takes X-rays, and crafts your personalised treatment plan.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3, icon: Sparkles,
    title: 'Treatment Suites',
    desc: 'Our state-of-the-art treatment chairs feature intraoral cameras, overhead LED lights, and entertainment screens so you stay relaxed and informed throughout your procedure.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4, icon: Baby,
    title: 'Paediatric Zone',
    desc: 'A dedicated, colourful, and fun children\'s area with games, cartoon screens, and a specially trained team that makes dental visits exciting for little ones.',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5, icon: FlaskConical,
    title: 'In-House Digital Laboratory',
    desc: 'Our fully equipped CAD/CAM dental laboratory crafts your crowns, veneers, and bridges on-site with precision milling technology for same-day restorations.',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6, icon: Layers,
    title: 'Laser & Imaging Suite',
    desc: 'Dedicated suite housing our 3D CBCT scanner for precision implant planning and our FDA-approved dental laser system for minimally invasive procedures.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
];

const TakeATour = () => {
  const [lightbox, setLightbox] = useState(null);
  const [current, setCurrent] = useState(null);

  const openLightbox = (spot) => { setLightbox(spot); setCurrent(tourSpots.findIndex(s => s.id === spot.id)); };
  const closeLightbox = () => setLightbox(null);
  const navPrev = () => { const i = (current - 1 + tourSpots.length) % tourSpots.length; setCurrent(i); setLightbox(tourSpots[i]); };
  const navNext = () => { const i = (current + 1) % tourSpots.length; setCurrent(i); setLightbox(tourSpots[i]); };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>

        {/* Hero */}
        <section className="tour-hero">
          <div className="tour-hero-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Explore Our Clinic</span>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Take a Virtual Tour</h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '560px', marginTop: '0.75rem', lineHeight: 1.7 }}>
                See how Acharya Dental has created a world-class, calming, and hygienic clinic experience designed around your comfort and safety.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                  <Clock size={16} /> Mon - Sat : 9:00 AM - 09:00 PM
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                  <MapPin size={16} /> #38/238, Angappa Naicken Street, Mannady, Chennai
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Tour */}
        <section className="section">
          <div className="container">
            <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle">360° Experience</span>
              <h2>Video Tour of Our Clinic</h2>
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="video-tour-wrapper glass-card">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                  alt="Clinic video tour"
                  className="video-tour-thumb"
                />
                <div className="video-tour-overlay">
                  <button className="video-tour-play-btn">
                    <Play size={32} fill="#fff" color="#fff" />
                  </button>
                  <p style={{ color: '#fff', marginTop: '1rem', fontWeight: 600, fontSize: '1.1rem' }}>
                    Watch 2-min clinic tour
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Tour Spots */}
        <section className="section section-alt">
          <div className="container">
            <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle">Photo Tour</span>
              <h2>Explore Each Area</h2>
            </motion.div>
            <div className="tour-spots-grid">
              {tourSpots.map((spot, i) => (
                <motion.div key={spot.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <div className="tour-spot-card" onClick={() => openLightbox(spot)}>
                    <div className="tour-spot-img-wrapper">
                      <img src={spot.image} alt={spot.title} className="tour-spot-img" />
                      <div className="tour-spot-overlay">
                        <Eye size={28} color="#fff" />
                        <span style={{ color: '#fff', fontWeight: 600, marginTop: '0.5rem' }}>View Area</span>
                      </div>
                    </div>
                    <div className="tour-spot-body">
                      <div className="tour-spot-icon">
                        <spot.icon size={20} color="var(--primary-color)" />
                      </div>
                      <div>
                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>{spot.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{spot.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Info */}
        <section className="section">
          <div className="container">
            <div className="visit-info-grid">
              <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 style={{ marginBottom: '1.5rem' }}>Plan Your Visit</h2>
                <div className="visit-detail-row">
                  <Clock size={22} color="var(--primary-color)" />
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Clinic Hours</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Mon - Sat : 9:00 AM - 09:00 PM</p>
                  </div>
                </div>
                <div className="visit-detail-row">
                  <MapPin size={22} color="var(--primary-color)" />
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Location</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>#38/238, Angappa Naicken Street, Mannady, Landmark: Near Eidgah Mosque., Chennai, Tamil Nadu 600001</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.9rem' }}>Get Directions →</a>
                  </div>
                </div>
              </motion.div>
              <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="map-embed">
                  <iframe
                    title="Acharya Dental Location"
                    src="https://maps.google.com/maps?q=13.0985869,80.2912231&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="300" style={{ border: 0, borderRadius: '12px' }} allowFullScreen loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox && (
          <motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeLightbox}>
            <motion.div className="lightbox-inner" style={{ maxWidth: '800px' }} initial={{ scale: 0.85 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}><X size={22} /></button>
              <img src={lightbox.image} alt={lightbox.title} style={{ width: '100%', borderRadius: '10px' }} />
              <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>{lightbox.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>{lightbox.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                <button className="control-btn" onClick={navPrev}><ChevronLeft /></button>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', alignSelf: 'center' }}>{current + 1} / {tourSpots.length}</span>
                <button className="control-btn" onClick={navNext}><ChevronRight /></button>
              </div>
            </motion.div>
          </motion.div>
        )}

      </main>
      <Footer />
    </>
  );
};

export default TakeATour;
