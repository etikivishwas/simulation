import React, { useState } from "react";
import styles from './styles.module.css';
import { useTheme } from '../../contexts/ThemeContext';

function Success({ onExploreMore }) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("traditional");

  const skillGaps = [
    { skill: "Real Project Experience", traditional: 20, corporate: 95 },
    { skill: "Industry Tools", traditional: 30, corporate: 90 },
    { skill: "Team Collaboration", traditional: 25, corporate: 85 },
    { skill: "Code Reviews", traditional: 15, corporate: 92 },
    { skill: "Production Deployment", traditional: 10, corporate: 88 },
    { skill: "Client Communication", traditional: 35, corporate: 80 }
  ];

  return (
    <div 
      className={styles.container}
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <div 
        className={styles.card}
        style={{
          backgroundColor: theme.colors.backgroundSecondary,
          borderColor: theme.colors.border,
        }}
      >
        <div className={styles.header}>
          <h3 style={{ color: theme.colors.text }}>
            Interactive Skill Gap Assessment
          </h3>
          <p style={{ color: theme.colors.textSecondary }}>
            Compare traditional internship outcomes vs. corporate simulation results
          </p>
        </div>

        {/* Toggle Tabs */}
        <div 
          className={styles.tabs}
          style={{
            backgroundColor: theme.colors.backgroundTertiary,
          }}
        >
          <button
            onClick={() => setActiveTab("traditional")}
            className={activeTab === "traditional" ? `${styles.tab} ${styles.active}` : styles.tab}
            style={{
              color: activeTab === "traditional" ? theme.colors.text : theme.colors.textSecondary,
              backgroundColor: activeTab === "traditional" ? theme.colors.background : 'transparent',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== "traditional") {
                e.currentTarget.style.backgroundColor = `${theme.colors.primary}15`;
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "traditional") {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            Traditional Internships
          </button>
          <button
            onClick={() => setActiveTab("corporate")}
            className={activeTab === "corporate" ? `${styles.tab} ${styles.active}` : styles.tab}
            style={{
              color: activeTab === "corporate" ? theme.colors.text : theme.colors.textSecondary,
              backgroundColor: activeTab === "corporate" ? theme.colors.background : 'transparent',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== "corporate") {
                e.currentTarget.style.backgroundColor = `${theme.colors.primary}15`;
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "corporate") {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            Corporate Simulation
          </button>
        </div>

        {/* Skill Bars */}
        <div className={styles.skills}>
          {skillGaps.map((item, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span 
                  className={styles.skillName}
                  style={{ color: theme.colors.text }}
                >
                  {item.skill}
                </span>
                <span 
                  className={styles.skillPercent}
                  style={{ color: theme.colors.textSecondary }}
                >
                  {activeTab === "traditional" ? item.traditional : item.corporate}%
                </span>
              </div>
              <div 
                className={styles.barBackground}
                style={{
                  backgroundColor: theme.colors.backgroundTertiary,
                }}
              >
                <div
                  className={`${styles.barFill} ${
                    activeTab === "traditional" ? styles.error : styles.success
                  }`}
                  style={{
                    width: `${
                      activeTab === "traditional"
                        ? item.traditional
                        : item.corporate
                    }%`,
                    backgroundColor: activeTab === "traditional" 
                      ? theme.colors.error 
                      : theme.colors.success,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={styles.cta}
          style={{
            borderTopColor: theme.colors.border,
          }}
        >
          <p style={{ color: theme.colors.textSecondary }}>
            Ready to bridge the gap with real corporate experience?
          </p>
          {/* <button 
            className={styles.ctaBtn} 
            onClick={onExploreMore}
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.textInverse,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primaryDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.primary;
            }}
          >
            Explore Programs →
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Success;

