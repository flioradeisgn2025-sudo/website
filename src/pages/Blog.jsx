import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, Search } from 'lucide-react';
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

const categories = ['All', 'Oral Health', 'Cosmetic Dentistry', 'Implants', 'Pediatric', 'Nutrition', 'Technology'];

const posts = [
    {
        id: 1,
        title: '10 Signs You Need to See a Dentist Immediately',
        excerpt: 'Some symptoms can wait until your next check-up. Some really cannot. Here\'s how to tell the difference before a small problem becomes an expensive one.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffea99e7b71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'March 5, 2026',
        readTime: '5 min read',
        category: 'Oral Health',
        featured: true,
    },
    {
        id: 2,
        title: 'Dental Implants vs Dentures: Which Is Right for You?',
        excerpt: 'Both can replace missing teeth — but they\'re different propositions on cost, comfort, and how long they last. A straight comparison without the marketing.',
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Feb 28, 2026',
        readTime: '7 min read',
        category: 'Implants',
        featured: false,
    },
    {
        id: 3,
        title: 'The Complete Guide to Teeth Whitening in 2026',
        excerpt: 'Laser, LED, take-home trays, supermarket strips — what each one actually does, what it costs, and where the trade-offs sit.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Feb 18, 2026',
        readTime: '6 min read',
        category: 'Cosmetic Dentistry',
        featured: false,
    },
    {
        id: 4,
        title: 'Why Your Child\'s First Dental Visit Matters',
        excerpt: 'How a child\'s first appointment goes shapes whether they grow up dreading the dentist or not. A short guide for parents.',
        image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Feb 10, 2026',
        readTime: '4 min read',
        category: 'Pediatric',
        featured: false,
    },
    {
        id: 5,
        title: 'Foods That Naturally Strengthen Your Enamel',
        excerpt: 'What you eat does more for your teeth than most toothpastes. The everyday foods that actually help — and a few that don\'t, despite what\'s on the label.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Jan 30, 2026',
        readTime: '5 min read',
        category: 'Nutrition',
        featured: false,
    },
    {
        id: 6,
        title: 'How Laser Dentistry Is Changing Patient Care',
        excerpt: 'Where the laser earns its keep, where it doesn\'t, and what this means for the next time you need work done — from someone who uses one daily.',
        image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Jan 22, 2026',
        readTime: '6 min read',
        category: 'Technology',
        featured: false,
    },
];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = posts.filter(p => {
        const matchCat = activeCategory === 'All' || p.category === activeCategory;
        const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    const featured = filtered.find(p => p.featured);
    const rest = filtered.filter(p => !p.featured);

    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>

                {/* Page Hero */}
                <section className="page-hero-banner">
                    <div className="page-hero-overlay" />
                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <span className="section-subtitle light">Knowledge Hub</span>
                            <h1 className="section-title light" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>The Smile Bright blog</h1>
                            <p className="hero-description light" style={{ margin: '0.75rem auto 0', maxWidth: '550px' }}>
                                Plain-language pieces from our team — what to do, what not to worry about, and the things patients ask us most often.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">

                        {/* Search & Filter */}
                        <div className="blog-controls">
                            <div className="blog-search-wrapper">
                                <Search size={18} color="var(--text-secondary)" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="blog-search-input"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="category-filters">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Featured Post */}
                        {featured && (
                            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="featured-post glass-card">
                                    <div className="featured-post-img-wrapper">
                                        <img src={featured.image} alt={featured.title} className="featured-post-img" />
                                        <span className="featured-label">Featured</span>
                                    </div>
                                    <div className="featured-post-body">
                                        <div className="post-meta">
                                            <span className="post-cat-tag"><Tag size={12} /> {featured.category}</span>
                                            <span className="post-meta-item"><Calendar size={13} /> {featured.date}</span>
                                            <span className="post-meta-item"><Clock size={13} /> {featured.readTime}</span>
                                        </div>
                                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', margin: '1rem 0' }}>{featured.title}</h2>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{featured.excerpt}</p>
                                        <a href="#" className="btn btn-primary">
                                            Read Article <ArrowRight size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Posts Grid */}
                        <div className="blog-grid" style={{ marginTop: '3rem' }}>
                            {rest.map((post, i) => (
                                <motion.div key={post.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                    <div className="blog-card">
                                        <div className="blog-card-img-wrapper">
                                            <img src={post.image} alt={post.title} className="blog-card-img" />
                                            <span className="blog-cat-overlay">{post.category}</span>
                                        </div>
                                        <div className="blog-card-body">
                                            <div className="post-meta" style={{ marginBottom: '0.75rem' }}>
                                                <span className="post-meta-item"><Calendar size={13} /> {post.date}</span>
                                                <span className="post-meta-item"><Clock size={13} /> {post.readTime}</span>
                                            </div>
                                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{post.title}</h3>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{post.excerpt}</p>
                                            <a href="#" className="service-link">
                                                Read More <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                                <p>No articles found matching your search.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Blog;
