import React from 'react';
import styles from './styles.module.css';
import bgImage from './pic1.png'; // replace with your image path

function Subhero() {
  return (
    <section 
      className={styles.subhero} 
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Unlock Your Potential with <br />
          Hands-On Industry <span className={styles.highlight}>Training</span>
        </h2>
        <p className={styles.subText}>
          Gain hands-on experience in simulated corporate environments, 
          work with real tools, and build a portfolio that employers value.
        </p>
      </div>
    </section>
  );
}

export default Subhero;
