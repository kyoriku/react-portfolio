import { useReducedMotion } from 'framer-motion';
import { animationConfig } from '../config/animations';

export const useAnimations = () => {
  const shouldReduceMotion = useReducedMotion();
  return shouldReduceMotion ? {} : animationConfig;
};