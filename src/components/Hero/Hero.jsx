import React from "react";
import styles from "./styles.module.css";
import Lottie from "lottie-react";
import heroAnimation from "./gif1.json";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

function Hero({ onContactClick, onLearnMoreClick }) {
  const { theme } = useTheme();

  return (
    <section
      className={styles.container}
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Background shapes */}
      <div className={styles.bgShape1}></div>
      <div className={styles.bgShape2}></div>

      <div className={styles.contentWrapper}>
        {/* LEFT SIDE TEXT */}
        <motion.div
          className={styles.textSection}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* MAIN HEADING */}
          <h1
            className={styles.heroMain}
            style={{ color: theme.colors.text }}
          >
            Build <span className={styles.violetText}>Real</span>-World Skills.{" "}
            Work on <span className={styles.violetText}>Real</span> Projects.{" "}
            Get <span className={styles.violetText}>Real</span> Industry Ready.
          </h1>

          {/* SUBHEADING */}
          <motion.p
            className={styles.subHeading}
            style={{ color: theme.colors.textSecondary }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Samardhya connects students with real-time industry projects
            through structured online internships. Gain hands-on experience,
            mentorship, and certification that strengthens your career profile.
          </motion.p>

          {/* BUTTONS */}
          <div className={styles.buttonGroup}>
            <button
              className={styles.btnPrimary}
              onClick={onLearnMoreClick}
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.textInverse,
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
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE GIF */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Lottie animationData={heroAnimation} loop className={styles.heroImage} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;