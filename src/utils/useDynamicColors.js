import { useMemo } from 'react';

export const useDynamicColors = (colors) => {
  return useMemo(() => ({
    // Tailwind-safe dynamic styles
    gradientPrimary: `from-[${colors.primaryFrom}] to-[${colors.primaryTo}]`,
    gradientSecondary: `from-[${colors.secondaryFrom}] to-[${colors.primaryFrom}]`,
    gradientAccent: `from-[${colors.primaryFrom}] via-[${colors.primaryTo}] to-[${colors.secondaryFrom}]`,
    textGradient: `from-[${colors.textGradientFrom}] to-[${colors.textGradientTo}] bg-gradient-to-r bg-clip-text text-transparent`,
    
    // CSS variables for complex animations
    '--primary-from': colors.primaryFrom,
    '--primary-to': colors.primaryTo,
    '--secondary-from': colors.secondaryFrom,
    '--accent': colors.accent,
    '--bg-from': colors.backgroundFrom,
    '--bg-to': colors.backgroundTo,
    
    // Background gradients
    backgroundGradient: `from-[${colors.backgroundFrom}] via-[${colors.backgroundFrom}] to-[${colors.backgroundTo}]`,
    
    // Button hover states
    buttonHover: `from-[${colors.secondaryFrom}] to-[${colors.textGradientTo}]`,
    
    // Border colors
    borderColor: `border-[${colors.primaryFrom}]/10`,
    borderActive: `border-[${colors.primaryFrom}]/30`
  }), [colors]);
};
