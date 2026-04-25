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
    text: "I lived with two missing front teeth for almost six years. I'd practically stopped smiling in photos. Dr. Ayesha did the implants over a few months and you genuinely can't tell — even my mother had to ask which ones were the new ones. Honestly the procedure was much easier than I'd built up in my head.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Ramesh Krishnan', location: 'Mysore', rating: 5, treatment: 'Invisalign',
    text: "I'm 42 and have had crooked front teeth my whole life. My daughter kept telling me to do something about it. Fourteen months on Invisalign at Smile Bright and the difference is bizarre to look at — I actually catch myself smiling at the mirror. Should have done it years ago.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Meenakshi Krishnan', location: 'Hyderabad', rating: 5, treatment: 'Full Mouth Rehabilitation',
    text: "I'd avoided the dentist for almost a decade — I was sure I'd be lectured. Dr. Ayesha didn't say a word about it. We just got on with sorting things out, one visit at a time. Took several months and the result is hard to describe. I get compliments on my teeth from people I've known for years.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Karthik Velu', location: 'Chennai', rating: 5, treatment: 'Laser Dentistry',
    text: "I'd put off the gum treatment for over a year — kept reading about the recovery and getting cold feet. They used a laser instead of a scalpel. No stitches, almost no bleeding. I was eating dinner that evening like nothing had happened.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Janani Ramesh', location: 'Kochi', rating: 5, treatment: 'Teeth Whitening',
    text: "Every whitening toothpaste I'd ever tried did nothing. One in-chair session and the shade chart said seven shades brighter. The dentist explained why kits don't really work and how to keep the result. Felt like a real conversation, not a sales pitch.",
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Saravanan Chandran', location: 'Pune', rating: 5, treatment: "Children's Dentistry",
    text: "My seven-year-old had had one bad experience and refused to even open his mouth at the next dentist. We tried Smile Bright on a recommendation. He left holding a sticker, asking when we were coming back. Whatever the team did, it worked.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Kavitha Rajan', location: 'Trivandrum', rating: 5, treatment: 'Root Canal',
    text: "I came in with the kind of toothache where you can't think straight. Was told it was a root canal and braced for something awful. With the sedation option it was the easiest two hours I've had at any dentist. I went back to work the next morning.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Muruganandam', location: 'Chennai', rating: 5, treatment: 'Smile Makeover',
    text: "Did veneers and whitening together. The in-house lab meant the crowns were ready quickly and the colour matched the rest of my teeth properly. Two visits and I genuinely look like I've gone back ten years. Worth every rupee.",
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&auto=format',
  },
  {
    name: 'Swathi Balaji', location: 'Surat', rating: 5, treatment: 'Dental Implants',
    text: "I flew down specifically for Dr. Ayesha after a friend recommended her. The follow-up emails, the post-op call to check how I was, the way the implant feels — it all justified the trip. The teeth feel like mine.",
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
              <h1 className="section-title light">What our patients say</h1>
              <p className="hero-description light" style={{ margin: '0 auto' }}>
                More than 15,000 patients have come through our doors. Here's what some of them have to say — in their own words.
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
                <h2 className="section-title">A few that stayed with us.</h2>
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
                <h2 className="section-title">More patients, more stories.</h2>
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
              <h2>If we looked after you well, tell us.</h2>
              <p className="hero-description">
                A short note from you helps the next patient make up their mind — and it tells us where we got it right (and where we didn't). Either way, we read everything.
              </p>
              <a href="/contact/feedback" className="btn btn-primary">Leave a review</a>
            </motion.div>
          </div>
        </section>



      </main>
      <Footer />
    </motion.div>
  );
};

export default TestimonialsPage;
