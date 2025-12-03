import React, { useEffect, useRef } from "react";
import styles from "./WhySamardhya.module.css";
import { useTheme } from "../../contexts/ThemeContext";

const WhySamardhya = () => {
    const headingRef = useRef(null);
    const cardsRef = useRef([]);
    const { isDark } = useTheme();

    const cards = [
        {
            title: "1. We give you CONFIDENCE — the kind your college can’t even spell.",
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
    ];

    // Scroll animation for heading
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

    // Scroll animation for cards
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
        <section
            className={styles.wrapper}
            style={{ color: isDark ? "#fff" : "#000" }}
        >
            <h1
                ref={headingRef}
                className={styles.heading}
                style={{ color: isDark ? "#fff" : "#000" }}
            >
                WHY SAMARDHYA –{" "}
                <span
                    className={styles.highlight}
                    style={{ color: isDark ? "#8b5cf6" : "#6b21a8" }}
                >
                    The Brutally Honest, Unfiltered, Chaos Edition
                </span>
            </h1>

            <p
                className={styles.subtitle}
                style={{ color: isDark ? "#ddd" : "#333" }}
            >
                Because let’s be real… <br />
                You choosing your career based on vibes, Instagram reels, and
                one uncle’s WhatsApp forward is a threat to national security.
                <br />
                And we refuse to let society suffer in that way.
            </p>

            <div className={styles.points}>
                {cards.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={styles.card}
                        style={{
                            color: isDark ? "#fff" : "#000",
                            background: isDark
                                ? "rgba(255, 255, 255, 0.07)"
                                : "rgba(0, 0, 0, 0.05)",
                            border: isDark
                                ? "1px solid rgba(255, 255, 255, 0.16)"
                                : "1px solid rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <h2 style={{ color: isDark ? "#fff" : "#000" }}>
                            {item.title}
                        </h2>
                        <p style={{ color: isDark ? "#ddd" : "#333" }}>
                            {item.text}
                        </p>

                        <span className={styles.trail}></span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhySamardhya;
