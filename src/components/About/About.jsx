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
          <span className={styles.floatWord}>Samardhya</span> is simple
        </h2>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          You show up with your broken life-GPS
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          We fix it,
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          reboot your brain,
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          slap clarity into you,
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          and send you back into society.
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          Looking like you actually know things.
        </p>
      </div>
      <div className={styles.animationSection}>
        <DevOpsTools />
      </div>
    </div>
  )
}

export default About
