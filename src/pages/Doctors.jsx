import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';


const doctors = [
  {
    id: 1,
    name: 'Dr. Ayesha Subhan',
    specialty: 'BDS, MBA, FDS (Aesthetic Dentistry)',
    designation: 'Lead Dental Surgeon',
    image: 'dr_ayesha_subhan.png',
  },
  {
    id: 2,
    name: 'Dr. Ponni Valavan',
    specialty: 'MDS (Oral & Maxillofacial Surgery)',
    designation: 'Specialist Surgeon',
    image: 'dr_ponni_valavan.png',
  },
  {
    id: 3,
    name: 'Dr. Sastami Davidraja',
    specialty: 'BDS, MDS (Endodontist)',
    designation: 'Root Canal Specialist',
    image: 'dr-sasha.png',
  },
];

const Doctors = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="doctors-page-main">
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               style={{ textAlign: 'center' }}
            >
              <span className="section-subtitle light">Our Team</span>
              <h1 className="section-title light">The people who'll be looking after you</h1>
              <p className="hero-description light" style={{ margin: '0 auto' }}>
                A small team of specialists — implant, surgical, and endodontic — who together
                handle most of what walks through our doors. You'll usually see the same
                doctor from your first consultation through to follow-up.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="section">
          <div className="container">
            <motion.div 
              className="doctors-grid-premium"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              {doctors.map((doctor) => (
                <motion.div 
                  key={doctor.id} 
                  className="doctor-card-premium"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                >
                  <div className="doctor-image-container">
                    {doctor.image ? (
                      <img 
                        src={`${import.meta.env.BASE_URL}${doctor.image}`} 
                        alt={doctor.name} 
                        className="doctor-image-img"
                      />
                    ) : (
                      <div className="doctor-image-placeholder">🩺</div>
                    )}
                    <div className="doctor-image-overlay"></div>
                  </div>

                  <div className="doctor-info-premium">
                    <span className="doctor-designation">{doctor.designation}</span>
                    <h2 className="doctor-name">{doctor.name}</h2>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                    <div className="doctor-card-footer">
                        <span className="doctor-status">Available for Consultation</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


      </main>
      <Footer />
    </motion.div>
  );
};

export default Doctors;
