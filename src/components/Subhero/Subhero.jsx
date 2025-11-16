import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import bgImage from './pic1.png'; // replace with your image path
import { useTheme } from '../../contexts/ThemeContext';

function Subhero() {
  const { theme } = useTheme();
  const words = ['Training', 'Knowledge', 'Expertise'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setIndex(i => (i + 1) % words.length);
    }, 1700);
    return () => clearTimeout(t);
  }, [index, words.length]);

  return (
    <section 
      className={styles.subhero} 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div 
        className={styles.overlay}
        style={{
          background: theme.name === 'dark' 
            ? 'rgba(15, 23, 42, 0.7)' 
            : 'rgba(0, 0, 0, 0.5)'
        }}
      ></div>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Unlock Your Potential with <br />
          Hands-On Industry {" "}  
          <span 
            key={index} 
            className={styles.rotatingWord}
            style={{ color: theme.colors.primary }}
          >
             {words[index]}
          </span>
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
