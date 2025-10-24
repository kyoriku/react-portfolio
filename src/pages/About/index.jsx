import { motion } from 'framer-motion';
import { MetaTags } from './components/MetaTags';
import { ProfileImage } from './components/ProfileImage';
import { Biography } from './components/Biography';
import { ExpertiseSection } from './components/ExpertiseSection';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import { useAnimations } from './hooks/useAnimations';
import './styles/About.css';

const About = () => {
  const animations = useAnimations();

  return (
    <>
      {/* <MetaTags /> */}
      <section
        className="container"
        aria-labelledby="about-heading"
        aria-description="Professional overview and background information"
        id="about"
      >
        <motion.div
          className="about-section container py-5"
          initial="hidden"
          animate="visible"
          variants={animations?.staggerContainer}
        >
          <div className='row align-items-start'>
            <ProfileImage animations={animations} />
            <Biography animations={animations} />
          </div>
        </motion.div>
      </section>
      <ExpertiseSection animations={animations} />
      <BackToTop />
    </>
  );
};

export default About;