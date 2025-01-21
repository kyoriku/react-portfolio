import { motion } from 'framer-motion';

export const ExpertiseCard = ({ title, description, icon: Icon, index, animations }) => (
  <motion.div
    className="col-md-6 col-lg-3 mb-3"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    custom={index}
    variants={animations?.expertiseCard}
  >
    <article className="content-card h-100">
      <header className="d-flex flex-column align-items-center text-center">
        <div className="expertise-icon mb-3" aria-hidden="true">
          <Icon size={28} className="text-accent" />
        </div>
        <h3 className="card-subtitle expertise-card-title h5 mb-3">{title}</h3>
      </header>
      <section className="card-content text-center">
        <p className="card-text mb-0">{description}</p>
      </section>
    </article>
  </motion.div>
);
