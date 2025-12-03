import React from 'react'
import styles from './FlowChart.module.css'
import { useTheme } from "../../contexts/ThemeContext";

function FlowChart() {
  const { isDark } = useTheme();

  return (
    <section
      className={styles.flowSection}
      style={{ color: isDark ? "#fff" : "#000" }}
    >
      <h2
        className={styles.flowTitle}
        style={{ color: isDark ? "#fff" : "#000" }}
      >
        HOW SAMARDHYA WORKS
      </h2>

      <div className={styles.flowContainer}>
        {[
          {
            title: "You Feel the “My Life Is Going Nowhere” Itch",
            desc: ["Your brain: “Bro… do something.”", "You: open Samardhya website."]
          },
          {
            title: "You Register Like Your Future Depends on It",
            desc: [
              "We verify your details like strict hostel wardens checking outing slips.",
              "If all good → You’re in",
              "If not → “Application rejected, go touch grass.”"
            ]
          },
          {
            title: "1:1 Session — We Investigate Your Life Crimes",
            desc: [
              "Why are you confused?",
              "How long have you been confused?",
              "And why did nobody help sooner?",
              "This is your therapy session, but with career consequences."
            ]
          },
          {
            title: "Assessment — Prove You Have At Least 2 Working Brain Cells",
            desc: [
              "We test your skills, logic, vibes, life choices, and survival instincts.",
              "Session + Assessment → Your Career Post-Mortem Report."
            ]
          },
          {
            title: "Project Selection — Based on Your Chaos Level",
            desc: [
              "We select a project that matches your skills and tolerance for pain.",
              "You say “Yes” like accepting a toxic relationship offer.",
              "Or “No” like rejecting free Maggi from a suspicious senior."
            ]
          },
          {
            title: "Payment — The Only Pain That Actually Gives ROI",
            desc: ["You invest.", "Your wallet cries.", "Your future smiles.", "Balance restored."]
          },
          {
            title: "Cohort Begins — Welcome to the 3-Month Hunger Games",
            desc: [
              "Month 1 → Client Reality Check: Real clients. Real expectations. Real panic.",
              "Month 2 & 3 → Full Sprint Mode: Less sleep. More bugs. Team chaos."
            ]
          },
          {
            title: "Final Project Submission — You Survive the War",
            desc: ["You submit like a soldier returning from battle: Traumatized but leveled up."]
          },
          {
            title: "Takeaways — You Leave With a Personality Update",
            desc: [
              "Confidence ↑   Skills ↑   Braincells ↑",
              "NPC energy ↓   Future anxiety ↓",
              "You become dangerously capable."
            ]
          },
          {
            title: "Alumni Mode Activated",
            desc: [
              "You unlock: Opportunities, Guidance, Community, Flex rights.",
              "“I survived Samardhya” badge.",
              "You walk out built differently."
            ]
          }
        ].map((step, i) => (
          <div className={styles.flowStep} key={i}>
            <div className={styles.flowMarker}>
              <span>{i + 1}</span>
            </div>

            <div className={styles.flowContent}>
              <h3 style={{ color: isDark ? "#fff" : "#000" }}>
                {step.title}
              </h3>

              <ul>
                {step.desc.map((d, idx) => (
                  <li
                    key={idx}
                    style={{ color: isDark ? "#ddd" : "#333" }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FlowChart
