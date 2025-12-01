import React, { useEffect, useRef } from "react";
import styles from "./WhySamardhya.module.css";

const WhySamardhya = () => {
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    // Scroll Animation for Heading
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    headingRef.current.classList.add(styles.headingVisible);
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(headingRef.current);
    }, []);

    // Scroll Animation for Cards
    useEffect(() => {
        const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.cardVisible);
                    }
                });
            },
            { threshold: 0.3 }
        );

        cardsRef.current.forEach((card) => {
            if (card) cardObserver.observe(card);
        });
    }, []);

    return (
        <section className={styles.wrapper}>
            <h1 ref={headingRef} className={styles.heading}>
                WHY SAMARDHYA –{" "}
                <span className={styles.highlight}>
                    The Brutally Honest, Unfiltered, Chaos Edition
                </span>
            </h1>

            <p className={styles.subtitle}>
                Because let’s be real… <br />
                You choosing your career based on vibes, Instagram reels, and one uncle’s
                WhatsApp forward is a threat to national security. <br />
                And we refuse to let society suffer in that way.
            </p>

            <div className={styles.points}>
                {[
                    {
                        title:
                            "1. We give you CONFIDENCE — the kind your college can’t even spell.",
                        text: `Not the ‘umm maybe I can?’ confidence. The ‘move, I got this’ confidence.
                   The type that stops you from stuttering like bad WiFi during an introduction.`,
                    },
                    {
                        title: "2. We teach SURVIVAL — not syllabus.",
                        text: `Life isn’t asking for definitions. Life is asking, ‘Why are you still broke and clueless?’ 
                   Samardhya fixes that before the universe humiliates you.`,
                    },
                    {
                        title: "3. We actually UPGRADE you.",
                        text: `College updates your attendance. We will update you. Communication? Fixed.
                   Discipline? Forced. Personality? Reinstalled. Basically, we patch your glitches.`,
                    },
                    {
                        title: "4. We let you FAIL — but in a productive way.",
                        text: `Failure here is part of your training arc. You fail. You learn. You rise.
                   No trauma, no drama — only character development.`,
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={styles.card}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>

                        {/* Background Trail Effect */}
                        <span className={styles.trail}></span>
                    </div>
                ))}
            </div>

            {/* <section className={styles.endLineSection}>
                <div className={styles.overlay}></div>

                <h2 className={styles.endLine}>
                    <span className={styles.typewriter}>
                        Choose Samardhya if you’re done being a confused side character
                        and finally want to start acting like the main villain of your own life arc.
                    </span>
                </h2>
            </section> */}

        </section>
    );
};

export default WhySamardhya;
