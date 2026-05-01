import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// About Us Pages
import DoctorProfile from './pages/DoctorProfile';
import DoctorsPage from './pages/Doctors';
import DoctorsSection from './components/Doctors';
import BeforeAfter from './components/BeforeAfter';
import SmileBrightDental from './pages/SmileBrightDental';
import Media from './pages/Media';

// Services Page (shared template)
import ServicePage from './pages/ServicePage';

// Other Pages
import TestimonialsPage from './pages/TestimonialsPage';
import TakeATour from './pages/TakeATour';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';

import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <DoctorsSection />
        <BeforeAfter />
        <ContactSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  // Dynamic Page Titles for SEO & UX
  useEffect(() => {
    const titleMap = {
      '/': 'Smile Bright Dental | Specialist Dental Care in Chennai',
      '/about/doctors': 'Our Specialists | Smile Bright Dental',
      '/about/smile-bright-dental': 'Clinical Excellence | Smile Bright Dental',
      '/about/media': 'Media & Gallery | Smile Bright Dental',
      '/about/dr-sasha-helene': 'Dr. Sastami Davidraja | Smile Bright Dental',
      '/testimonials': 'Patient Stories | Smile Bright Dental',
      '/take-a-tour': 'Virtual Tour | Smile Bright Dental',
      '/contact': 'Contact Us | Smile Bright Dental',
      '/contact/feedback': 'Patient Feedback | Smile Bright Dental'
    };

    // Handle dynamic service routes
    if (location.pathname.startsWith('/services/')) {
      const serviceName = location.pathname.split('/').pop().replace(/-/g, ' ');
      const formattedName = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
      document.title = `${formattedName} | Smile Bright Dental`;
    } else {
      document.title = titleMap[location.pathname] || 'Smile Bright Dental';
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        {/* About Us */}
        <Route path="/about/doctors" element={<DoctorsPage />} />
        <Route path="/about/dr-sasha-helene" element={<DoctorProfile />} />
        <Route path="/about/smile-bright-dental" element={<SmileBrightDental />} />
        <Route path="/about/media" element={<Media />} />
        {/* Services — single dynamic route for all 11 services */}
        <Route path="/services/:slug" element={<ServicePage />} />
        {/* Other pages */}
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/take-a-tour" element={<TakeATour />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact/feedback" element={<Feedback />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router basename="/website/">
      <ScrollToTop />
      <BackToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
