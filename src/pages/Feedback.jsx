import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, CheckCircle2, Heart, ThumbsUp, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const categories = [
  { label: 'Overall Experience', key: 'overall' },
  { label: 'Cleanliness & Hygiene', key: 'cleanliness' },
  { label: 'Doctor Communication', key: 'doctor' },
  { label: 'Staff & Friendliness', key: 'staff' },
  { label: 'Wait Time', key: 'wait' },
  { label: 'Value for Money', key: 'value' },
];

const StarRating = ({ value, onChange, label }) => (
  <div className="star-rating-group">
    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', minWidth: '180px' }}>{label}</span>
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map(star => (
        <button
          type="button"
          key={star}
          onClick={() => onChange(star)}
          className="star-rate-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
        >
          <Star
            size={28}
            fill={star <= value ? '#FFD700' : 'transparent'}
            color={star <= value ? '#FFD700' : '#ccc'}
            style={{ transition: 'all 0.15s' }}
          />
        </button>
      ))}
    </div>
    <span style={{ color: '#FFD700', fontWeight: 600, fontSize: '0.9rem', minWidth: '30px' }}>
      {value > 0 ? value : ''}
    </span>
  </div>
);

const recentFeedback = [
  { name: 'Priya M.', rating: 5, treatment: 'Dental Implants', text: 'Absolutely flawless experience from start to finish. Highly recommend Dr. Varun!', date: 'Mar 2026' },
  { name: 'Karan R.', rating: 5, treatment: 'Invisalign', text: 'The team was patient, explained everything clearly, and the results are beyond expectations.', date: 'Feb 2026' },
  { name: 'Sunita P.', rating: 4, treatment: 'Teeth Whitening', text: 'Very professional clinic. The whitening results were dramatic. Staff very friendly.', date: 'Feb 2026' },
  { name: 'Anil K.', rating: 5, treatment: 'Root Canal', text: 'I was scared of root canals but this was completely painless. Dr. Vijailakshmi is exceptional.', date: 'Jan 2026' },
  { name: 'Meera J.', rating: 5, treatment: "Children's Dentistry", text: "My daughter loved visiting the clinic! The kids' zone and gentle team made it fun.", date: 'Jan 2026' },
  { name: 'Rohit D.', rating: 5, treatment: 'Teeth Cleaning', text: 'Thorough, painless cleaning and excellent advice on oral hygiene. Will definitely be back!', date: 'Dec 2025' },
];

const Feedback = () => {
  const [ratings, setRatings] = useState({ overall: 0, cleanliness: 0, doctor: 0, staff: 0, wait: 0, value: 0 });
  const [form, setForm] = useState({ name: '', email: '', treatment: '', comments: '' });
  const [recommend, setRecommend] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const avgRating = Object.values(ratings).filter(v => v > 0).reduce((a, b) => a + b, 0) / (Object.values(ratings).filter(v => v > 0).length || 1);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>

        {/* Hero */}
        <section className="page-hero-banner" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #cc0000 100%)' }}>
          <div className="page-hero-overlay" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="section-subtitle">Your Opinion Matters</span>
              <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Share Your Feedback</h1>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginTop: '0.75rem', maxWidth: '560px' }}>
                We continuously improve through your insights. Take 2 minutes to help us serve you better.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Rating Stats */}
        <section style={{ background: 'var(--bg-color-alt)', padding: '2.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="feedback-overview-row">
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--primary-color)', lineHeight: 1 }}>4.9</h2>
                <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', margin: '0.5rem 0' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="#FFD700" color="#FFD700" />)}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Based on 1,240+ reviews</p>
              </div>
              <div className="feedback-bar-chart">
                {[[5, 90], [4, 7], [3, 2], [2, 0.5], [1, 0.5]].map(([stars, pct]) => (
                  <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', width: '8px' }}>{stars}</span>
                    <Star size={13} fill="#FFD700" color="#FFD700" />
                    <div style={{ flex: 1, height: '8px', background: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: '#FFD700', borderRadius: '4px' }} />
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', width: '35px' }}>{pct}%</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[{ label: 'Would Recommend', pct: '98%' }, { label: 'Satisfied with Care', pct: '99%' }, { label: 'Repeat Patients', pct: '85%' }].map((s, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{s.label}</span>
                    <span style={{ color: '#4CAF50', fontWeight: 700 }}>{s.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="section">
          <div className="container" style={{ maxWidth: '780px' }}>
            <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle">Rate Your Experience</span>
              <h2>Leave a Review</h2>
            </motion.div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="form-success-card glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                  <Heart size={60} fill="#cc0000" color="#cc0000" />
                  <h2 style={{ color: 'var(--text-primary)', margin: '1.5rem 0 0.75rem' }}>Thank You, {form.name || 'Patient'}!</h2>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
                    Your feedback has been received. It truly helps us continue improving and delivering the best possible dental care.
                  </p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another Review</button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="feedback-form glass-card" onSubmit={handleSubmit}>

                  {/* Star Ratings */}
                  <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Rate Each Aspect</h3>
                  <div className="star-ratings-grid">
                    {categories.map(cat => (
                      <StarRating
                        key={cat.key}
                        label={cat.label}
                        value={ratings[cat.key]}
                        onChange={val => setRatings(r => ({ ...r, [cat.key]: val }))}
                      />
                    ))}
                  </div>

                  {/* Overall indicator */}
                  {Object.values(ratings).some(v => v > 0) && (
                    <div className="avg-rating-display">
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Average Score:</span>
                      <span style={{ color: '#FFD700', fontWeight: 800, fontSize: '1.5rem' }}>{avgRating.toFixed(1)}</span>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill={s <= Math.round(avgRating) ? '#FFD700' : 'transparent'} color={s <= Math.round(avgRating) ? '#FFD700' : '#ccc'} />)}
                      </div>
                    </div>
                  )}

                  {/* Recommend */}
                  <div style={{ margin: '2rem 0' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Would you recommend us to a friend or family?</h4>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {['Yes, definitely!', 'Maybe', 'No'].map(opt => (
                        <button
                          type="button" key={opt}
                          onClick={() => setRecommend(opt)}
                          className={`recommend-btn ${recommend === opt ? 'active' : ''}`}
                        >{opt}</button>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input className="form-input" type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Treatment Received</label>
                      <input className="form-input" type="text" value={form.treatment} onChange={e => setForm(f => ({ ...f, treatment: e.target.value }))} placeholder="e.g. Dental Implants" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email (optional — for follow-up)</label>
                    <input className="form-input" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Comments *</label>
                    <textarea
                      className="form-input form-textarea"
                      value={form.comments}
                      onChange={e => setForm(f => ({ ...f, comments: e.target.value }))}
                      placeholder="Tell us about your experience — what we did well, and how we can improve..."
                      rows={5}
                      required
                    />
                  </div>
                  <button className="btn btn-primary w-full" type="submit" style={{ fontSize: '1.05rem' }}>
                    <Send size={18} /> Submit Review
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Recent Reviews */}
        <section className="section section-alt">
          <div className="container">
            <motion.div className="section-title" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-subtitle">Latest Feedback</span>
              <h2>What Patients Recently Said</h2>
            </motion.div>
            <div className="testi-grid">
              {recentFeedback.map((r, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <div className="testi-review-card glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        {Array(r.rating).fill(0).map((_, j) => <Star key={j} size={15} fill="#FFD700" color="#FFD700" />)}
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{r.date}</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: '1rem' }}>"{r.text}"</p>
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                      <p style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{r.name}</p>
                      <p style={{ color: 'var(--primary-color)', fontSize: '0.8rem' }}>{r.treatment}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Feedback;
