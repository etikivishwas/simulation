import React from 'react';
import styles from './styles.module.css';
import bgImage from './pic1.png';
import { useTheme } from '../../contexts/ThemeContext';

function Subhero() {
  const { theme } = useTheme();

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
          Confused? Good. We can work with that. <br />
          Skills &gt; CGPA. Debate with the wall. <br />
        </h2>

        <p className={styles.subText}>
  You{" "}
  <span style={{ color: theme.colors.primary }}>live</span>.{" "}
  You{" "}
  <span style={{ color: theme.colors.primary }}>learn</span>.{" "}
  You{" "}
  <span style={{ color: theme.colors.primary }}>cry</span>.{" "}
  You{" "}
  <span style={{ color: theme.colors.primary }}>improve</span>.{" "}
  Repeat.
  <br />
  We just give the cheat codes.
</p>

      </div>
    </section>
  );
}

export default Subhero;
