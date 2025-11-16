import React from 'react';
import styles from './styles.module.css';
import Lottie from 'lottie-react';
import heroAnimation from './gif1.json';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const popup = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Hero({ onContactClick, onLearnMoreClick }) {
  const { theme } = useTheme();

  return (
    <section 
      className={styles.container}
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      {/* Animate text section */}
      <motion.div 
        className={styles.textSection}
        variants={popup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 
          className={styles.heading}
          style={{ color: theme.colors.text }}
        >
          Transform Your Career <br />with Real-World <br />Corporate Experience
        </h2>
        <p 
          className={styles.subText}
          style={{ color: theme.colors.textSecondary }}
        >
          AI-driven internships &amp; capstone projects <br />
          in simulated MNC environments.
        </p>

        <div className={styles.buttonGroup}>
          <button 
            className={styles.btnPrimary} 
            onClick={onLearnMoreClick}
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.textInverse,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primaryDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primary;
            }}
          >
            Learn More
          </button>
          <button 
            className={styles.btnOutline} 
            onClick={onContactClick}
            style={{
              color: theme.colors.primary,
              borderColor: theme.colors.border,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`;
              e.currentTarget.style.borderColor = theme.colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = theme.colors.border;
            }}
          >
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
