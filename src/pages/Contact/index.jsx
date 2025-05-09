import React from 'react';
import { motion } from 'framer-motion';
import { MetaTags } from './components/MetaTags';
import { ContactForm } from './components/ContactForm';
import { StatusMessage } from './components/StatusMessage';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import { useAnimations } from './hooks/useAnimations';
import { useForm } from './hooks/useForm';
import './styles/Contact.css';

const Contact = () => {
  const animations = useAnimations();
  const formState = useForm();  // All form state and handlers

  return (
    <>
      <MetaTags />
      <section className="contact-section" aria-labelledby="contact-heading">
        <div className="container py-3 pt-0">
          <div className="contact-container">
            <div variants={animations.heading}>
              <motion.h1
                id="contact-heading"
                className="text-start gradient-text my-0 mt-4"
                variants={animations.heading}
                initial="hidden"
                animate="visible"
              >
                Contact Me
              </motion.h1>
            </div>
            <div className="skill-divider" aria-hidden="true" />

            <motion.div
              className="contact-container"
              variants={animations.form}
              initial="hidden"
              animate="visible"
            >
              <ContactForm 
                onSubmit={formState.handleSubmit} 
                formState={formState} 
              />
              <StatusMessage status={formState.submitStatus} />
            </motion.div>
          </div>
        </div>
        <BackToTop />
      </section>
    </>
  );
};

export default Contact;