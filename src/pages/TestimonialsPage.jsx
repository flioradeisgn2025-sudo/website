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
    name: 'Deepa Sundaram', location: 'Chennai', rating: 5, treatment: 'Dental Implants',
    text: 'I had been living with missing teeth for years, embarrassed to smile. Dr. Ayesha Subhan, BDS, MBA performed my treatment and the results are absolutely life-changing. You cannot tell they are not real teeth. The whole process was far less painful than I feared.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Ramesh Krishnan', location: 'Mysore', rating: 5, treatment: 'Invisalign',
    text: 'I am 42 and always had crooked teeth. My daughter convinced me to try Invisalign at Smile Bright Dental and I am so glad I listened! In 14 months I have the straightest teeth I have ever had. Such a gentle and professional team.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Meenakshi Krishnan', location: 'Hyderabad', rating: 5, treatment: 'Full Mouth Rehabilitation',
    text: 'Dr. Ayesha Subhan, BDS, MBA is a true artist. She rebuilt my entire smile after years of neglect. Her patience, attention to detail, and genuine care for my wellbeing made all the difference. I get compliments on my smile every single day now.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Karthik Velu', location: 'Chennai', rating: 5, treatment: 'Laser Dentistry',
    text: 'I needed treatment and was terrified. Chose Smile Bright Dental after reading reviews. The laser procedure was completely painless — no cuts, no stitches. I was back to work the same evening!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Janani Ramesh', location: 'Kochi', rating: 5, treatment: 'Teeth Whitening',
    text: 'I tried every whitening toothpaste with no results. One session of in-chair whitening at Smile Bright Dental gave me 7 shades whiter teeth! So happy with the results. The appointment was relaxing and the team explained everything.',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Saravanan Chandran', location: 'Pune', rating: 5, treatment: "Children's Dentistry",
    text: "My 7-year-old was petrified of dentists. The paediatric team at Smile Bright Dental worked magic — he left happy and asked when he can come back! The clinic has a dedicated kids area, cartoon shows, and the kindest staff.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Kavitha Rajan', location: 'Trivandrum', rating: 5, treatment: 'Root Canal',
    text: "I had severe tooth pain and was told I needed a root canal. I came in petrified but left completely impressed. Dr. Ayesha Subhan, BDS, MBA's precision and the clinic's sedation options made it the most comfortable dental experience I've ever had.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Muruganandam', location: 'Chennai', rating: 5, treatment: 'Smile Makeover',
    text: 'My smile makeover with veneers and whitening is incredible — I look 10 years younger. The in-house lab means everything matched perfectly and was done in just 2 visits. Worth every rupee.',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Swathi Balaji', location: 'Surat', rating: 5, treatment: 'Dental Implants',
    text: 'Flew specifically for Dr. Ayesha Subhan, BDS, MBA. Worth every bit of the journey. Her expertise is extraordinary and the after-care support is exceptional. My new teeth feel completely natural.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&auto=format',
  },
];

const stats = [
  { value: '15,000+', label: 'Happy Patients' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '10+', label: 'Years Excellence' },
  { value: '2,000+', label: 'Implants Placed' },
];

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="testimonials-page-main">

        {/* Hero */}
        <section className="page-hero">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: 'center' }}>
              <span className="section-subtitle light">Real Stories, Real Smiles</span>
              <h1 className="section-title light">Patient Testimonials</h1>
              <p className="hero-description light" style={{ margin: '0 auto' }}>
                Over 15,000 patients trust Smile Bright Dental. Hear what they have to say about their precision care experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="testimonials-stats-bar">
          <div className="container">
            <div className="testi-stats-grid">
              {stats.map((s, i) => (
                <motion.div 
                    key={i} 
                    className="testi-stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                >
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Slider */}
        <section className="section">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <motion.div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
              <div>
                <span className="section-subtitle">Featured Stories</span>
                <h2 className="section-title">Life-Changing Dental Experiences</h2>
              </div>
            </motion.div>
            
            <div className="featured-testi-wrapper">
              <div className="testi-content-area">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={featured}
                        className="featured-testi-card-premium"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Quote size={60} className="quote-icon-large" />
                        <div className="testi-stars-premium">
                            {Array(t.rating).fill(0).map((_, i) => <Star key={i} size={20} fill="var(--secondary-color)" color="var(--secondary-color)" />)}
                        </div>
                        <p className="featured-testi-text-premium">"{t.text}"</p>
                        <div className="testi-author-premium">
                            <img src={t.avatar} alt={t.name} className="testi-avatar-premium" />
                            <div>
                                <h4>{t.name}</h4>
                                <span>{t.treatment} Patient</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
              </div>

              <div className="testi-navigation-premium">
                <button className="control-btn" onClick={goPrev}><ChevronLeft size={24} /></button>
                <div className="testi-dots">
                    {allTestimonials.map((_, i) => (
                        <div key={i} className={`testi-dot ${featured === i ? 'active' : ''}`} onClick={() => setFeatured(i)}></div>
                    ))}
                </div>
                <button className="control-btn" onClick={goNext}><ChevronRight size={24} /></button>
              </div>
            </div>
          </div>
        </section>

        {/* All Reviews Grid */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
              <div>
                <span className="section-subtitle">All Reviews</span>
                <h2 className="section-title">More Patient Stories</h2>
              </div>
            </div>
            
            <div className="reviews-grid-premium">
              {visible.map((t, i) => (
                <motion.div 
                    key={i} 
                    className="review-card-premium"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                >
                    <div className="review-stars-premium">
                      {Array(t.rating).fill(0).map((_, j) => <Star key={j} size={14} fill="var(--secondary-color)" color="var(--secondary-color)" />)}
                    </div>
                    <p className="review-text-premium">"{t.text}"</p>
                    <div className="review-author-premium">
                      <img src={t.avatar} alt={t.name} className="review-avatar-premium" />
                      <div>
                        <h4>{t.name}</h4>
                        <span>{t.treatment}</span>
                      </div>
                    </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination-premium">
              {Array(totalPages).fill(0).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`page-btn-premium ${page === i ? 'active' : ''}`}
                >{i + 1}</button>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              <ThumbsUp size={56} className="text-secondary" style={{ margin: '0 auto 1.5rem' }} />
              <h2>Share Your Experience</h2>
              <p className="hero-description">
                Had a great experience at Smile Bright Dental? We would love to hear from you and help others make an informed choice for their dental health.
              </p>
              <a href="/contact/feedback" className="btn btn-primary">Write a Review</a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </motion.div>
  );
};

export default TestimonialsPage;
