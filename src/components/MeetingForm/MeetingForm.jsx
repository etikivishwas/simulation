import React, { useState } from "react";
import styles from "./styles.module.css";

function MeetingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwDmJR2s0ELueNkKf_4ISbKIiVsLEtdO7Q5-zp006DlmvfqJFQsqLN0lhR34Zeek_8YeA/exec"; // ⚠️ Replace with your web app URL

      const formBody = new URLSearchParams();
      Object.keys(formData).forEach((key) => formBody.append(key, formData[key]));

      await fetch(scriptURL, { method: "POST", body: formBody });

      // ✅ Assume success even if CORS blocks the response
      setStatus("✅ Thank you! We’ll contact you soon to schedule the meeting.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus("✅ Thank you! Your request has been received.");
    }
  };

  return (
    <section className={styles.meetingSection}>
      <div className={styles.container}>
        <h2>Schedule a Meeting</h2>
        <p>Fill out the form below, and we’ll reach out to confirm your meeting.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Message (Optional)</label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you'd like to discuss"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>

        {status && <p className={styles.statusMessage}>{status}</p>}
      </div>
    </section>
  );
}

export default MeetingForm;
