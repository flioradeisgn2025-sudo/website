import React from 'react';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const doctors = [
    {
        name: 'Dr Ayesha subhan',
        specialty: 'BDS ,MBA (Hospital Management),\nFDS (Aesthetic Dentistry)',
        designation: 'Dental Surgeon',
        image: 'dr_ayesha_subhan.png',
        link: '/about/smile-bright-dental',
    },
    {
        name: 'Dr. Ponni Valavan',
        specialty: 'MDS (Oral & Maxillofacial Surgery)',
        designation: 'Specialist Surgeon',
        image: 'dr_ponni_valavan.png',
        link: '/about/doctors',
    },
    {
        name: 'Dr. Sastami Davidraja',
        specialty: 'BDS, MDS (Endodontist)',
        designation: 'Root Canal Specialist',
        image: 'dr-sasha.png',
        link: '/about/doctors',
    },
];

const Doctors = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <section id="doctors" className="section doctors-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    style={{ textAlign: 'center', justifyContent: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-subtitle">Meet the Specialists</span>
                        <h2 className="section-title">The people behind the chair</h2>
                    </div>
                </motion.div>

                <motion.div
                    className="doctors-grid-premium"
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
                    {doctors.slice(0, 3).map((doctor, index) => (
                        <motion.div
                            className="doctor-card-premium"
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95, y: 30 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }
                            }}
                        >
                            <div className="doctor-image-container">
                                <img src={`${baseUrl}${doctor.image}`} alt={doctor.name} className="doctor-image-img" />
                                <div className="doctor-image-overlay">
                                    <div className="doctor-socials">
                                        <a href="#"><Linkedin size={20} /></a>
                                        <a href="#"><Twitter size={20} /></a>
                                        <a href="#"><Mail size={20} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="doctor-info-premium">
                                <span className="doctor-designation">{doctor.designation}</span>
                                <h3 className="doctor-name">{doctor.name}</h3>
                                <p className="doctor-specialty" style={{ whiteSpace: 'pre-line' }}>{doctor.specialty}</p>
                                <Link to={doctor.link} className="service-link" style={{ marginTop: '1.25rem', justifyContent: 'center' }}>
                                    View Full Profile <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link to="/about/doctors" className="btn btn-secondary glass-btn">
                        Meet All Our Doctors
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Doctors;
