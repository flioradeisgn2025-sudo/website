import React from 'react';
import { Stethoscope, Brain, Baby, Eye, Activity, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Heart size={32} />,
        title: 'Cardiology',
        description: 'Expert care for your heart with state-of-the-art diagnostic and treatment facilities.'
    },
    {
        icon: <Brain size={32} />,
        title: 'Neurology',
        description: 'Advanced neurological treatments for complex brain and nervous system disorders.'
    },
    {
        icon: <Baby size={32} />,
        title: 'Pediatrics',
        description: 'Compassionate and comprehensive healthcare for infants, children, and adolescents.'
    },
    {
        icon: <Eye size={32} />,
        title: 'Ophthalmology',
        description: 'Precision eye care from routine checkups to advanced surgical procedures.'
    },
    {
        icon: <Activity size={32} />,
        title: 'Emergency Care',
        description: '24/7 world-class emergency medical services equipped for critical situations.'
    },
    {
        icon: <Stethoscope size={32} />,
        title: 'General Surgery',
        description: 'Minimally invasive and general surgical solutions by experienced surgeons.'
    }
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
                            <a href="#" className="service-link">
                                Learn more <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
