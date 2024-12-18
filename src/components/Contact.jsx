import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const headingVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const formVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
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

        setSubmitStatus('Form submitted successfully! I will get back to you soon.');
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
    <section className="container py-4 col-md-6 mb-4">
      <motion.h1
        className="text-center mb-4"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Contact Me
      </motion.h1>
      <motion.form
        className="card p-3 mt-3"
        variants={formVariants}
        initial="hidden"
        animate="visible"
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

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            autoComplete='name'
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameChange}
            aria-describedby="nameError"
            required
          />
          {nameError && <div id="nameError" className="text-danger">{nameError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email address"
            autoComplete='email'
            value={email}
            onChange={handleEmailChange}
            onBlur={handleInvalidEmail}
            aria-describedby="emailError"
            required
          />
          {emailError && <div id="emailError" className="text-danger">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
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
          {messageError && <div id="messageError" className="text-danger">{messageError}</div>}
        </div>
        <button 
          type="submit" 
          className="btn btn-primary custom-btn" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </motion.form>
      {submitStatus && (
        <div className={`mt-3 alert ${submitStatus.includes('error') ? 'alert-danger' : 'alert-success'}`}>
          {submitStatus}
        </div>
      )}
    </section>
  );
};

export default Contact;