import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "Dr. Ayesha walked me through every step before she started. The treatment was nothing close to as painful as I'd built it up in my head, and I actually like my smile now — first time in years I can say that.",
        name: "Deepa Sundaram",
        role: "Patient",
    },
    {
        text: "I'd put off seeing a dentist for almost a decade. Dr. Ayesha didn't lecture me — she just got on with it. Took several visits to rebuild things properly, and the difference is hard to put into words. People keep asking what I've done.",
        name: "Meenakshi Krishnan",
        role: "Patient",
    },
    {
        text: "I came in dreading the treatment. They used a laser instead of a scalpel, no stitches, and I was eating dinner that evening like nothing had happened. I keep telling my friends about this place.",
        name: "Karthik Velu",
        role: "Patient",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const prev = () => {
        setDirection(-1);
        setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    };
    const next = () => {
        setDirection(1);
        setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    };

    useEffect(() => {
        const id = setInterval(() => {
            setDirection(1);
            setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
        }, 3000);
        return () => clearInterval(id);
    }, []);

    const t = testimonials[current];

    return (
        <section id="testimonials" className="section section-alt testimonials-block">
            <div className="container">
                <motion.div
                    className="testimonials-block-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Testimonial</span>
                    <h2>What our patients say.</h2>
                </motion.div>

                <div className="testimonials-block-grid testimonials-block-grid--no-photo">
                    <button className="testimonial-side-arrow testimonial-side-arrow--prev" onClick={prev} aria-label="Previous"><ChevronLeft size={20} /></button>
                    <div className="testimonial-quote-side testimonial-quote-card">
                        <Quote className="testimonial-quote-icon" size={48} />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`quote-${current}`}
                                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <p className="testimonial-quote-text">"{t.text}"</p>
                                <div className="testimonial-quote-author">
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <button className="testimonial-side-arrow testimonial-side-arrow--next" onClick={next} aria-label="Next"><ChevronRight size={20} /></button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
