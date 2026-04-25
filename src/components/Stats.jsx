import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { metric: '10+', text: 'Years of Excellence', sub: 'Trusted in Chennai' },
    { metric: '15K+', text: 'Happy Patients', sub: 'Highly Rated' },
    { metric: '2,000+', text: 'Implants Placed', sub: 'Specialist Approved' },
];

const Stats = () => {
    return (
        <section className="section stats-welcome">
            <div className="container">
                <motion.div
                    className="welcome-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Welcome to</span>
                    <h2>The Smile Bright Dental Clinic</h2>
                    <p>
                        A small clinic in Mannady that grew up alongside its patients —
                        looking after Chennai's smiles for more than two decades.
                    </p>
                </motion.div>

                <motion.div
                    className="welcome-stats-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            className="welcome-stat-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                            }}
                        >
                            <h3>{s.metric}</h3>
                            <p className="stat-text">{s.text}</p>
                            <span className="stat-sub">{s.sub}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
