import React, { useState } from 'react'; // Importing React to use JSX
import '../styles/Contact.css'; // Importing CSS file to style component

// Functional component to display contact form
const Contact = () => {
  const [name, setName] = useState(''); // State to keep track of the name input
  const [email, setEmail] = useState(''); // State to keep track of the email input
  const [message, setMessage] = useState(''); // State to keep track of the message input
  const [nameError, setNameError] = useState(''); // State to keep track of the name input error
  const [emailError, setEmailError] = useState(''); // State to keep track of the email input error
  const [messageError, setMessageError] = useState(''); // State to keep track of the message input error
  const [submitStatus, setSubmitStatus] = useState(''); // State to keep track of the form submission status

  // Function to handle the change of the name input
  const handleNameChange = (e) => {
    const newName = e.target.value; // Getting the new name input value
    setName(newName); // Setting the name state to the new name input value
    setNameError(!newName ? 'Name is required' : ''); // Setting the name error state to an error message if the new name input value is empty
  };

  // Function to handle the change of the email input
  const handleEmailChange = (e) => { // Getting the new email input value
    const newEmail = e.target.value; // Setting the email state to the new email input value
    setEmail(newEmail); // Setting the email state to the new email input value
    setEmailError(!newEmail ? 'Email is required' : ''); // Setting the email error state to an error message if the new email input value is empty
  };

  // Function to handle the change of the message input
  const handleMessageChange = (e) => {
    const newMessage = e.target.value; // Getting the new message input value
    setMessage(newMessage); // Setting the message state to the new message input value
    setMessageError(!newMessage ? 'Message is required' : ''); // Setting the message error state to an error message if the new message input value is empty
  };

  // Function to check if the email input value is a valid email address
  const isValidEmail = (email) => {
    // Returning a boolean value based on whether the email input value matches the regular expression pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Function to handle the invalid email input
  const handleInvalidEmail = () => {
    // Setting the email error state to an error message if the email input value is not a valid email address
    setEmailError(!email ? 'Email is required' : !isValidEmail(email) ? 'Invalid email address' : '');
  };

  // Function to handle the form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior

    // Setting the name error state to an error message if the name input value is empty
    setNameError(!name ? 'Name is required' : '');
    // Setting the email error state to an error message if the email input value is empty or not a valid email address
    setEmailError(!email ? 'Email is required' : !isValidEmail(email) ? 'Invalid email address' : '');
    // Setting the message error state to an error message if the message input value is empty
    setMessageError(!message ? 'Message is required' : '');

    // Checking if the name, email, and message input values are not empty and the email input value is a valid email address
    if (name && email && isValidEmail(email) && message) {
      setSubmitStatus('The form feature is currently unavailable. You can contact me directly by emailing devkyoriku@gmail.com'); // Setting the form submission status state to a success message (Note to self: change message when the form feature is available: 'Form submitted successfully!')
      console.log('Form submitted with data:', { name, email, message }); // Logging the form data to the console
      setName(''); // Clearing the name input value
      setEmail(''); // Clearing the email input value
      setMessage(''); // Clearing the message input value
      setNameError(''); // Clearing the name error message
      setEmailError(''); // Clearing the email error message
      setMessageError(''); // Clearing the message error message
    }
  };

  // Returning the contact form with input fields for name, email, and message
  return (
    <div className="container py-4 col-md-6 mb-4">
      <h1 className="text-center">Contact</h1>
      <p className='px-3'>The form feature is currently unavailable. You can contact me directly by emailing <a href="mailto:devkyoriku@gmail.com">devkyoriku@gmail.com</a></p> {/* Note to self: remove this when the form feature is available */}
      <form className="card p-3 mt-3" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            autoComplete='name'
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
            autoComplete='email'
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
      {submitStatus && <div className="mt-3 alert alert-danger">{submitStatus}</div>} {/* Note to self: change alert-danger to alert-success when the form feature is available */}
    </div>
  );
};

export default Contact; // Exporting the Contact component to be used in other parts of the application
