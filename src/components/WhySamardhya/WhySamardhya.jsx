import React from 'react'
import styles from './styles.module.css'
import { FaRocket } from 'react-icons/fa'
import { FaShieldHalved } from 'react-icons/fa6'
import { FaArrowUp } from 'react-icons/fa6'
import { FaRotateRight } from 'react-icons/fa6'
import { useTheme } from '../../contexts/ThemeContext'

function WhySamardhya() {
  const { theme } = useTheme();

  const reasons = [
    {
      icon: FaRocket,
      title: "We give you CONFIDENCE",
      subtitle: "— the kind your college can't even spell.",
      description: "The 'move, I got this' confidence that stops you from stuttering during introductions."
    },
    {
      icon: FaShieldHalved,
      title: "We teach SURVIVAL",
      subtitle: "— not syllabus.",
      description: "We teach real survival skills, not just syllabus. Life skills that actually matter."
    },
    {
      icon: FaArrowUp,
      title: "We actually UPGRADE you.",
      description: "We upgrade you completely. Communication, discipline, personality — we patch your glitches."
    },
    {
      icon: FaRotateRight,
      title: "We let you FAIL",
      subtitle: "— but not in the 'my parents will disown me' way.",
      description: "Failure is part of the training. You fall, learn, rise. No trauma — just growth."
    }
  ];

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
          Why <span 
            className={styles.highlight}
            style={{ color: theme.colors.primary }}
          >
            Samardhya
          </span>
        </h2>
        <p 
          className={styles.para1}
          style={{ color: theme.colors.textSecondary }}
        >
          Choosing your career based on vibes and Instagram reels? We fix that. Here's how:
        </p>
      </div>
      <div className={styles.items}>
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div 
              key={index}
              className={styles.item}
              style={{
                backgroundColor: theme.colors.backgroundSecondary,
                borderColor: theme.colors.border,
                border: `2px solid ${theme.colors.border}`,
              }}
            >
              <Icon 
                className={styles.icon} 
                style={{ color: theme.colors.primary }}
              />
              <p 
                className={styles.para3}
                style={{ color: theme.colors.text }}
              >
                {reason.title}
                {reason.subtitle && (
                  <span style={{ color: theme.colors.textSecondary, fontWeight: 'normal' }}>
                    {' '}{reason.subtitle}
                  </span>
                )}
              </p>
              <p 
                className={styles.para4}
                style={{ color: theme.colors.textSecondary }}
              >
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className={styles.summary}>
        <p 
          className={styles.summaryText}
          style={{ color: theme.colors.text }}
        >
          Choose Samardhya if you're done being confused and ready to take control of your career.
        </p>
      </div>
    </div>
  )
}

export default WhySamardhya

