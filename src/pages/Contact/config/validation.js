export const getValidationMessage = (name, value) => {
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

export const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};