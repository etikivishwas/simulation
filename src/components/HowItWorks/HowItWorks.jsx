import React from 'react'
import styles from './styles.module.css'
import { useTheme } from '../../contexts/ThemeContext'
import { motion } from 'framer-motion'

const popup = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function HowItWorks() {
  const { theme } = useTheme();

  const steps = [
    {
      number: 1,
      title: "You Realize You Need Direction",
      description: "You realize you need direction. You open Samardhya.",
      details: []
    },
    {
      number: 2,
      title: "Register",
      description: "We verify your details. If approved, you're in.",
      details: []
    },
    {
      number: 3,
      title: "1:1 Session",
      description: "We analyze your confusion and career goals through a personal session.",
    },
    {
      number: 4,
      title: "Assessment",
      description: "We assess your skills, logic, and potential.",
    },
    {
      number: 5,
      title: "Project Selection",
      description: "We assign a project that matches your skills and goals.",
    },
    {
      number: 6,
      title: "Payment",
      description: "You invest. Your wallet cries. Your future smiles. Balance restored.",
      details: []
    },
    {
      number: 7,
      title: "3-Month Cohort Begins",
      description: "3 months of real client work. Month 1: Reality check. Months 2-3: Full sprint mode with real projects and team collaboration.",
    },
    {
      number: 8,
      title: "Project Submission",
      description: "You submit like a soldier returning from battle: Traumatized but leveled up.",
      details: []
    },
    {
      number: 9,
      title: "Results",
      description: "You leave with boosted confidence, real skills, and a clear path forward.",
    },
    {
      number: 10,
      title: "Alumni Status",
      description: "You unlock opportunities, guidance, community, and ongoing support.",
    }
  ];

  return (
    <div 
      className={styles.container}
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <div className={styles.header}>
        <h2 
          className={styles.heading}
          style={{ color: theme.colors.text }}
        >
          How <span 
            className={styles.highlight}
            style={{ color: theme.colors.primary }}
          >
            Samardhya
          </span> Works
        </h2>
      </div>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={styles.stepCard}
            variants={popup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              backgroundColor: theme.colors.backgroundSecondary,
              borderColor: theme.colors.border,
            }}
          >
            <div 
              className={styles.stepNumber}
              style={{
                backgroundColor: `${theme.colors.primary}20`,
                color: theme.colors.primary,
              }}
            >
              {step.number}
            </div>
            <div className={styles.stepCardContent}>
              <h3 
                className={styles.stepTitle}
                style={{ color: theme.colors.text }}
              >
                {step.title}
              </h3>
              <p 
                className={styles.stepDescription}
                style={{ color: theme.colors.textSecondary }}
              >
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.summary}>
        <p 
          className={styles.summaryTitle}
          style={{ color: theme.colors.text, fontWeight: 'bold' }}
        >
          TL;DR FLOW
        </p>
        <p 
          className={styles.summaryText}
          style={{ color: theme.colors.textSecondary }}
        >
          Registration → 1:1 Session → Assessment → Project Selection → Payment → 3-Month Cohort → Project Completion → Alumni Status
        </p>
      </div>
    </div>
  )
}

export default HowItWorks

