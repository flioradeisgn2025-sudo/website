import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const doctors = [
    {
        name: 'Dr. Sasha Helene',
        specialty: 'BDS MDS (Endodontist)',
        image: '/website/doctor_portrait.png',
        link: '/about/smile-bright-dental',
    },
];

const Doctors = () => {
    return (
        <section id="doctors" className="section doctors-section">
            <div className="container">
                <motion.div
                    className="section-header text-center w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Meet the Specialists</span>
                    <h2 className="section-title">Your Expert Dental Team</h2>
                </motion.div>

                <motion.div
                    className="doctors-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    {doctors.map((doctor, index) => (
                        <motion.div
                            className="doctor-card"
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 30 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }
                            }}
                        >
                            <div className="doctor-image-wrapper">
                                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                                <div className="doctor-socials">
                                    <a href="#"><Linkedin size={20} /></a>
                                    <a href="#"><Twitter size={20} /></a>
                                    <a href="#"><Mail size={20} /></a>
                                </div>
                            </div>
                            <div className="doctor-info">
                                <h3>{doctor.name}</h3>
                                <p>{doctor.specialty}</p>
                                <Link to={doctor.link} className="service-link" style={{ marginTop: '0.75rem' }}>
                                    View Profile →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Doctors;
