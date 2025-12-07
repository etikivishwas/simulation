import React, { useState } from "react";
import styles from './styles.module.css';
import { useTheme } from '../../contexts/ThemeContext';

function Success({ onExploreMore }) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("traditional");

  const skillGaps = [
    {
      skill: "Real Project Experience",
      traditional: 20,
      corporate: 95,
      traditionalDesc: "Basically doing copy-paste tasks while the intern buddy disappears for 3 months.",
      corporateDesc: "You actually BUILD stuff. Not photocopy someone else’s."
    },
    {
      skill: "Industry Tools",
      traditional: 30,
      corporate: 90,
      traditionalDesc: "You’ll learn Excel. Badly. That’s it.",
      corporateDesc: "You use the same tools developers cry over in real companies."
    },
    {
      skill: "Team Collaboration",
      traditional: 25,
      corporate: 85,
      traditionalDesc: "You and two other interns you met 7 minutes ago, pretending you’re a ‘team’.",
      corporateDesc: "You’ll fight, fix, brainstorm, panic, revive — exactly like real tech teams."
    },
    {
      skill: "Code Reviews",
      traditional: 15,
      corporate: 92,
      traditionalDesc: "If your senior ever responds, consider it a festival.",
      corporateDesc: "Your code WILL get roasted. But you’ll come out stronger."
    },
    {
      skill: "Production Deployment",
      traditional: 10,
      corporate: 88,
      traditionalDesc: "Deploy? Bro, you won’t even TOUCH the repo.",
      corporateDesc: "Yes, we let you deploy things that actually work. Wild, right?"
    },
    {
      skill: "Client Communication",
      traditional: 35,
      corporate: 80,
      traditionalDesc: "Sending emails like ‘Dear sir, please find the attachment’ = personality development.",
      corporateDesc: "You talk to clients like an actual developer — not a forwarded-message machine."
    }
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
              <p
                className={styles.skillDescription}
                style={{ color: theme.colors.textSecondary }}
              >
                {activeTab === "traditional" ? item.traditionalDesc : item.corporateDesc}
              </p>

              <div
                className={styles.barBackground}
                style={{
                  backgroundColor: theme.colors.backgroundTertiary,
                }}
              >
                <div
                  className={`${styles.barFill} ${activeTab === "traditional" ? styles.error : styles.success
                    }`}
                  style={{
                    width: `${activeTab === "traditional"
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

