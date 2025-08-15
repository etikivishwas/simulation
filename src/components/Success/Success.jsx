import React, { useState } from "react";
import styles from './styles.module.css'

function Success() {
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
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3>Interactive Skill Gap Assessment</h3>
          <p>
            Compare traditional internship outcomes vs. corporate simulation
            results
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className={styles.tabs}>
          <button
            onClick={() => setActiveTab("traditional")}
            className={activeTab === "traditional" ? styles.tab + " " + styles.active : styles.tab}
          >
            Traditional Internships
          </button>
          <button
            onClick={() => setActiveTab("corporate")}
            className={activeTab === "corporate" ? "tab active" : "tab"}
          >
            Corporate Simulation
          </button>
        </div>

        {/* Skill Bars */}
        <div className={styles.skills}>
          {skillGaps.map((item, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span>{item.skill}</span>
                <span>
                  {activeTab === "traditional"
                    ? item.traditional
                    : item.corporate}
                  %
                </span>
              </div>
              <div className={styles.barBackground}>
                <div
                  className={`${styles.barFill} ${
                    activeTab === "traditional" ? styles.error : styles.success
                  }`}
                  style={{
                    width: `${
                      activeTab === "traditional"
                        ? item.traditional
                        : item.corporate
                    }%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.cta}>
          <p>Ready to bridge the gap with real corporate experience?</p>
          <button className={styles.ctaBtn}>Explore Programs →</button>
        </div>
      </div>
    </div>
  );
}

export default Success;
