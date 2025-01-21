export const animationConfig = {
  heading: {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    }
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05 
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    }
  }
};