import React from "react";
import styles from "./styles.module.css";
import { MotionDiv } from "../motionComponents/motionComponents";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";
import logoLight from "./logo1.png"; // Logo for light mode
import logoDark from "./logo.png"; // Logo for dark mode

function Navbar() {
  const { theme, isDark } = useTheme();
  const logo = isDark ? logoDark : logoLight;

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
        <ThemeToggle />
      </MotionDiv>
    </div>
  );
}

export default Navbar;
