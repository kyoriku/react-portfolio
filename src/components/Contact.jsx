import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import '../styles/Contact.css';

const headingVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const formVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botField, setBotField] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameError(!newName ? 'Name is required' : '');
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!newEmail ? 'Email is required' : '');
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setMessageError(!newMessage ? 'Message is required' : '');
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInvalidEmail = () => {
    setEmailError(!email ? 'Email is required' : !isValidEmail(email) ? 'Invalid email address' : '');
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    setNameError(!name ? 'Name is required' : '');
    setEmailError(!email ? 'Email is required' : !isValidEmail(email) ? 'Invalid email address' : '');
    setMessageError(!message ? 'Message is required' : '');

    if (name && email && isValidEmail(email) && message) {
      setIsSubmitting(true);
      try {
        throw new Error('Test error'); // Uncomment to test error handling
        const formData = {
          "form-name": "contact",
          name,
          email,
          message,
          "bot-field": document.querySelector('input[name="bot-field"]').value
        };

        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(formData)
        });

        setSubmitStatus('Message sent successfully! I will get back to you soon.');
        // Clear form
        setName('');
        setEmail('');
        setMessage('');
        setNameError('');
        setEmailError('');
        setMessageError('');
      } catch (error) {
        setSubmitStatus('There was an error submitting the form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.section
      className="contact-section container py-5"
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-center mb-5 gradient-text"
        variants={headingVariants}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="contact-container"
        variants={formVariants}
      >
        <form
          className="contact-form"
          onSubmit={handleFormSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" onChange={(e) => setBotField(e.target.value)} value={botField} />
            </label>
          </p>

          <div className="form-group">
            <div className="label-container">
              <label htmlFor="name" className="form-label">
                Name <span className="required">*</span>
              </label>
              {nameError && <span className="inline-error">{nameError}</span>}
            </div>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              placeholder="Enter your name"
              autoComplete="name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameChange}
              aria-describedby="nameError"
              required
            />
          </div>

          <div className="form-group">
            <div className="label-container">
              <label htmlFor="email" className="form-label">
                Email <span className="required">*</span>
              </label>
              {emailError && <span className="inline-error">{emailError}</span>}
            </div>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              placeholder="Enter your email address"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleInvalidEmail}
              aria-describedby="emailError"
              required
            />
          </div>

          <div className="form-group">
            <div className="label-container">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              {messageError && <span className="inline-error">{messageError}</span>}
            </div>
            <textarea
              className="form-input"
              id="message"
              name="message"
              placeholder="Type your message here. I'll get back to you as soon as possible!"
              rows="4"
              value={message}
              onChange={handleMessageChange}
              onBlur={handleMessageChange}
              aria-describedby="messageError"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            <Send size={18} />
            <span>{isSubmitting ? 'Submitting...' : 'Send Message'}</span>
          </button>
        </form>

        <div className={`status-message-container ${submitStatus ? 'show' : ''}`}>
          <div className={`status-message ${submitStatus.includes('error') ? 'error' : 'success'} ${submitStatus ? 'show' : ''}`}>
            {submitStatus}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;