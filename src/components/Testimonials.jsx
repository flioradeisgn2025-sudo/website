import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "The care I received at NovaCare was exceptional. The cardiology team was incredibly proactive, and the facilities are world-class. I cannot thank the staff enough for their dedication and compassion.",
        name: "Robert Fox",
        role: "Patient (Cardiology)"
    },
    {
        text: "My son's treatment experience was smooth and stress-free. The pediatric ward is beautifully designed, and Dr. Carter made sure we understood every step of the process. Highly recommended.",
        name: "Jane Smith",
        role: "Patient Parent (Pediatrics)"
    },
    {
        text: "From admission to discharge, the professionalism of the NovaCare team is unmatched. I felt safe and cared for entirely during my surgery.",
        name: "Eleanor Pena",
        role: "Patient (Surgery)"
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
                        <span className="section-subtitle">Patient Stories</span>
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
