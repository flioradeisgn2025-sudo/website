import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "Dr. Ayesha walked me through every step before she started. The treatment was nothing close to as painful as I'd built it up in my head, and I actually like my smile now — first time in years I can say that.",
        name: "Deepa Sundaram",
        role: "Patient"
    },
    {
        text: "I'd put off seeing a dentist for almost a decade. Dr. Ayesha didn't lecture me — she just got on with it. Took several visits to rebuild things properly, and the difference is hard to put into words. People keep asking what I've done.",
        name: "Meenakshi Krishnan",
        role: "Patient"
    },
    {
        text: "I came in dreading the treatment. They used a laser instead of a scalpel, no stitches, and I was eating dinner that evening like nothing had happened. I keep telling my friends about this place.",
        name: "Karthik Velu",
        role: "Patient"
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
                        <h2>In their own words.</h2>
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
