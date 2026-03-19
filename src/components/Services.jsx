import React from 'react';
import { Smile, AlignCenter, Zap, SunMedium, ShieldCheck, Baby, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Smile size={32} />,
        title: 'Teeth Replacement',
        description: 'Restore your smile with premium dental implants and full-arch restorations that look, feel, and function like natural teeth.',
        slug: 'teeth-replacement',
    },
    {
        icon: <AlignCenter size={32} />,
        title: 'Teeth Alignment',
        description: 'Straighten your smile comfortably with Invisalign clear aligners or traditional braces, tailored to your lifestyle.',
        slug: 'teeth-alignment',
    },
    {
        icon: <Zap size={32} />,
        title: 'Laser Dentistry',
        description: 'Minimally invasive laser treatments for gum reshaping, cavity care, and more — with near-zero discomfort and faster healing.',
        slug: 'laser-dentistry',
    },
    {
        icon: <SunMedium size={32} />,
        title: 'Teeth Whitening',
        description: 'Achieve up to 8–10 shades whiter teeth in a single professional in-chair whitening session.',
        slug: 'teeth-whitening',
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Preventive Dentistry',
        description: 'Protect your smile with comprehensive check-ups, professional cleaning, fluoride treatments, and personalised care plans.',
        slug: 'preventive-dentistry',
    },
    {
        icon: <Baby size={32} />,
        title: 'Paediatric Dentistry',
        description: 'Gentle, fun, and fear-free dental care for children of all ages in our purpose-designed child-friendly environment.',
        slug: 'paediatric-dentistry',
    },
];

const Services = () => {
    return (
        <section id="services" className="section section-alt services-section">
            <div className="container">

                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-subtitle">Our Departments</span>
                        <h2 className="section-title">Comprehensive Medical Services</h2>
                    </div>
                    <button className="btn btn-secondary view-all-btn">
                        View All Services
                        <ArrowRight size={18} />
                    </button>
                </motion.div>

                <motion.div
                    className="services-grid"
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
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                        >
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link to={`/services/${service.slug}`} className="service-link">
                                Learn more <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
