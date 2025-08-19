import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "./pic2.jpg";
import { motion } from "framer-motion";

const popup = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Contact() {
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

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyraFMtE3EdIA1UINcIwPG28jDArd626f-4aQCI3G6SMPYoEslpCyrH_IRi0v8krl79Sg/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setResponseMessage("✅ Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", resume: "" });
      } else {
        setResponseMessage("❌ Error submitting the form. Please try again.");
      }
    } catch (error) {
      setResponseMessage("⚠️ An error occurred. Please try again.");
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Image */}
      <motion.div variants={popup} className={styles.image}>
        <img src={Image} alt="Description" className={styles.imageSec} />
      </motion.div>

      {/* Middle Content */}
      <motion.div variants={popup} className={styles.content}>
        <h2 style={{ color: "#fff", textAlign: "center", marginTop: "2rem" }}>
          Let’s Work Together
        </h2>
        <p style={{ color: "#fff", padding: "1rem", textAlign: "center" }}>
          We help brands grow through design, technology, and marketing.
          Reach out to see how we can make your vision a reality.
        </p>
      </motion.div>

      {/* Right Form */}
      <motion.div variants={popup} className={styles.form}>
        <h2 className={styles.heading}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Resume Google Drive link (make it access anyone with link)"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Send" />
        </form>
        {responseMessage && (
          <p style={{ color: "black", marginTop: "1rem" }}>{responseMessage}</p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Contact;

