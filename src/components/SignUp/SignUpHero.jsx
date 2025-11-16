import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

export const SignUpHero = () => {
  const { theme, isDark } = useTheme();
  const color = useMotionValue(theme.colors.primary);

  // Replace this URL with your actual signup link
  const signupUrl = 'https://samardhya.com/login';

  // Theme-specific gradient colors
  useEffect(() => {
    const lightColors = [theme.colors.primary, theme.colors.primaryLight, theme.colors.accent];
    const darkColors = [theme.colors.primary, theme.colors.accent, theme.colors.primaryLight];
    const COLORS_TOP = isDark ? darkColors : lightColors;
    
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color, isDark, theme.colors.primary, theme.colors.primaryLight, theme.colors.accent]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${theme.colors.background} 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
        backgroundColor: theme.colors.background,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 
          className="max-w-3xl bg-gradient-to-br bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${theme.colors.text}, ${theme.colors.textMuted})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Ready to Transform Your Career?
        </h1>
        <p 
          className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed"
          style={{ color: theme.colors.textSecondary }}
        >
          Join thousands of pre-professionals who are already building their future
          with real-world corporate experience.
        </p>
        <motion.button
          onClick={() => {
            window.location.href = signupUrl;
          }}
          style={{
            border,
            boxShadow,
            backgroundColor: `${theme.colors.background}20`,
            color: theme.colors.text,
          }}
          whileHover={{
            scale: 1.015,
            backgroundColor: `${theme.colors.background}40`,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full px-6 py-3 transition-colors"
        >
          Get Started Now
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
        <p 
          className="mt-6 max-w-xl text-center text-sm leading-relaxed"
          style={{ color: theme.colors.textMuted }}
        >
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      {isDark && (
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      )}
    </motion.section>
  );
};