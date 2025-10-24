import { motion } from 'framer-motion';
import { SkillSection } from './SkillSection';
import { skillsData } from '../constants';
import { useAnimations } from '../hooks/useAnimations';
import '../styles/Skills.css';

export const Skills = () => {
  const animations = useAnimations();

  const sections = [
    { title: "Programming Languages", data: skillsData.languages, id: "languages-skills" },
    { title: "Frameworks & Libraries", data: skillsData.frameworks, id: "frameworks-skills" },
    { title: "Databases", data: skillsData.databases, id: "database-skills" },
    { title: "Tools & Infrastructure", data: skillsData.tools, id: "tools-skills" }
  ];

  return (
    <section className="" aria-labelledby="skills-heading">
      <motion.h1
        className="text-start gradient-text my-0"
        variants={animations?.heading}
        initial="hidden"
        animate="visible"
        id="skills-heading"
      >
        Skills
      </motion.h1>
      <div className="skill-divider" aria-hidden="true" />

      <motion.div
        className="skills-container mb-5"
        variants={animations?.container}
        initial="hidden"
        animate="visible"
      >
        {sections.map(({ title, data, id }) => (
          <motion.div key={id} variants={animations?.item}>
            <SkillSection
              title={title}
              data={data}
              id={id}
              variants={animations}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};