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
    { outlet: 'The Hindu', date: 'Jan 2026', headline: "Smile Bright Dental Clinic \u2013 Bangalore's Top Dental Destination", type: 'print' },
    { outlet: 'Times of India', date: 'Dec 2025', headline: 'Dr. Vijailakshmi Acharya Recognized for Excellence in Oral Medicine', type: 'print' },
    { outlet: 'Deccan Herald', date: 'Oct 2025', headline: 'Advanced Laser Dentistry Now Available at Smile Bright Clinic', type: 'print' },
    { outlet: 'News9 Kannada', date: 'Sep 2025', headline: 'TV Interview: Dr. Varun Acharya on Modern Implant Dentistry', type: 'tv' },
    { outlet: 'Vijay Karnataka', date: 'Aug 2025', headline: 'Free Dental Camp Organized by Smile Bright for School Children', type: 'print' },
    { outlet: 'NDTV Bangalore', date: 'Jul 2025', headline: 'Feature: How Smile Bright Clinic is Changing Lives', type: 'tv' },
];

const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'State-of-the-Art Treatment Rooms', category: 'Clinic' },
    { id: 2, url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Advanced Digital X-Ray Suite', category: 'Clinic' },
    { id: 3, url: 'https://images.unsplash.com/photo-1651677375045-d0399a3bc028?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Dr. Vijailakshmi – Patient Consultation', category: 'Team' },
    { id: 4, url: 'https://images.unsplash.com/photo-1588776814546-1ffea99e7b71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Community Dental Camp 2025', category: 'Events' },
    { id: 5, url: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Laser Dentistry Procedure', category: 'Clinic' },
    { id: 6, url: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Team at Annual Dental Conference 2025', category: 'Events' },
    { id: 7, url: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Paediatric Dentistry Wing', category: 'Clinic' },
    { id: 8, url: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Happy Patients – Post Treatment', category: 'Patients' },
    { id: 9, url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', caption: 'Free Health Camp – School Visit', category: 'Events' },
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
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>

                {/* Page Hero */}
                <section className="page-hero-banner" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #7B6CF6 100%)' }}>
                    <div className="page-hero-overlay" />
                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="section-subtitle">In The News &amp; Gallery</span>
                            <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Media Centre</h1>
                            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginTop: '0.75rem' }}>
                                Press coverage, photo gallery, and media resources from Smile Bright Dental Clinic.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">

                        {/* Tab Switcher */}
                        <div className="media-tabs">
                            <button
                                className={`media-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
                                onClick={() => setActiveTab('gallery')}
                            >
                                <Image size={18} /> Photo Gallery
                            </button>
                            <button
                                className={`media-tab-btn ${activeTab === 'press' ? 'active' : ''}`}
                                onClick={() => setActiveTab('press')}
                            >
                                <Newspaper size={18} /> Press Coverage
                            </button>
                        </div>

                        {/* Gallery Tab */}
                        {activeTab === 'gallery' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                                {/* Category filter */}
                                <div className="category-filters" style={{ marginBottom: '2.5rem' }}>
                                    {galleryCats.map(cat => (
                                        <button
                                            key={cat}
                                            className={`cat-btn ${selectedCat === cat ? 'active' : ''}`}
                                            onClick={() => setSelectedCat(cat)}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                <div className="gallery-masonry">
                                    {filteredGallery.map((img, i) => (
                                        <motion.div
                                            key={img.id}
                                            className="gallery-item"
                                            custom={i}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeUp}
                                            onClick={() => setLightbox(img)}
                                        >
                                            <img src={img.url} alt={img.caption} className="gallery-img" />
                                            <div className="gallery-overlay">
                                                <span className="gallery-caption">{img.caption}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Press Tab */}
                        {activeTab === 'press' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                                <div className="press-grid">
                                    {pressCoverage.map((item, i) => (
                                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                            <div className="press-card glass-card">
                                                <div className="press-card-header">
                                                    {item.type === 'tv' ? (
                                                        <Tv2 size={24} color="var(--primary-color)" />
                                                    ) : (
                                                        <Newspaper size={24} color="var(--primary-color)" />
                                                    )}
                                                    <span className="press-type-tag">{item.type === 'tv' ? 'Television' : 'Print'}</span>
                                                </div>
                                                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', margin: '1rem 0 0.5rem' }}>
                                                    {item.headline}
                                                </h3>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                                    <div>
                                                        <p style={{ fontWeight: 700, color: 'var(--primary-color)' }}>{item.outlet}</p>
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.date}</p>
                                                    </div>
                                                    <a href="#" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                                        <ExternalLink size={15} /> View
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
                            className="lightbox-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setLightbox(null)}
                        >
                            <motion.div
                                className="lightbox-inner"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <button className="lightbox-close" onClick={() => setLightbox(null)}>
                                    <X size={24} />
                                </button>
                                <img src={lightbox.url} alt={lightbox.caption} style={{ width: '100%', borderRadius: '12px' }} />
                                <p style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>{lightbox.caption}</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </main>
            <Footer />
        </>
    );
};

export default Media;
