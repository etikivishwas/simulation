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
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prepare form data
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("resume", formData.resume ? formData.resume.name : "No file");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxn89PHcGkCM74jn02cNszexyy-6z8XJ6HZCb0_TL7TSyso5kaAAVgoOb4gMZnxr6WcjA/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" }
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", resume: null });
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
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
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />
          <input type="submit" value="Send" />
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
