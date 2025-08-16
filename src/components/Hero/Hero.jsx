import React from 'react';
import styles from './styles.module.css';
import Lottie from 'lottie-react';
import heroAnimation from './gif1.json';
import { motion } from 'framer-motion';

const popup = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Hero({ onContactClick, onLearnMoreClick }) {
  return (
    <section className={styles.container}>
      {/* Animate text section */}
      <motion.div 
        className={styles.textSection}
        variants={popup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={styles.heading}>
          Transform Your Career <br />with Real-World <br />Corporate Experience
        </h2>
        <p className={styles.subText}>
          AI-driven internships &amp; capstone projects <br />
          in simulated MNC environments.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.btnPrimary} onClick={onLearnMoreClick}>
            Learn More
          </button>
          <button className={styles.btnOutline} onClick={onContactClick}>
            Contact us
          </button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className={styles.imageSection}
      >
        <Lottie 
          animationData={heroAnimation} 
          loop={true} 
          className={styles.heroImage} 
        />
      </motion.div>
    </section>
  );
}

export default Hero;
