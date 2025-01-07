import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import '../styles/Contact.css';

const animationConfig = {
  heading: {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  },
  form: {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [botField, setBotField] = useState('');
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const animations = useReducedMotion() ? {} : animationConfig;

  // Update document title and restore on unmount
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Contact | Austin Graham";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleMouseDown = (e) => {
    e.target.setAttribute('data-mouse-focus', 'true');
  };

  const handleKeyDown = (e) => {
    // Only remove data-mouse-focus if Tab key is pressed
    if (e.key === 'Tab') {
      e.target.removeAttribute('data-mouse-focus');
    }
  };

  const getValidationMessage = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return {
            visual: 'Name is required',
            aria: 'Please enter your name. This field cannot be empty.'
          };
        }
        return null;
      case 'email':
        if (!value.trim()) {
          return {
            visual: 'Email is required',
            aria: 'Please enter your email address. This field cannot be empty.'
          };
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return {
            visual: 'Invalid email address',
            aria: 'The email address format is invalid. Please enter a valid email address, for example: name@example.com'
          };
        }
        return null;
      case 'message':
        if (!value.trim()) {
          return {
            visual: 'Message is required',
            aria: 'Please enter your message. This field cannot be empty.'
          };
        }
        if (value.trim().length < 10) {
          return {
            visual: 'Message is too short',
            aria: 'Your message is too short. Please provide more details to help me understand your inquiry better.'
          };
        }
        return null;
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const validationResult = getValidationMessage(name, value);
    setErrors(prev => ({ ...prev, [name]: validationResult }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validationResult = getValidationMessage(name, value);
    setErrors(prev => ({ ...prev, [name]: validationResult }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (botField) {
      setSubmitStatus('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setBotField('');
      setErrors({});
      return;
    }

    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const validationResult = getValidationMessage(key, formData[key]);
      if (validationResult) newErrors[key] = validationResult;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const submitData = {
          "form-name": "contact",
          ...formData,
          "bot-field": botField
        };

        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(submitData)
        });

        setSubmitStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setBotField('');
        setErrors({});

        const statusMessage = document.getElementById('submit-status');
        if (statusMessage) {
          statusMessage.focus();
        }
      } catch (error) {
        setSubmitStatus('There was an error submitting the form. Please try again.');
        const statusMessage = document.getElementById('submit-status');
        if (statusMessage) {
          statusMessage.focus();
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.section
      className="contact-section"
      initial="hidden"
      animate="visible"
      aria-labelledby="contact-heading"
    >
      <div className="container py-3 pb-4">
        <motion.h1
          id="contact-heading"
          className="text-center mb-3 gradient-text"
          variants={animations.heading}
        >
          Contact Me
        </motion.h1>

        <motion.div
          className="contact-container"
          variants={animations.form}
        >
          <form
            id="contact-form"
            className="contact-form"
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            aria-describedby="form-description"
          >
            <div id="form-description" className="visually-hidden">
              Contact form with three required fields: name, email, and message. Use tab key to navigate between fields. Form validation will provide feedback for any errors. After submitting, you will receive a confirmation message.
            </div>

            <input type="hidden" name="form-name" value="contact" />

            {/* Name field */}
            <div className="form-group">
              <div className="label-container">
                <label htmlFor="name" className="form-label mb-1">
                  Name
                  <span className="visually-hidden"> (required)</span>
                </label>
                {errors.name && (
                  <span
                    id="name-error"
                    className="inline-error"
                    role="alert"
                    aria-label={errors.name.aria}
                  >
                    {errors.name.visual}
                  </span>
                )}
              </div>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete='name'
                className="form-input"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                onMouseDown={handleMouseDown}
                onKeyDown={handleKeyDown}
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error name-description" : "name-description"}
              />
              <span id="name-description" className="visually-hidden">
                Enter your full name as you'd like to be addressed
              </span>
            </div>

            {/* Email field */}
            <div className="form-group">
              <div className="label-container">
                <label htmlFor="email" className="form-label mb-1">
                  Email
                  <span className="visually-hidden"> (required)</span>
                </label>
                {errors.email && (
                  <span
                    id="email-error"
                    className="inline-error"
                    role="alert"
                    aria-label={errors.email.aria}
                  >
                    {errors.email.visual}
                  </span>
                )}
              </div>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete='email'
                className="form-input"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onMouseDown={handleMouseDown}
                onKeyDown={handleKeyDown}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error email-description" : "email-description"}
              />
              <span id="email-description" className="visually-hidden">
                Enter your email address where you'd like to receive my response
              </span>
            </div>

            {/* Honeypot field */}
            <div aria-hidden="true" className="form-group">
              <div className="label-container">
                <label htmlFor="bot-field" className="form-label mb-1">
                  Subject
                  <span className="visually-hidden"> (optional)</span>
                </label>
              </div>
              <input
                id="bot-field"
                name="bot-field"
                onChange={(e) => setBotField(e.target.value)}
                value={botField}
                tabIndex="-1"
                className="form-input"
                placeholder="What is your message about?"
                onMouseDown={handleMouseDown}
                onKeyDown={handleKeyDown}
              />
            </div>

            {/* Message field */}
            <div className="form-group">
              <div className="label-container">
                <label htmlFor="message" className="form-label mb-1">
                  Message
                  <span className="visually-hidden"> (required)</span>
                </label>
                {errors.message && (
                  <span
                    id="message-error"
                    className="inline-error"
                    role="alert"
                    aria-label={errors.message.aria}
                  >
                    {errors.message.visual}
                  </span>
                )}
              </div>
              <textarea
                id="message"
                name="message"
                className="form-input"
                placeholder="Type your message here. I'll get back to you as soon as possible!"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                onMouseDown={handleMouseDown}
                onKeyDown={handleKeyDown}
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error message-description" : "message-description"}
              />
              <span id="message-description" className="visually-hidden">
                Type your message. Please provide enough detail so I can best assist you.
              </span>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              title="Send Message"
            >
              <Send size={18} aria-hidden="true" />
              <span>{isSubmitting ? 'Submitting...' : 'Send Message'}</span>
            </button>
          </form>

          {/* Status message */}
          <div
            className={`status-message-container ${submitStatus ? 'show' : ''}`}
            aria-live="polite"
            aria-relevant="additions text"
            aria-atomic="true"
          >
            <div
              id="submit-status"
              className={`status-message ${submitStatus.includes('error') ? 'error' : 'success'} ${submitStatus ? 'show' : ''}`}
              tabIndex={submitStatus ? -1 : undefined}
              role="status"
            >
              {submitStatus.includes('error') ? (
                <XCircle className="status-icon" size={20} aria-hidden="true" />
              ) : (
                <CheckCircle className="status-icon" size={20} aria-hidden="true" />
              )}
              <span>{submitStatus}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to top navigation link */}
      <a
        href="#back-to-nav"
        className="back-to-top skip-link"
        aria-label="Back to top and return to navigation"
      >
        Back to top
        <span className="visually-hidden"> (Press Enter to return to navigation)</span>
      </a>
    </motion.section>
  );
};

export default Contact;