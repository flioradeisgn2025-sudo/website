import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, MapPin, ThumbsUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const allTestimonials = [
  {
    name: 'Priya Sharma', location: 'Bangalore', rating: 5, treatment: 'Dental Implants',
    text: 'I had been living with missing teeth for years, embarrassed to smile. Dr. Sasha Helene performed my treatment and the results are absolutely life-changing. You cannot tell they are not real teeth. The whole process was far less painful than I feared.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Rajesh Kulkarni', location: 'Mysore', rating: 5, treatment: 'Invisalign',
    text: 'I am 42 and always had crooked teeth. My daughter convinced me to try Invisalign at Smile Bright Dental and I am so glad I listened! In 14 months I have the straightest teeth I have ever had. Such a gentle and professional team.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Ananya Reddy', location: 'Hyderabad', rating: 5, treatment: 'Full Mouth Rehabilitation',
    text: 'Dr. Sasha Helene is a true artist. She rebuilt my entire smile after years of neglect. Her patience, attention to detail, and genuine care for my wellbeing made all the difference. I get compliments on my smile every single day now.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Mohammed Ashraf', location: 'Chennai', rating: 5, treatment: 'Laser Dentistry',
    text: 'I needed treatment and was terrified. Chose Smile Bright Dental after reading reviews. The laser procedure was completely painless — no cuts, no stitches. I was back to work the same evening!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Sunita Nair', location: 'Kochi', rating: 5, treatment: 'Teeth Whitening',
    text: 'I tried every whitening toothpaste with no results. One session of in-chair whitening at Smile Bright Dental gave me 7 shades whiter teeth! So happy with the results. The appointment was relaxing and the team explained everything.',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Amit Joshi', location: 'Pune', rating: 5, treatment: "Children's Dentistry",
    text: "My 7-year-old was petrified of dentists. The paediatric team at Smile Bright Dental worked magic — he left happy and asked when he can come back! The clinic has a dedicated kids area, cartoon shows, and the kindest staff.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Deepa Menon', location: 'Trivandrum', rating: 5, treatment: 'Root Canal',
    text: "I had severe tooth pain and was told I needed a root canal. I came in petrified but left completely impressed. Dr. Sasha Helene's precision and the clinic's sedation options made it the most comfortable dental experience I've ever had.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Venkatesh Rao', location: 'Bangalore', rating: 5, treatment: 'Smile Makeover',
    text: 'My smile makeover with veneers and whitening is incredible — I look 10 years younger. The in-house lab means everything matched perfectly and was done in just 2 visits. Worth every rupee.',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Lakshmi Patel', location: 'Surat', rating: 5, treatment: 'Dental Implants',
    text: 'Flew specifically for Dr. Sasha Helene. Worth every bit of the journey. Her expertise is extraordinary and the after-care support is exceptional. My new teeth feel completely natural.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&auto=format',
  },
];

const stats = [
  { value: '25,000+', label: 'Happy Patients' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '98%', label: 'Would Recommend' },
  { value: '20+', label: 'Years Trusted' },
];

const VideoCard = ({ name, treatment, thumbnail, quote }) => (
  <div className="video-testimonial-card glass-card">
    <div className="video-thumb-wrapper">
      <img src={thumbnail} alt={name} className="video-thumb" />
      <div className="video-play-btn">
        <Play size={24} fill="#fff" color="#fff" />
      </div>
    </div>
    <div className="video-card-body">
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>"{quote}"</p>
      <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{name}</h4>
      <span style={{ color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: 600 }}>{treatment}</span>
    </div>
  </div>
);

const TestimonialsPage = () => {
  const [featured, setFeatured] = useState(0);
  const [direction, setDirection] = useState(1);
  const CARDS_PER_PAGE = 3;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(allTestimonials.length / CARDS_PER_PAGE);
  const visible = allTestimonials.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const goNext = () => { setDirection(1); setFeatured(f => (f + 1) % allTestimonials.length); };
  const goPrev = () => { setDirection(-1); setFeatured(f => (f - 1 + allTestimonials.length) % allTestimonials.length); };

  const t = allTestimonials[featured];

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>

        {/* Hero */}
        <section className="page-hero-banner" style={{ background: 'linear-gradient(135deg, #2d1b8e 0%, #7B6CF6 100%)' }}>
          <div className="page-hero-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="section-subtitle">Real Stories, Real Smiles</span>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>Patient Testimonials</h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginTop: '0.75rem', maxWidth: '580px' }}>
                Over 25,000 patients trust Smile Bright Dental. Hear what they have to say about their experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: 'var(--primary-color)', padding: '2.5rem 0' }}>
          <div className="container">
            <div className="testi-stats-row">
              {stats.map((s, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
                  <h3 style={{ color: '#fff', fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.25rem' }}>{s.value}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Slider */}
        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle">Featured Stories</span>
              <h2>Life-Changing Dental Experiences</h2>
            </motion.div>
            <div className="featured-testi-card glass-card">
              <div className="testi-card-nav">
                <button className="control-btn" onClick={goPrev}><ChevronLeft /></button>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{featured + 1} / {allTestimonials.length}</span>
                <button className="control-btn" onClick={goNext}><ChevronRight /></button>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={featured}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.4 }}
                >
                  <Quote size={48} color="var(--primary-color)" style={{ opacity: 0.2, marginBottom: '1.5rem' }} />
                  <div className="testi-stars">
                    {Array(t.rating).fill(0).map((_, i) => <Star key={i} size={20} fill="#FFD700" color="#FFD700" />)}
                  </div>
                  <p className="featured-testi-text">"{t.text}"</p>
                  <div className="testi-author-row">
                    <img src={t.avatar} alt={t.name} className="testi-avatar" />
                    <div>
                      <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.15rem' }}>{t.name}</h4>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        <MapPin size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /> {t.location} &nbsp;·&nbsp; {t.treatment}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* All Reviews Grid */}
        <section className="section section-alt">
          <div className="container">
            <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle">All Reviews</span>
              <h2>More Patient Stories</h2>
            </motion.div>
            <div className="testi-grid">
              {visible.map((t, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <div className="testi-review-card glass-card">
                    <div className="testi-stars" style={{ marginBottom: '1rem' }}>
                      {Array(t.rating).fill(0).map((_, j) => <Star key={j} size={16} fill="#FFD700" color="#FFD700" />)}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.25rem' }}>"{t.text}"</p>
                    <div className="testi-author-row" style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                      <img src={t.avatar} alt={t.name} className="testi-avatar" style={{ width: '42px', height: '42px' }} />
                      <div>
                        <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', margin: 0 }}>{t.name}</h4>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{t.location} · {t.treatment}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '3rem' }}>
              {Array(totalPages).fill(0).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`testi-page-btn ${page === i ? 'active' : ''}`}
                >{i + 1}</button>
              ))}
            </div>
          </div>
        </section>

        {/* Leave A Review CTA */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <ThumbsUp size={48} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
              <h2 style={{ marginBottom: '1rem' }}>Share Your Experience</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Had a great experience at Smile Bright Dental? We would love to hear from you and help others make an informed choice.
              </p>
              <a href="/contact/feedback" className="btn btn-primary">Write a Review</a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
