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
            Don't Hit Anymore
          </span>
        </h2>
        <p 
          className={styles.para1}
          style={{ color: theme.colors.textSecondary }}
        >
          Colleges teach theory. Companies want skills. <b>And students get stuck in the crossfire.</b>
        </p>
        <p 
          className={styles.para2}
          style={{ color: theme.colors.textSecondary }}
        >
          Here’s what’s actually happening out there.
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
              All Theory, No Skill
            </p>
            <p 
              className={styles.para4}
              style={{ color: theme.colors.textSecondary }}
            >
              You study for years… only to freeze when someone says ‘build this’. College teaches concepts. Not how to actually DO anything.
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
              Zero Real-World Vibes
            </p>
            <p 
              className={styles.para4}
              style={{ color: theme.colors.textSecondary }}
            >
              Most internships = ‘Make PPTs, take prints, attend meetings’. No real projects, no real skills, no real growth.
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
              Portfolios That Don’t Impress Anyone
            </p>
            <p 
              className={styles.para4}
              style={{ color: theme.colors.textSecondary }}
            >
              Recruiter: ‘Show me what you built.’
Student: ‘Umm… a mini-project from 3rd semester?’ <br />
Yeah… that doesn’t cut it anymore.
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
              Placements Be Like: Better Luck Next Year
            </p>
            <p 
              className={styles.para4}
              style={{ color: theme.colors.textSecondary }}
            >
              Companies want skills, colleges give marks.
So placements?
Mostly vibes… and a lot of rejection emails.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Fail
