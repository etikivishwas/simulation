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
          About Us — <span 
            className={styles.highlight}
            style={{ color: theme.colors.primary }}
          >
            Raw, Human, No Filters
          </span>
        </h2>
        <p 
          className={styles.para1}
          style={{ color: theme.colors.textSecondary }}
        >
          We started Samardhya because life was NOT sorted. No one helped. No one guided.
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          Colleges teach formulas and paragraphs, but nobody teaches you how to make a career decision without crying internally.
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          We turn your 'I'm confused' and 'I'm lost' moments into 'Okay, chill, I know what to do next.'
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          No lectures. No uncle-level advice. Just real talk + real results.
        </p>
      </div>
      <div className={styles.animationSection}>
        <DevOpsTools />
      </div>
    </div>
  )
}

export default About
