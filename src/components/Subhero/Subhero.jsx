import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import bgImage from './pic1.png'; // replace with your image path
import { useTheme } from '../../contexts/ThemeContext';

function Subhero() {
  const { theme } = useTheme();
  const messages = [
    "Confused? Good. We can work with that.",
    "Skills > CGPA. Debate with the wall.",
    "You live. You learn. You cry. You improve. Repeat."
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setIndex(i => (i + 1) % messages.length);
    }, 2500);
    return () => clearTimeout(t);
  }, [index, messages.length]);

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
          <span 
            key={index} 
            className={styles.rotatingWord}
            style={{ color: theme.colors.primary }}
          >
             {messages[index]}
          </span>
        </h2>
        <p className={styles.subText}>
          We just give the cheat codes.
        </p>
      </div>
    </section>
  );
}

export default Subhero;
