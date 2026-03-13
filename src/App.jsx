import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// About Us Pages
import DrVijailakshmi from './pages/DrVijailakshmi';
import DrVarun from './pages/DrVarun';
import Blog from './pages/Blog';
import Media from './pages/Media';
import Awards from './pages/Awards';

// Services Page (shared template)
import ServicePage from './pages/ServicePage';

// Other Pages
import TestimonialsPage from './pages/TestimonialsPage';
import InternationalPatients from './pages/InternationalPatients';
import TakeATour from './pages/TakeATour';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Doctors />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/website/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* About Us */}
        <Route path="/about/dr-vijailakshmi" element={<DrVijailakshmi />} />
        <Route path="/about/dr-varun" element={<DrVarun />} />
        <Route path="/about/blog" element={<Blog />} />
        <Route path="/about/media" element={<Media />} />
        <Route path="/about/awards" element={<Awards />} />
        {/* Services — single dynamic route for all 11 services */}
        <Route path="/services/:slug" element={<ServicePage />} />
        {/* Other pages */}
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/international-patients" element={<InternationalPatients />} />
        <Route path="/take-a-tour" element={<TakeATour />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
