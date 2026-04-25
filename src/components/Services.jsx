import React from 'react';
import { Smile, AlignCenter, Zap, SunMedium, ShieldCheck, Baby, ArrowRight, Activity, Heart, Sparkles, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Sparkles size={28} />,
        title: 'Teeth Replacement',
        description: 'Single-tooth implants, bridges, and full-arch restorations — placed under guided 3D imaging so they sit and chew like the originals.',
        slug: 'teeth-replacement',
    },
    {
        icon: <AlignCenter size={28} />,
        title: 'Teeth Alignment',
        description: 'Invisalign clear aligners or traditional braces. We talk through which suits your bite, your routine, and your budget before anything is fitted.',
        slug: 'teeth-alignment',
    },
    {
        icon: <Zap size={28} />,
        title: 'Laser Dentistry',
        description: 'Lasers for gum reshaping, certain cavity work, and soft-tissue procedures — usually without injections or stitches.',
        slug: 'laser-dentistry',
    },
    {
        icon: <SunMedium size={28} />,
        title: 'Teeth Whitening',
        description: 'Eight to ten shades whiter in a single chair-side session, without the sensitivity that often comes with strip kits.',
        slug: 'teeth-whitening',
    },
    {
        icon: <ShieldCheck size={28} />,
        title: 'Preventive Dentistry',
        description: 'Six-monthly check-ups, professional cleaning, and a home-care plan built around how you actually brush and floss.',
        slug: 'preventive-dentistry',
    },
    {
        icon: <Activity size={28} />,
        title: 'Pain Management',
        description: 'Topical numbing, computer-controlled injections, and sedation when you need it — for anyone who finds the chair stressful.',
        slug: 'pain-management',
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">

                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-subtitle">What we do</span>
                        <h2 className="section-title">Treatments we offer</h2>
                    </div>
                    <Link to="/services/teeth-cleaning" className="btn btn-secondary desktop-nav">
                        Explore All Services
                        <ArrowRight size={18} />
                    </Link>
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
                            transition: { staggerChildren: 0.1 }
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
                                Discover More <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mobile-nav-actions" style={{ marginTop: '3rem', textAlign: 'center' }}>
                     <Link to="/services/teeth-cleaning" className="btn btn-secondary w-full" style={{ display: 'inline-flex' }}>
                        View All Services
                        <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Services;
