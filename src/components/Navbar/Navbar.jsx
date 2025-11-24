import React from "react";
import styles from "./styles.module.css";
import { MotionDiv } from "../motionComponents/motionComponents";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";
import logoLight from "./logo1.png"; 
import logoDark from "./logo.png"; 

function Navbar() {
  const { theme, isDark } = useTheme();
  const logo = isDark ? logoDark : logoLight;

  const handleGetStarted = () => {
    window.location.href = "https://samardhya.com/login";
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: theme.colors.background,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <MotionDiv className={styles.navbar}>
        <img src={logo} alt="VECTOR.Edu Logo" className={styles.logo} />

        {/* --- Right side controls --- */}
        <div className={styles.controls}>
          <button 
            className={styles.getStartedButton}
            onClick={handleGetStarted}
          >
            Get Started
          </button>

          <ThemeToggle />
        </div>
      </MotionDiv>
    </div>
  );
}

export default Navbar;
