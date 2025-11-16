import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={styles.toggleButton}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        backgroundColor: theme.colors.backgroundSecondary,
        color: theme.colors.text,
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FiSun size={20} style={{ color: theme.colors.primary }} />
        ) : (
          <FiMoon size={20} style={{ color: theme.colors.primary }} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;


