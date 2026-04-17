import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const doctors = [
  {
    id: 1,
    name: 'Dr Sasha Helene',
    specialty: 'BDS, MDS (Endodontist)',
    image: 'dr-sasha.png',
    bio: '',
  },
  {
    id: 2,
    name: 'Dr Ponni Valavan',
    specialty: 'MDS (OMFS)',
    image: 'dr_ponni_valavan.png',
    bio: '',
  },
  {
    id: 3,
    name: 'Dr Ayesha Subhan',
    specialty: 'BDS, MBA (Hospital Management), FDS (Aesthetic Dentistry) — Dental Surgeon',
    image: 'dr_ayesha_subhan.png',
    bio: '',
  },
];

const Doctors = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8f7ff' }}>

        {/* Hero banner */}
        <section style={{
          background: 'linear-gradient(135deg, #6a0dad 0%, #9b59b6 100%)',
          color: '#fff',
          padding: '60px 24px',
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: 0, color: '#fff' }}>
            Meet Our Doctors
          </h1>
          <p style={{ marginTop: '12px', fontSize: '1.1rem', opacity: 0.9, maxWidth: '560px', margin: '12px auto 0' }}>
            Our team of experienced specialists is dedicated to giving you the best dental care.
          </p>
        </section>

        {/* Doctor cards */}
        <section className="doctors-grid" style={{
          maxWidth: '1100px',
          margin: '60px auto',
          padding: '0 24px',
        }}>
          {doctors.map((doctor) => (
            <div key={doctor.id} style={{
              background: '#fff',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(106,13,173,0.10)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(106,13,173,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(106,13,173,0.10)';
              }}
            >
              {/* Photo area */}
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem',
                color: '#9b59b6',
              }}>
                {doctor.image
                  ? <img src={`${import.meta.env.BASE_URL}${doctor.image}`} alt={doctor.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                  : '🩺'
                }
              </div>

              {/* Info */}
              <div style={{ padding: '28px 24px' }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#2d1b69',
                }}>
                  {doctor.name}
                </h2>
                {doctor.specialty && (
                  <p style={{
                    margin: '6px 0 0',
                    color: '#7c3aed',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}>
                    {doctor.specialty}
                  </p>
                )}
                {doctor.bio && (
                  <p style={{
                    marginTop: '12px',
                    color: '#555',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}>
                    {doctor.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Doctors;
