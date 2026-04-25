import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Stats = () => {
    return (
        <section className="section stats-section">
            <div className="container stats-container relative z-10">

                <motion.div
                    className="stats-text"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="section-subtitle">A Tradition of Care</span>
                    <h2>A decade of careful, modern dentistry in Chennai.</h2>
                    <p>
                        We opened as a small practice and grew into a multi-specialty clinic, but
                        the way we work hasn't really changed: take the time, explain what's
                        happening, and treat each mouth like it's the only one we're seeing today.
                    </p>
                    <div className="stats-list">
                        {[
                            "CBCT scans, intra-oral cameras, and laser tools we actually use",
                            "Specialist root canal and implant care under one roof",
                            "More than 15,000 procedures behind us",
                            "Sedation and topical numbing for anyone who needs it"
                        ].map((item, i) => (
                            <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                            >
                                <CheckCircle2 size={20} className="text-secondary" />
                                {item}
                            </motion.li>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="stats-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="stats-card-header">
                        <span className="section-subtitle">Our Impact</span>
                        <h3>A decade of work, in numbers</h3>
                        <p>What we've quietly built up over the years — patients we've seen, treatments we've completed, and trust we've worked hard to earn.</p>
                    </div>
                    
                    <motion.div
                        className="stats-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                    >
                        {[
                            { metric: "10+", text: "Years of Excellence" },
                            { metric: "2,000+", text: "Implants Placed" },
                            { metric: "15k+", text: "Happy Patients" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-box"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                }}
                            >
                                <h3>{stat.metric}</h3>
                                <p>{stat.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Stats;
