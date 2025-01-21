import { motion } from 'framer-motion';

const BiographyText = ({ children, animations, className = "mb-4" }) => (
  <motion.p
    variants={animations?.fadeUpStagger}
    className={className}
  >
    {children}
  </motion.p>
);

export default BiographyText;
