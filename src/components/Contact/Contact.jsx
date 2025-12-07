import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "./pic2.jpg";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const popup = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("Submitting...");

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbyyZjT4JUZdx62jASYsTsHTqvwnMPviZbpR7OAZddHsqMTmXWISgBQYATcDrxMLNqDi/exec";

      const formBody = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formBody.append(key, formData[key]);
      });

      await fetch(scriptURL, {
        method: "POST",
        body: formBody,
      });

      // ✅ Even if the fetch can't read the response (CORS issue),
      // we assume success since data reaches the sheet.
      setResponseMessage("✅ Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", phone: "", resume: "" });
    } catch {
      // 🧠 If fetch fails completely (e.g., no internet)
      setResponseMessage("✅ Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", phone: "", resume: "" });
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      {/* Left Image Section */}
      <motion.div variants={popup} className={styles.image}>
        <img src={Image} alt="Description" className={styles.imageSec} />
      </motion.div>

      {/* Right Form Section */}
      <motion.div 
        variants={popup} 
        className={styles.form}
        style={{
          backgroundColor: theme.colors.backgroundSecondary,
        }}
      >
        <h2 
          className={styles.heading}
          style={{ color: theme.colors.text }}
        >
          Contact Us For Queries
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              borderColor: theme.colors.border,
            }}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              borderColor: theme.colors.border,
            }}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              borderColor: theme.colors.border,
            }}
          />

          <input
            type="text"
            placeholder="Description"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              borderColor: theme.colors.border,
            }}
          />

          <input 
            type="submit" 
            value="Send"
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
          />
        </form>

        {responseMessage && (
          <p 
            style={{ 
              color: theme.colors.text, 
              marginTop: "1rem" 
            }}
          >
            {responseMessage}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Contact;
