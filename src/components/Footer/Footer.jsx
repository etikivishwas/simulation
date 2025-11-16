// Footer.jsx
import React from "react";
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";
import { useTheme } from "../../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer 
      className={styles.container}
      style={{
        backgroundColor: theme.colors.backgroundSecondary,
        borderTop: `1px solid ${theme.colors.border}`,
      }}
    >
      <div 
        className={styles.box}
        style={{
          borderColor: theme.colors.primary,
        }}
      >
        <p 
          className={styles.subtitle}
          style={{ color: theme.colors.textSecondary }}
        >
          Have a website or brand that could use some <FaHeart style={{ color: theme.colors.error }} />
        </p>
        <h2 
          className={styles.title}
          style={{ color: theme.colors.text }}
        >
          Give us a shout!
        </h2>

        <div className={styles.contact}>
          <p 
            className={styles.contactTitle}
            style={{ color: theme.colors.text }}
          >
            Contact Info
          </p>

          {/* Email */}
          <p 
            className={styles.email}
            style={{ color: theme.colors.textSecondary }}
          >
            Send an email to: <strong style={{ color: theme.colors.primary }}>ybsindustriesllp@gmail.com</strong>
          </p>

          {/* Phone */}
          <p 
            className={styles.phone}
            style={{ color: theme.colors.textSecondary }}
          >
            <FaPhoneAlt size={18} style={{ color: theme.colors.primary }} /> <span>8500151146</span>
          </p>

          {/* Icons */}
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/ybs-industries?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
              style={{ color: theme.colors.primary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.colors.primaryDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.colors.primary;
              }}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
              style={{ color: theme.colors.primary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.colors.primaryDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.colors.primary;
              }}
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <p 
        className={styles.footerNote}
        style={{ color: theme.colors.textMuted }}
      >
        © 2025 YBS Industries LLP. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
