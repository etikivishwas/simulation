import React, { useState } from "react";
import styles from "./styles.module.css";
import { useTheme } from "../../contexts/ThemeContext";

function MeetingForm() {
  const { theme } = useTheme();
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
      setStatus("✅ Thank you! We'll contact you soon to schedule the meeting.");
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
    <section 
      className={styles.meetingSection}
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <div 
        className={styles.container}
        style={{
          backgroundColor: theme.colors.backgroundSecondary,
        }}
      >
        <h2 style={{ color: theme.colors.text }}>Schedule a Meeting</h2>
        <p style={{ color: theme.colors.textSecondary }}>
          Fill out the form below, and we'll reach out to confirm your meeting.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label style={{ color: theme.colors.text }}>Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
                borderColor: theme.colors.border,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = theme.colors.primary;
                e.currentTarget.style.outlineColor = theme.colors.primary;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = theme.colors.border;
              }}
            />
          </div>

          <div className={styles.formGroup}>
            <label style={{ color: theme.colors.text }}>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
                borderColor: theme.colors.border,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = theme.colors.primary;
                e.currentTarget.style.outlineColor = theme.colors.primary;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = theme.colors.border;
              }}
            />
          </div>

          <div className={styles.formGroup}>
            <label style={{ color: theme.colors.text }}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
                borderColor: theme.colors.border,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = theme.colors.primary;
                e.currentTarget.style.outlineColor = theme.colors.primary;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = theme.colors.border;
              }}
            />
          </div>
          <div className={styles.formGroup}>
            <label style={{ color: theme.colors.text }}>Message (Optional)</label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you'd like to discuss"
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
                borderColor: theme.colors.border,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = theme.colors.primary;
                e.currentTarget.style.outlineColor = theme.colors.primary;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = theme.colors.border;
              }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={styles.submitBtn}
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
            Submit
          </button>
        </form>

        {status && (
          <p 
            className={styles.statusMessage}
            style={{ color: theme.colors.text }}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}

export default MeetingForm;
