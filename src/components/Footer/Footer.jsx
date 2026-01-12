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
          Built with caffeine, chaos, and actual humans who give a damn.
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
            Send an email to: <strong style={{ color: theme.colors.primary }}>support@samardhya.com</strong>
          </p>

          {/* Phone */}
          <p 
            className={styles.phone}
            style={{ color: theme.colors.textSecondary }}
          >
            <FaPhoneAlt size={18} style={{ color: theme.colors.primary }} /> <span>7794034141</span>
          </p>

          {/* Icons */}
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/company/samardhya/"
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
              href="https://www.instagram.com/ybs_samardhya?igsh=YzN2ankxaXJzajQ1"
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
