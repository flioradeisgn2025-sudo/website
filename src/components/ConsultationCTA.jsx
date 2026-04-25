import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const ConsultationCTA = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <section className="section consultation-cta-section">
            <div className="container">
                <motion.div
                    className="consultation-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="consultation-text">
                        <h2>Get a free consultation</h2>
                        <p>Give us a call. We're here to answer your questions, six days a week.</p>
                        <a href="tel:+919444408087" className="consultation-phone">
                            <Phone size={22} /> +91 94444 08087
                        </a>
                    </div>
                    <div className="consultation-image">
                        <img src={`${baseUrl}dr_ponni_valavan.png`} alt="Dr. Ponni Valavan" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConsultationCTA;
