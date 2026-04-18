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
                    <h2>Dedicated to Excellence in Modern Dentistry.</h2>
                    <p>
                        For over a decade, Smile Bright Dental has been at the
                        forefront of dental innovation, delivering painless, precision care and
                        life-changing smiles with a gentle touch.
                    </p>
                    <div className="stats-list">
                        {[
                            "Advanced Digital Dental Technology",
                            "Specialist Endodontic & Implant Care",
                            "Over 15,000 Successful Procedures",
                            "Comfort-First Patient Experience"
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
                        <h3>Trusted by Thousands of Patients</h3>
                        <p>Our numbers reflect years of dedication, precision, and patient-first dental care delivered with compassion across Chennai.</p>
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
