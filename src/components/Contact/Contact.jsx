import React from 'react';
import styles from './styles.module.css';
import Image from './pic2.jpg';
import { motion } from 'framer-motion';

const popup = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function Contact() {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left: Image */}
      <motion.div variants={popup} className={styles.image}>
        <img src={Image} alt="Description" className={styles.imageSec} />
      </motion.div>

      {/* Middle: Content Section */}
      <motion.div variants={popup} className={styles.content}>
        <h2 style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
          Let’s Work Together
        </h2>
        <p style={{ color: '#fff', padding: '1rem', textAlign: 'center' }}>
          We help brands grow through design, technology, and marketing.
          Reach out to see how we can make your vision a reality.
        </p>
      </motion.div>

      {/* Right: Form */}
      <motion.div variants={popup} className={styles.form}>
        <h2 className={styles.heading}>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" name="from_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="number" placeholder="Phone Number" name="phone_number" />
          <textarea placeholder="Message" rows={6} name="message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
