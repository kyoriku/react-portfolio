import { useState } from 'react';
import { getValidationMessage, encode } from '../config/validation';

export const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [botField, setBotField] = useState('');
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          "subject": botField
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

  return {
    formData,
    botField,
    errors,
    submitStatus,
    isSubmitting,
    setFormData,
    setBotField,
    setErrors,
    setSubmitStatus,
    handleChange,
    handleBlur,
    handleSubmit
  };
};