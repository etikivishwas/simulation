import React from 'react'
import styles from './styles.module.css'
import { FaBookOpen } from 'react-icons/fa'
import { FaBriefcase } from 'react-icons/fa6'
import { LuUsers } from 'react-icons/lu'
import { FaArrowTrendDown } from 'react-icons/fa6'
import { useTheme } from '../../contexts/ThemeContext'

function Fail() {
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
          Why Traditional Internships <span 
            className={styles.highlight}
            style={{ color: theme.colors.primary }}
          >
            Fail Students
          </span>
        </h2>
        <p 
          className={styles.para1}
          style={{ color: theme.colors.textSecondary }}
        >
          The gap between academic learning and industry requirements is wider than ever.
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          Here's what students actually face in the job market.
        </p>
      </div>
      <div className={styles.items}>
        <div 
          className={styles.item}
          style={{
            backgroundColor: theme.colors.backgroundSecondary,
            borderColor: theme.colors.border,
            border: `2px solid ${theme.colors.border}`,
          }}
        >
            <FaBookOpen 
              className={styles.icon} 
              style={{ color: theme.colors.primary }}
            />
            <p 
              className={styles.para3}
              style={{ color: theme.colors.text }}
            >
              Theoretical Learning Gap
            </p>
            <p 
              className={styles.para4}
              style={{ color: theme.colors.textSecondary }}
            >
              Traditional education focuses on concepts without real-world application, leaving students unprepared for corporate environments.
            </p>
        </div>
        <div 
          className={styles.item}
          style={{
            backgroundColor: theme.colors.backgroundSecondary,
            borderColor: theme.colors.border,
            border: `2px solid ${theme.colors.border}`,
          }}
        >
            <LuUsers 
              className={styles.icon} 
              style={{ color: theme.colors.primary }}
            />
            <p 
              className={styles.para3}
              style={{ color: theme.colors.text }}
            >
              Limited Industry Exposure
            </p>
            <p 
              className={styles.para4}
              style={{ color: theme.colors.textSecondary }}
            >
              Most internships offer coffee-fetching roles instead of meaningful project experience that builds actual skills to the students.
            </p>
        </div>
        <div 
          className={styles.item}
          style={{
            backgroundColor: theme.colors.backgroundSecondary,
            borderColor: theme.colors.border,
            border: `2px solid ${theme.colors.border}`,
          }}
        >
            <FaBriefcase 
              className={styles.icon} 
              style={{ color: theme.colors.primary }}
            />
            <p 
              className={styles.para3}
              style={{ color: theme.colors.text }}
            >
              Portfolio & Resume Weakness
            </p>
            <p 
              className={styles.para4}
              style={{ color: theme.colors.textSecondary }}
            >
              Academic projects don't showcase industry-standard practices and their expertise, making it hard to stand out to recruiters.
            </p>
        </div>
        <div 
          className={styles.item}
          style={{
            backgroundColor: theme.colors.backgroundSecondary,
            borderColor: theme.colors.border,
            border: `2px solid ${theme.colors.border}`,
          }}
        >
            <FaArrowTrendDown 
              className={styles.icon} 
              style={{ color: theme.colors.primary }}
            />
            <p 
              className={styles.para3}
              style={{ color: theme.colors.text }}
            >
              Low Placement Success
            </p>
            <p 
              className={styles.para4}
              style={{ color: theme.colors.textSecondary }}
            >
              Traditional education focuses on concepts without real-world application, leaving students unprepared for corporate environments.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Fail
