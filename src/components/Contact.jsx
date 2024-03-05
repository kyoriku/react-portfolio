import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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
  
  const handleInvalidEmail = () => {
    setEmailError(!isValidEmail(email) ? 'Invalid email address' : '');
  };
  
  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setMessageError(!newMessage ? 'Message is required' : '');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    setNameError(!name ? 'Name is required' : '');
    setEmailError(!email ? 'Email is required' : !isValidEmail(email) ? 'Invalid email address' : '');
    setMessageError(!message ? 'Message is required' : '');
  
    if (name && email && isValidEmail(email) && message) {
      setSubmitStatus('Form submitted successfully!');
      console.log('Form submitted with data:', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      setNameError('');
      setEmailError('');
      setMessageError('');
    }
  };

  return (
    <div className="container my-4 py-4 col-md-6 card">
      <h1 className="text-center">Contact</h1>
      {submitStatus && <div className="alert alert-success">{submitStatus}</div>}
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameChange}
            aria-describedby="nameError"
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
            placeholder="Enter Your Email Address"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleInvalidEmail}
            aria-describedby="emailError"
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
            placeholder="Enter Your Message"
            rows="6"
            value={message}
            onChange={handleMessageChange}
            onBlur={handleMessageChange}
            aria-describedby="messageError"
          ></textarea>
          {messageError && <div id="messageError" className="text-danger">{messageError}</div>}
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
