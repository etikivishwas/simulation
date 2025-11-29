import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Lottie from "lottie-react";
import heroAnimation from "./gif1.json";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

// Typewriter hook (returns also "done" state)
const useTypewriter = (text, speed = 40) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
};

function Hero({ onContactClick, onLearnMoreClick }) {
  const { theme } = useTheme();

  const line1 = useTypewriter("You aren't lost ", 30).displayed;
  const line2 = useTypewriter("You're just misguided", 30).displayed;

  const extraText =
    "Confused, overwhelmed, and pretending life came with a user manual. Everyone looks sorted until you hear their internal screaming. You? At least you're honest about the chaos. Respect.";

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
          <h2 className={styles.heroMain} style={{ color: theme.colors.text }}>
  {/* LINE 1 FIXED (no duplicate "lost") */}
  {(() => {
    const full = line1;
    const beforeLost = full.split("lost")[0];
    const lostWord = full.includes("lost") ? "lost" : "";
    const afterLost = full.split("lost")[1] || "";

    return (
      <>
        {beforeLost}
        <motion.span
          className={styles.shakeWord}
          animate={{ x: [0, -3, 3, -2, 2, 0] }}
          transition={{ duration: 0.4 }}
        >
          {lostWord}
        </motion.span>
        {afterLost}
      </>
    );
  })()}

  {/* LINE 2 */}
  <br />
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    style={{ display: "inline-block" }}
  >
    {line2}
  </motion.span>
</h2>



          {/* FIRST TYPEWRITER PARAGRAPH */}

          {/* SECOND PARAGRAPH — SHOWN AFTER TYPEWRITER IS DONE */}
          <motion.p
            className={styles.extraParagraph}
            style={{ color: theme.colors.textSecondary }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {extraText}
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
