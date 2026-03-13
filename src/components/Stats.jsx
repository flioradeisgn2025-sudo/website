import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <section className="section stats-section">
            <div className="stats-overlay"></div>
            <div className="container stats-container relative z-10">

                <motion.div
                    className="stats-text glass-card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Why Choose Us</span>
                    <h2>Dedicated to Excellence in Healthcare.</h2>
                    <p>
                        For over two decades, NovaCare has been at the forefront of medical
                        innovation, ensuring every patient receives world-class treatment in
                        a compassionate environment.
                    </p>
                    <ul className="stats-list">
                        <li>✓ Advanced Medical Technology</li>
                        <li>✓ Expert Team of Specialists</li>
                        <li>✓ 24/7 Emergency Services</li>
                        <li>✓ Affordable Care Options</li>
                    </ul>
                </motion.div>

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
                        { metric: "25+", text: "Years of Experience" },
                        { metric: "150+", text: "Medical Specialists" },
                        { metric: "50k+", text: "Happy Patients" },
                        { metric: "12+", text: "Awards Won" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-box"
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}
                        >
                            <h3>{stat.metric}</h3>
                            <p>{stat.text}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Stats;
