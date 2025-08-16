import React from 'react';
import styles from './styles.module.css';
import Lottie from 'lottie-react';
import heroAnimation from './gif1.json';

function Hero( { onContactClick, onLearnMoreClick } ) {
  return (
    <section className={styles.container}>
      <div className={styles.textSection}>
        <h2 className={styles.heading}>
          Transform Your Career <br />with Real-World <br />Corporate Experience
        </h2>
        <p className={styles.subText}>
          AI-driven internships &amp; capstone projects <br />
          in simulated MNC environments.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.btnPrimary} onClick={onLearnMoreClick}>Learn More</button>
          <button className={styles.btnOutline} onClick={onContactClick}>Contact us</button>
        </div>
      </div>

      <div className={styles.imageSection}>
        <Lottie 
          animationData={heroAnimation} 
          loop={true} 
          className={styles.heroImage} 
        />
      </div>
    </section>
  );
}

export default Hero;
