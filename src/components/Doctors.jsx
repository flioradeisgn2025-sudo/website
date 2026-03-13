import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const doctors = [
    {
        name: 'Dr. Sarah Jenkins',
        specialty: 'Chief Cardiologist',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Dr. Michael Chen',
        specialty: 'Head of Neurology',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Dr. Emily Carter',
        specialty: 'Pediatrics Specialist',
        image: 'https://images.unsplash.com/photo-1594824432243-7dbcbba6c63e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Dr. James Wilson',
        specialty: 'General Surgeon',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
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
                    <span className="section-subtitle">Our Specialists</span>
                    <h2 className="section-title">Meet Our Expert Medical Team</h2>
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
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Doctors;
