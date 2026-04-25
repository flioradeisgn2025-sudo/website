import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Tv2, Newspaper, Image, Play } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
};

const pressCoverage = [
    { outlet: 'The Hindu', date: 'Jan 2026', headline: "Smile Bright Dental Clinic \u2013 Chennai's Top Dental Destination", type: 'print' },
    { outlet: 'Times of India', date: 'Dec 2025', headline: 'Dr. Ayesha Subhan, BDS, MBA Recognized for Excellence in Endodontics', type: 'print' },
    { outlet: 'Deccan Herald', date: 'Oct 2025', headline: 'Advanced Laser Dentistry Now Available at Smile Bright Clinic', type: 'print' },
    { outlet: 'News9 Kannada', date: 'Sep 2025', headline: 'TV Interview: Dr. Ayesha Subhan, BDS, MBA on Modern Endodontic Care', type: 'tv' },
    { outlet: 'Vijay Karnataka', date: 'Aug 2025', headline: 'Free Dental Camp Organized by Smile Bright for School Children', type: 'print' },
    { outlet: 'NDTV Chennai', date: 'Jul 2025', headline: 'Feature: How Smile Bright Clinic is Changing Lives', type: 'tv' },
];

const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Treatment rooms', category: 'Clinic' },
    { id: 2, url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Digital X-ray suite', category: 'Clinic' },
    { id: 3, url: 'https://images.unsplash.com/photo-1651677375045-d0399a3bc028?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Dr. Vijailakshmi with a patient', category: 'Team' },
    { id: 4, url: 'https://images.unsplash.com/photo-1588776814546-1ffea99e7b71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Community dental camp, 2025', category: 'Events' },
    { id: 5, url: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'A laser procedure in progress', category: 'Clinic' },
    { id: 6, url: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'The team at the annual dental conference', category: 'Events' },
    { id: 7, url: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Pediatric area', category: 'Clinic' },
    { id: 8, url: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Patients after treatment', category: 'Patients' },
    { id: 9, url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'School visit — free health camp', category: 'Events' },
];

const galleryCats = ['All', 'Clinic', 'Team', 'Events', 'Patients'];

const Media = () => {
    const [activeTab, setActiveTab] = useState('gallery');
    const [selectedCat, setSelectedCat] = useState('All');
    const [lightbox, setLightbox] = useState(null);

    const filteredGallery = selectedCat === 'All'
        ? galleryImages
        : galleryImages.filter(g => g.category === selectedCat);

    return (
        <div className="media-page-main">
            <Header />
            <main>

                {/* Page Hero */}
                <section className="page-hero">
                    <div className="container">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="section-subtitle light">In The News &amp; Gallery</span>
                            <h1 className="section-title light" style={{ marginBottom: '1rem' }}>Press &amp; gallery</h1>
                            <p className="hero-description light">
                                A collection of press write-ups, photos around the clinic, and the occasional camp we've run in the community.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">

                        {/* Tab Switcher */}
                        <div className="media-tabs" style={{ marginBottom: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button
                                className={`media-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
                                onClick={() => setActiveTab('gallery')}
                                style={{ 
                                    padding: '0.75rem 2rem', 
                                    borderRadius: '100px', 
                                    border: activeTab === 'gallery' ? 'none' : '2px solid var(--border-color)',
                                    background: activeTab === 'gallery' ? 'var(--primary-color)' : 'transparent',
                                    color: activeTab === 'gallery' ? 'white' : 'var(--text-secondary)',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Image size={18} /> Photo Gallery
                            </button>
                            <button
                                className={`media-tab-btn ${activeTab === 'press' ? 'active' : ''}`}
                                onClick={() => setActiveTab('press')}
                                style={{ 
                                    padding: '0.75rem 2rem', 
                                    borderRadius: '100px', 
                                    border: activeTab === 'press' ? 'none' : '2px solid var(--border-color)',
                                    background: activeTab === 'press' ? 'var(--primary-color)' : 'transparent',
                                    color: activeTab === 'press' ? 'white' : 'var(--text-secondary)',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Newspaper size={18} /> Press Coverage
                            </button>
                        </div>

                        {/* Gallery Tab */}
                        {activeTab === 'gallery' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                                {/* Category filter */}
                                <div className="category-filters" style={{ marginBottom: '3rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    {galleryCats.map(cat => (
                                        <button
                                            key={cat}
                                            className={`cat-btn ${selectedCat === cat ? 'active' : ''}`}
                                            onClick={() => setSelectedCat(cat)}
                                            style={{
                                                padding: '0.5rem 1.25rem',
                                                borderRadius: '50px',
                                                border: '1px solid var(--border-color)',
                                                background: selectedCat === cat ? 'var(--accent-soft)' : 'white',
                                                color: selectedCat === cat ? 'var(--primary-color)' : 'var(--text-secondary)',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                fontSize: '0.9rem',
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                <div className="gallery-masonry" style={{ columns: '3 300px', gap: '2rem' }}>
                                    {filteredGallery.map((img, i) => (
                                        <motion.div
                                            key={img.id}
                                            className="gallery-item glass-card"
                                            custom={i}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeUp}
                                            onClick={() => setLightbox(img)}
                                            style={{ marginBottom: '2rem', overflow: 'hidden', cursor: 'zoom-in', transition: 'transform 0.3s ease' }}
                                        >
                                            <div style={{ position: 'relative', overflow: 'hidden' }}>
                                                <img src={img.url} alt={img.caption} className="gallery-img" style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }} />
                                                <div className="gallery-overlay" style={{ 
                                                    position: 'absolute', 
                                                    inset: 0, 
                                                    background: 'rgba(133, 0, 185, 0.4)', 
                                                    opacity: 0, 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center', 
                                                    transition: 'opacity 0.3s ease' 
                                                }}>
                                                    <Play size={32} color="white" />
                                                </div>
                                            </div>
                                            <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                                                <span className="gallery-caption" style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{img.caption}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Press Tab */}
                        {activeTab === 'press' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                                <div className="press-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                                    {pressCoverage.map((item, i) => (
                                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                            <div className="info-block-premium" style={{ height: '100%' }}>
                                                <div className="info-header" style={{ justifyContent: 'space-between' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                        {item.type === 'tv' ? (
                                                            <Tv2 size={24} />
                                                        ) : (
                                                            <Newspaper size={24} />
                                                        )}
                                                        <h4>{item.outlet}</h4>
                                                    </div>
                                                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--secondary-color)', background: 'var(--accent-soft)', padding: '0.25rem 0.75rem', borderRadius: '50px' }}>
                                                        {item.type}
                                                    </span>
                                                </div>
                                                <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600, margin: '1rem 0' }}>
                                                    {item.headline}
                                                </p>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.date}</p>
                                                    <a href="#" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', border: 'none', background: 'var(--primary-color)', color: 'white' }}>
                                                        <ExternalLink size={16} /> Read Full
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
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
                            onClick={() => setLightbox(null)}
                        >
                            <motion.div
                                className="lightbox-content-premium"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <button className="lightbox-close" onClick={() => setLightbox(null)}>
                                    <X size={24} />
                                </button>
                                <img src={lightbox.url} alt={lightbox.caption} style={{ width: '100%', display: 'block' }} />
                                <div className="lightbox-info" style={{ background: 'white', padding: '2rem', textAlign: 'center' }}>
                                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{lightbox.category}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{lightbox.caption}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>



            </main>
            <Footer />
        </div>
    );
};

export default Media;
