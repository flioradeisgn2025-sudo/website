import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
    {
        id: 1,
        before: 'before_1.png',
        after: 'after_1.png',
        treatment: 'Comprehensive Orthodontic Treatment',
        description:
            'A case of severe crowding and misalignment, treated with a planned orthodontic course. The bite is corrected, the arch is even, and the teeth meet properly side to side.',
    },
    {
        id: 2,
        before: 'before_2.jpeg',
        after: 'after_2.jpeg',
        treatment: 'Braces Treatment',
        description:
            'Misaligned teeth and an uneven bite corrected with metal braces over a full treatment course. The arches are now level, the spacing closed, and the result stable in retention.',
    },
];

const ROTATE_INTERVAL = 5000;

const BeforeAfter = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused || cases.length <= 1) return;
        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % cases.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(id);
    }, [paused, current]);

    const c = cases[current];

    return (
        <section className="section before-after-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    style={{ textAlign: 'center', justifyContent: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="section-subtitle">Before &amp; After</span>
                        <h2 className="section-title">Real cases, real results.</h2>
                        <p
                            style={{
                                color: 'var(--text-secondary)',
                                maxWidth: '620px',
                                margin: '1rem auto 0',
                                lineHeight: 1.7,
                            }}
                        >
                            A few of our clinical cases — shared with patient permission — to show what the work looks like end to end.
                        </p>
                    </div>
                </motion.div>

                <div
                    className="before-after-slider"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={c.id}
                            className="before-after-case"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <div className="ba-images">
                                <div className="ba-image-wrap">
                                    <img
                                        src={`${baseUrl}${c.before}`}
                                        alt={`${c.treatment} — before`}
                                    />
                                    <span className="ba-tag ba-tag-before">Before</span>
                                </div>
                                <div className="ba-image-wrap">
                                    <img
                                        src={`${baseUrl}${c.after}`}
                                        alt={`${c.treatment} — after`}
                                    />
                                    <span className="ba-tag ba-tag-after">After</span>
                                </div>
                            </div>
                            <div className="ba-caption">
                                <h3>{c.treatment}</h3>
                                <p>{c.description}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="ba-dots">
                        {cases.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`ba-dot ${i === current ? 'active' : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Show case ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
