import { motion } from 'framer-motion';
import { SkillSection } from './SkillSection';
import { skillsData } from '../../constants';
import { useAnimations } from '../../hooks/useAnimations';
import '../../styles/Skills.css';

export const Skills = () => {
  const animations = useAnimations();

  const sections = [
    { title: "Frontend Development", data: skillsData.frontend, id: "frontend-skills" },
    { title: "Backend Development", data: skillsData.backend, id: "backend-skills" },
    { title: "Database Technologies", data: skillsData.databases, id: "database-skills" },
    { title: "DevOps & Tools", data: skillsData.devops, id: "devops-skills" }
  ];

  return (
    <section className="mt-3" aria-labelledby="skills-heading">
      <motion.h1
        className="text-start gradient-text my-0 mt-4"
        variants={animations?.heading}
        initial="hidden"
        animate="visible"
        id="skills-heading"
      >
        Skills
      </motion.h1>
      <div className="skill-divider" aria-hidden="true" />

      <motion.div
        className="skills-container mb-med"
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