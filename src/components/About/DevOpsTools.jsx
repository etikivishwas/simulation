import React, { useState, useEffect } from 'react';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiKubernetes, SiDocker, SiGitlab, SiJenkins, SiJira } from 'react-icons/si';
import { useTheme } from '../../contexts/ThemeContext';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import styles from './DevOpsTools.module.css';

const devOpsTools = [
  { icon: FaGitAlt, name: 'Git', color: '#F05032', glowColor: '#F05032' },
  { icon: FaGithub, name: 'GitHub', color: '#181717', glowColor: '#9B59B6' },
  { icon: SiGitlab, name: 'GitLab', color: '#FC6D26', glowColor: '#FC6D26' },
  { icon: SiJenkins, name: 'Jenkins', color: '#D24939', glowColor: '#D24939' },
  { icon: SiJira, name: 'Jira', color: '#0052CC', glowColor: '#0052CC' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED', glowColor: '#0DB7ED' },
  { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5', glowColor: '#326CE5' },
];


function DevOpsTools() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [waveWidth, setWaveWidth] = useState(1200);
  const waveProgress = useMotionValue(0); // 0 to 1, represents progress across the wave
  const activeIndex = useMotionValue(0);

  // Update wave width on window resize
  useEffect(() => {
  const updateWaveWidth = () => {
    let width;

    if (window.innerWidth < 480) {
      width = window.innerWidth; // full width mobile
    } 
    else if (window.innerWidth < 768) {
      width = window.innerWidth - 80; // small tablets
    } 
    else {
      width = Math.max(window.innerWidth - 200, 800); // desktop
    }

    setWaveWidth(width);
  };

  updateWaveWidth();
  window.addEventListener("resize", updateWaveWidth);

  return () => window.removeEventListener("resize", updateWaveWidth);
}, []);


  useEffect(() => {
    // Continuous wave animation - move from left to right
    const waveAnimation = animate(waveProgress, 1, {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    });

    // Change active tool
    const toolInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % devOpsTools.length;
        activeIndex.set(next);
        return next;
      });
    }, 2500);

    return () => {
      waveAnimation.stop();
      clearInterval(toolInterval);
    };
  }, [waveProgress, activeIndex]);

  // Calculate sinusoidal wave position
  const getWavePosition = (index, progress) => {
    const total = devOpsTools.length;
    
    // Wave parameters - using responsive width for full page width
    const amplitude = 80; // Vertical amplitude of the sine wave
    const wavelength = waveWidth / 2; // Wavelength (2 complete cycles across width)
    
    // Stagger each icon so they don't all start at the same position
    // Each icon starts at a different phase (spaced evenly)
    const phaseOffset = (index / total);
    
    // Calculate x position: progress goes 0 to 1, we want to move across waveWidth
    // When progress + phaseOffset > 1, icon loops back to left
    const normalizedProgress = (progress + phaseOffset) % 1;
    const x = normalizedProgress * waveWidth - (waveWidth / 2); // Center at 0
    
    // Calculate y position using sine wave formula: y = A * sin(2π * x / λ)
    const phase = (2 * Math.PI * x) / wavelength;
    const y = amplitude * Math.sin(phase);
    
    return { x, y };
  };


  // Create transforms for each icon at top level (all hooks must be at top level)
  const icon0X = useTransform(waveProgress, (p) => getWavePosition(0, p).x);
  const icon0Y = useTransform(waveProgress, (p) => getWavePosition(0, p).y);
  const icon0Scale = useTransform([waveProgress, activeIndex], ([p, ai]) => {
    return ai === 0 ? 1.2 : 0.8;
  });

  const icon1X = useTransform(waveProgress, (p) => getWavePosition(1, p).x);
  const icon1Y = useTransform(waveProgress, (p) => getWavePosition(1, p).y);
  const icon1Scale = useTransform([waveProgress, activeIndex], ([p, ai]) => {
    return ai === 1 ? 1.2 : 0.8;
  });

  const icon2X = useTransform(waveProgress, (p) => getWavePosition(2, p).x);
  const icon2Y = useTransform(waveProgress, (p) => getWavePosition(2, p).y);
  const icon2Scale = useTransform([waveProgress, activeIndex], ([p, ai]) => {
    return ai === 2 ? 1.2 : 0.8;
  });

  const icon3X = useTransform(waveProgress, (p) => getWavePosition(3, p).x);
  const icon3Y = useTransform(waveProgress, (p) => getWavePosition(3, p).y);
  const icon3Scale = useTransform([waveProgress, activeIndex], ([p, ai]) => {
    return ai === 3 ? 1.2 : 0.8;
  });

  const icon4X = useTransform(waveProgress, (p) => getWavePosition(4, p).x);
  const icon4Y = useTransform(waveProgress, (p) => getWavePosition(4, p).y);
  const icon4Scale = useTransform([waveProgress, activeIndex], ([p, ai]) => {
    return ai === 4 ? 1.2 : 0.8;
  });

  const icon5X = useTransform(waveProgress, (p) => getWavePosition(5, p).x);
  const icon5Y = useTransform(waveProgress, (p) => getWavePosition(5, p).y);
  const icon5Scale = useTransform([waveProgress, activeIndex], ([p, ai]) => {
    return ai === 5 ? 1.2 : 0.8;
  });

  const icon6X = useTransform(waveProgress, (p) => getWavePosition(6, p).x);
  const icon6Y = useTransform(waveProgress, (p) => getWavePosition(6, p).y);
  const icon6Scale = useTransform([waveProgress, activeIndex], ([p, ai]) => {
    return ai === 6 ? 1.2 : 0.8;
  });

  // Transform to include calc() for centering
  const icon0XFinal = useTransform(icon0X, (val) => `calc(-50% + ${val}px)`);
  const icon0YFinal = useTransform(icon0Y, (val) => `calc(-50% + ${val}px)`);
  const icon1XFinal = useTransform(icon1X, (val) => `calc(-50% + ${val}px)`);
  const icon1YFinal = useTransform(icon1Y, (val) => `calc(-50% + ${val}px)`);
  const icon2XFinal = useTransform(icon2X, (val) => `calc(-50% + ${val}px)`);
  const icon2YFinal = useTransform(icon2Y, (val) => `calc(-50% + ${val}px)`);
  const icon3XFinal = useTransform(icon3X, (val) => `calc(-50% + ${val}px)`);
  const icon3YFinal = useTransform(icon3Y, (val) => `calc(-50% + ${val}px)`);
  const icon4XFinal = useTransform(icon4X, (val) => `calc(-50% + ${val}px)`);
  const icon4YFinal = useTransform(icon4Y, (val) => `calc(-50% + ${val}px)`);
  const icon5XFinal = useTransform(icon5X, (val) => `calc(-50% + ${val}px)`);
  const icon5YFinal = useTransform(icon5Y, (val) => `calc(-50% + ${val}px)`);
  const icon6XFinal = useTransform(icon6X, (val) => `calc(-50% + ${val}px)`);
  const icon6YFinal = useTransform(icon6Y, (val) => `calc(-50% + ${val}px)`);

  const iconTransforms = [
    { x: icon0XFinal, y: icon0YFinal, scale: icon0Scale },
    { x: icon1XFinal, y: icon1YFinal, scale: icon1Scale },
    { x: icon2XFinal, y: icon2YFinal, scale: icon2Scale },
    { x: icon3XFinal, y: icon3YFinal, scale: icon3Scale },
    { x: icon4XFinal, y: icon4YFinal, scale: icon4Scale },
    { x: icon5XFinal, y: icon5YFinal, scale: icon5Scale },
    { x: icon6XFinal, y: icon6YFinal, scale: icon6Scale },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        {devOpsTools.map((tool, index) => {
          const isActive = index === currentIndex;
          const Icon = tool.icon;
          const { x, y, scale } = iconTransforms[index];
          
          // Convert hex color to rgba for glow effect
          const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result 
              ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
              : [139, 92, 246]; // Default purple if invalid
          };
          const glowRgb = hexToRgb(tool.glowColor);
          const glowRgba = `rgba(${glowRgb[0]}, ${glowRgb[1]}, ${glowRgb[2]}, 0.6)`;
          
          return (
            <motion.div
              key={tool.name}
              className={styles.iconItem}
              style={{
                x,
                y,
                scale,
              }}
              animate={{ 
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{ opacity: { duration: 0.5 } }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  filter: [
                    `drop-shadow(0 0 10px ${glowRgba})`,
                    `drop-shadow(0 0 25px ${glowRgba})`,
                    `drop-shadow(0 0 10px ${glowRgba})`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2, // Stagger the pulse animation
                }}
              >
                <Icon
                  className={styles.icon}
                  style={{
                    color: isActive
                      ? (theme.name === 'dark' ? tool.color : tool.color)
                      : theme.colors.textMuted,
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default DevOpsTools;
