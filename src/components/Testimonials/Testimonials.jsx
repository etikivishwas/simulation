import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "./passport.jpg";

const testimonials = [
  {
    name: "Ron Segall",
    role: "Flux Academy",
    text: "In this course you’ll learn exactly how to write every single piece of copy on your website in just 7 days.",
    img: Image,
  },
  {
    name: "Jane Doe",
    role: "UX Designer",
    text: "This course changed the way I think about design. The lessons are very practical and easy to implement.",
    img: Image,
  },
  {
    name: "Andrew",
    role: "UX Designer",
    text: "This course changed the way I think about design. The lessons are very practical and easy to implement.",
    img: Image,
  },
  {
    name: "Thor",
    role: "UX Designer",
    text: "This course changed the way I think about design. The lessons are very practical and easy to implement.",
    img: Image,
  },
  {
    name: "Loki",
    role: "UX Designer",
    text: "This course changed the way I think about design. The lessons are very practical and easy to implement.",
    img: Image,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, role, text, img } = testimonials[index];

  return (
    <div className={styles.testimonialContainer}>
      <h2 className={styles.testimonialHeading}>TESTIMONIALS</h2>

      <div key={index} className={`${styles.testimonialCard} ${styles.slideIn}`}>
        <div className={styles.testimonialProfile}>
          <img src={img} alt="profile" className={styles.profileImg} />
          <div className={styles.profileInfo}>
            <h3 className={styles.profileName}>{name}</h3>
            <p className={styles.profileRole}>{role}</p>
          </div>
        </div>
        <p className={styles.testimonialText}>"{text}"</p>
      </div>
    </div>
  );
};

export default Testimonial;
