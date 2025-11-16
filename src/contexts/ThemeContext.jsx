import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Light theme: White, Black, Nature Green
const lightTheme = {
  name: 'light',
  colors: {
    // Primary colors
    primary: '#22c55e', // Nature green
    primaryDark: '#16a34a', // Darker green
    primaryLight: '#4ade80', // Lighter green
    
    // Background colors
    background: '#ffffff', // White
    backgroundSecondary: '#f9fafb', // Off-white
    backgroundTertiary: '#f3f4f6', // Light gray
    
    // Text colors
    text: '#000000', // Black
    textSecondary: '#1f2937', // Dark gray
    textMuted: '#6b7280', // Medium gray
    textInverse: '#ffffff', // White text for dark backgrounds
    
    // Border and divider
    border: '#e5e7eb', // Light gray
    divider: '#d1d5db', // Medium gray
    
    // Accent colors
    accent: '#22c55e', // Green accent
    accentSecondary: '#10b981', // Emerald green
    
    // Status colors
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
};

// Dark theme: Dark Blue, Violet
const darkTheme = {
  name: 'dark',
  colors: {
    // Primary colors
    primary: '#8b5cf6', // Violet
    primaryDark: '#7c3aed', // Darker violet
    primaryLight: '#a78bfa', // Lighter violet
    
    // Background colors
    background: '#0f172a', // Dark blue (slate-900)
    backgroundSecondary: '#1e293b', // Darker slate
    backgroundTertiary: '#334155', // Slate-700
    
    // Text colors
    text: '#f1f5f9', // Light gray
    textSecondary: '#cbd5e1', // Slate-300
    textMuted: '#94a3b8', // Slate-400
    textInverse: '#0f172a', // Dark text for light backgrounds
    
    // Border and divider
    border: '#334155', // Slate-700
    divider: '#475569', // Slate-600
    
    // Accent colors
    accent: '#6366f1', // Indigo (complementary to violet)
    accentSecondary: '#8b5cf6', // Violet
    
    // Status colors
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme === 'light' ? lightTheme : darkTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return darkTheme;
    }
    return lightTheme;
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme.name === 'light' ? darkTheme : lightTheme;
      localStorage.setItem('theme', newTheme.name);
      return newTheme;
    });
  };

  const setLightTheme = () => {
    setTheme(lightTheme);
    localStorage.setItem('theme', 'light');
  };

  const setDarkTheme = () => {
    setTheme(darkTheme);
    localStorage.setItem('theme', 'dark');
  };

  // Apply theme to document root for CSS variables
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    root.setAttribute('data-theme', theme.name);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? darkTheme : lightTheme);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const value = {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    isDark: theme.name === 'dark',
    isLight: theme.name === 'light',
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};


