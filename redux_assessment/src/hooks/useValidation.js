import { useState, useEffect } from 'react';

const useValidation = (value, validations) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let errors = {};
    if (validations.required && !value) {
      errors.required = 'This field is required';
    }
    if (validations.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors.email = 'Invalid email format';
    }
    if (validations.maxLength && value.length > validations.maxLength) {
      errors.maxLength = `Maximum length is ${validations.maxLength}`;
    }
    if (validations.minLength && value.length < validations.minLength) {
      errors.minLength = `Minimum length is ${validations.minLength}`;
    }
    if (validations.match && value !== validations.match) {
      errors.match = 'Values do not match';
    }
    if (validations.phone && !/^\+?\d{10,15}$/.test(value)) {
      errors.phone = 'Invalid phone number format';
    }
    if (validations.passcode && !/^\d{4,10}$/.test(value)) {
      errors.passcode = 'Invalid passcode format';
    }
    setErrors(errors);
  }, [value, validations]);

  return errors;
};

export default useValidation;