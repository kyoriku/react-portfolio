import { MetaTags } from './components/MetaTags';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Resume } from './components/Resume';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import './styles/Experience.css';

const Experience = () => {
  return (
    <>
      <MetaTags />
      <section
        className="experience-section"
        aria-labelledby="experience-heading"
      >
        <div className="container spacing pt-0">
          <article className="experience-content">
            <Skills />
            <Certificates />
            <Resume />
          </article>
        </div>
        <BackToTop />
      </section>
    </>
  );
};

export default Experience;