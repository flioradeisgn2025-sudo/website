import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "Dr. Varun placed 3 implants and the results are absolutely life-changing. You cannot tell they are not real teeth. The whole process was far less painful than I feared. The team at Acharya Dental is truly exceptional.",
        name: "Priya Sharma",
        role: "Patient — Dental Implants, Bangalore"
    },
    {
        text: "Dr. Vijailakshmi is a true artist. She rebuilt my entire smile after years of neglect. Her patience, attention to detail, and genuine care for my wellbeing made all the difference. I get compliments on my smile every single day now.",
        name: "Ananya Reddy",
        role: "Patient — Full Mouth Rehabilitation, Hyderabad"
    },
    {
        text: "I needed gum treatment and was terrified. The laser gum procedure at Acharya Dental was completely painless — no cuts, no stitches. I was back to work the same evening! Absolutely incredible experience.",
        name: "Mohammed Ashraf",
        role: "Patient — Laser Dentistry, Chennai"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    const nextTestimonial = () => {
        setDirection(1);
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    return (
        <section id="testimonials" className="section section-alt testimonials-section">
            <div className="container">

                <div className="testimonials-wrapper">
                    <motion.div
                        className="testimonials-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-subtitle">Real Patient Stories</span>
                        <h2>What Our Patients Say About Us</h2>
                        <div className="testimonial-controls">
                            <button onClick={prevTestimonial} className="control-btn"><ChevronLeft /></button>
                            <button onClick={nextTestimonial} className="control-btn"><ChevronRight /></button>
                        </div>
                    </motion.div>

                    <div className="testimonial-card-container" style={{ position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={current}
                                className="testimonial-card glass-card"
                                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <Quote size={40} className="quote-icon" />
                                <p className="testimonial-text">
                                    "{testimonials[current].text}"
                                </p>
                                <div className="testimonial-author">
                                    <h4>{testimonials[current].name}</h4>
                                    <span>{testimonials[current].role}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
