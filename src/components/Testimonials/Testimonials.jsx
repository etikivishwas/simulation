import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "./image1.jpeg";

const testimonials = [
  {
    name: "Benerjee Reddy",
    role: "Flux Academy",
    text: "I always worried that college assignments wouldn’t help me in a real job. But here, I used the same tools that professionals use and got feedback on everything I built. The support team was super friendly and responded quickly whenever I got stuck. I now have a portfolio I can actually show to employers.",
    img: Image,
  },
  {
    name: "Hanok",
    role: "DevOps",
    text: "Before using this platform, I felt unsure about the skills I was learning in college. The simulated work environments helped me understand what employers really expect. The AI feedback was clear and helped me improve step by step. Thanks to this, I got more interviews and finally landed a great internship.",
    img: Image,
  },
  {
    name: "E Vishwas",
    role: "FullStack Developer",
    text: "I never thought I’d get real work experience before graduating. With this platform, I actually got to work on live projects, not just dummy exercises. My mentor guided me every week, and I learnt how things work in a real company. I felt nervous at first, but by the end, I could talk about my work in interviews with confidence. This helped me get my first internship!",
    img: Image,
  },
  {
    name: "Corporate HR Testimonial",
    role: "",
    text: "Our onboarding program became much smoother after we started using this training platform. New hires complete role-specific modules before starting, so they require less supervision. Tracking their progress is easy, and the AI suggests where extra help is needed. It’s saved us time and improved employee readiness.",
    img: Image,
  },
  {
    name: "Faculty Testimonial",
    role: "",
    text: "We wanted a digital internship solution that aligns with industry standards—and this platform delivered. The integration of AI assessments and containerized labs meant our students had a consistent learning experience. The earned certifications have opened doors for many students in the job market.",
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
