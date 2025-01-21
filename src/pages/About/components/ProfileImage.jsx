import { motion } from 'framer-motion';
import { StackIcons } from './StackIcons';
import { SocialLinks } from './SocialLinks';

export const ProfileImage = ({ animations }) => (
  <aside className="col-lg-4 px-0" role="complementary" aria-labelledby="profile-heading">
    <h2 id="profile-heading" className="visually-hidden">Profile Information</h2>
    <div className="profile-wrapper">
      <motion.figure
        initial="hidden"
        animate="visible"
        variants={animations?.scaleUp}
        className="profile-image-container mb-4"
      >
        <img
          src="/images/armoredcore.webp"
          alt="Austin Graham"
          className="about-image"
          width="280"
          height="280"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <figcaption className="visually-hidden">
          Profile photo of Austin Graham, Full Stack Developer
        </figcaption>
      </motion.figure>

      <div className="text-center tablet-sizes">
        <div className="profile-social mb-3">
          <h3 className="h5 text-start">Contact & Connect</h3>
          <hr className="skill-divider mt-0 mb-2" aria-hidden="true" />
          <SocialLinks animations={animations} />
        </div>

        <div className="technical-stack-section mt-3 d-none d-lg-block">
          <h3 className="h5 text-start">Technical Stack</h3>
          <hr className="skill-divider mt-0 mb-2" aria-hidden="true" />
          <StackIcons animations={animations} />
        </div>
      </div>
    </div>
  </aside>
);
