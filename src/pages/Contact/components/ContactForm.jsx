import { Send } from 'lucide-react';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';

const handleMouseDown = (e) => {
  e.target.setAttribute('data-mouse-focus', 'true');
};

const handleKeyDown = (e) => {
  if (e.key === 'Tab') {
    e.target.removeAttribute('data-mouse-focus');
  }
};

export const ContactForm = ({ onSubmit, formState }) => {
  const {
    formData,
    botField,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    setBotField
  } = formState;

  return (
    <form
      id="contact-form"
      className="contact-form"
      onSubmit={onSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="subject"
      aria-label="Contact form"
    >
      <input type="hidden" name="form-name" value="contact" />

      <FormInput
        id="name"
        name="name"
        type="text"
        label="Name"
        placeholder="Enter your name"
        value={formData.name}
        error={errors.name}
        onChange={handleChange}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        required
        autoComplete="name"
      />

      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email address"
        value={formData.email}
        error={errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        required
        autoComplete="email"
      />

      {/* Honeypot field */}
      <FormInput
        id="subject"
        name="subject"
        label="Subject"
        placeholder="What is your message about?"
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        isHoneypot={true}
      />

      <FormTextarea
        id="message"
        name="message"
        label="Message"
        placeholder="Type your message here. I'll get back to you as soon as possible!"
        value={formData.message}
        error={errors.message}
        onChange={handleChange}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
      />

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
  );
};