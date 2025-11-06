// Footer.jsx
import React from "react";
import { FaPhone, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.box}>
        <p className={styles.subtitle}>
          Have a website or brand that could use some <FaHeart className="text-red-500" />
        </p>
        <h2 className={styles.title}>Give us a shout!</h2>

        <div className={styles.contact}>
          <p className={styles.contactTitle}>Contact Info</p>

          {/* Email */}
          <p className={styles.email}>
            Send an email to: <strong>ybsindustriesllp@gmail.com</strong>
          </p>

          {/* Phone */}
          <p className={styles.phone}>
            <FaPhone size={18} /> <span>8500151146</span>
          </p>

          {/* Icons */}
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/ybs-industries?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <p className={styles.footerNote}>
        © 2025 YBS Industries LLP. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
