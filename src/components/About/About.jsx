import React from 'react'
import styles from './styles.module.css'
// import MyPng from './pic2.png'
import { useTheme } from '../../contexts/ThemeContext';
import DevOpsTools from './DevOpsTools';

function About() {
  const { theme } = useTheme();

  return (
    <div 
      className={styles.container}
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <div className={styles.content}>
        <h2 
          className={styles.heading}
          style={{ color: theme.colors.text }}
        >
          About the <span 
            className={styles.highlight}
            style={{ color: theme.colors.primary }}
          >
            program
          </span>
        </h2>
        <p 
          className={styles.para1}
          style={{ color: theme.colors.textSecondary }}
        >
          Cutting-edge, AI-powered internship and capstone experience designed to mirror workflows at top MNC's like TCS, Accenture, AWS, Flipkart, and Infosys.
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          The program integrates real corporate tools, processes, and standards, ensuring participants gain hands-on experience that matches industry expectations.
        </p>
      </div>
      <div className={styles.animationSection}>
        <DevOpsTools />
      </div>
    </div>
  )
}

export default About
