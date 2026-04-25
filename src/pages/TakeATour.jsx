import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, MapPin, Clock, Eye, Sparkles, Layers } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const tourSpots = [
  {
    id: 1, icon: Layers,
    title: 'Reception',
    desc: 'A small lobby, comfortable chairs, and someone who actually looks up when you walk in. Most paperwork is digital so there\'s less of it.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2, icon: Eye,
    title: 'Consultation Rooms',
    desc: 'Private rooms where Dr. Ayesha goes through your case, looks at X-rays with you on the screen, and writes up the plan. No rushing.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3, icon: Sparkles,
    title: 'Treatment Suites',
    desc: 'Modern chairs with intraoral cameras, overhead LED lighting, and screens for the long appointments. Most patients say the second visit feels easier than the first.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="tour-page-main">

        {/* Hero */}
        <section className="page-hero tour-hero-premium">
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <span className="section-subtitle light">Explore Our Clinic</span>
              <h1 className="section-title light">A look around before you visit.</h1>
              <p className="hero-description light">
                A quick walkthrough of the clinic — the chairs, the lab, the pediatric area —
                so the place is familiar before you ever set foot in it.
              </p>
              <div className="hero-info-pills">
                <div className="hero-info-pill">
                  <Clock size={16} /> <span>Daily : 9 AM - 9 PM</span>
                </div>
                <div className="hero-info-pill">
                  <MapPin size={16} /> <span>Mannady, Chennai</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Tour Section */}
        <section className="section">
          <div className="container">
            <motion.div 
                className="section-header" 
                style={{ textAlign: 'center', justifyContent: 'center' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              <div>
                <span className="section-subtitle">The Experience</span>
                <h2 className="section-title">Video Walkthrough</h2>
              </div>
            </motion.div>
            
            <motion.div 
                className="video-tour-premium glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="video-placeholder">
                    <img 
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                        alt="Clinic Preview" 
                    />
                    <div className="video-overlay-premium">
                        <button className="video-play-button-premium">
                            <Play size={32} fill="white" />
                        </button>
                        <p>Watch full clinic tour</p>
                    </div>
                </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Spots */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
                <div>
                   <span className="section-subtitle">Clinical Excellence</span>
                   <h2 className="section-title">Explore Our Facility</h2>
                </div>
            </div>
            
            <div className="tour-grid-premium">
              {tourSpots.map((spot, i) => (
                <motion.div 
                    key={spot.id} 
                    className="tour-card-premium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => openLightbox(spot)}
                >
                    <div className="tour-card-image">
                      <img src={spot.image} alt={spot.title} />
                      <div className="tour-card-overlay">
                        <Eye size={24} />
                        <span>Inspect Area</span>
                      </div>
                    </div>
                    <div className="tour-card-content">
                       <div className="icon-wrapper">
                         <spot.icon size={20} />
                       </div>
                       <h4>{spot.title}</h4>
                       <p>{spot.desc}</p>
                    </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Planning Your Visit */}
        <section className="section">
          <div className="container">
            <div className="visit-info-grid-premium">
              <div className="visit-details-premium">
                 <span className="section-subtitle">Contact info</span>
                 <h2>Plan Your Visit</h2>
                 
                 <div className="visit-item-premium">
                    <div className="icon-box"><Clock size={20} /></div>
                    <div className="text-box">
                       <h4>Clinic Hours</h4>
                       <p>Mon - Sat : 9:00 AM - 09:00 PM</p>
                    </div>
                 </div>

                 <div className="visit-item-premium">
                    <div className="icon-box"><MapPin size={20} /></div>
                    <div className="text-box">
                       <h4>Location</h4>
                       <p>#38/238, Angappa Naicken Street, Mannady, Chennai</p>
                       <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Get Directions →</a>
                    </div>
                 </div>
              </div>

              <div className="visit-map-premium">
                  <iframe
                    title="Smile Bright Dental Location"
                    src="https://maps.google.com/maps?q=13.0985869,80.2912231&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="450" style={{ border: 0, borderRadius: '24px' }} allowFullScreen loading="lazy"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
            {lightbox && (
            <motion.div 
                className="lightbox-overlay-premium" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={closeLightbox}
            >
                <motion.div 
                    className="lightbox-content-premium" 
                    initial={{ scale: 0.9, y: 20 }} 
                    animate={{ scale: 1, y: 0 }} 
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={e => e.stopPropagation()}
                >
                    <button className="lightbox-close" onClick={closeLightbox}><X size={24} /></button>
                    <img src={lightbox.image} alt={lightbox.title} />
                    <div className="lightbox-info">
                        <h3>{lightbox.title}</h3>
                        <p>{lightbox.desc}</p>
                        <div className="lightbox-nav">
                            <button className="nav-btn" onClick={navPrev}><ChevronLeft size={20} /></button>
                            <span>{current + 1} / {tourSpots.length}</span>
                            <button className="nav-btn" onClick={navNext}><ChevronRight size={20} /></button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>

      </main>
      <Footer />
    </motion.div>
  );
};

export default TakeATour;
