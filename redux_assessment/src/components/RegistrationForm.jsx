import React, { useState } from 'react';

// Custom hook for form validation
const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  return { values, errors, handleChange, handleSubmit };
};

// Validation function
const validate = (values) => {
  let errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.retypePassword) {
    errors.retypePassword = 'Retype Password is required';
  } else if (values.password !== values.retypePassword) {
    errors.retypePassword = 'Passwords do not match';
  }

  if (!values.firstName) {
    errors.firstName = 'First Name is required';
  } else if (values.firstName.length > 4) {
    errors.firstName = 'First Name must be less than or equal to 4 characters';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name is required';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!phoneRegex.test(values.phoneNumber)) {
    errors.phoneNumber = 'Invalid phone number';
  }

  if (!values.address) {
    errors.address = 'Address is required';
  }

  

  if (!values.region) {
    errors.region = 'Region is required';
  }

  if (!values.postcode) {
    errors.postcode = 'Postcode is required';
  }

  if (!values.country) {
    errors.country = 'Country is required';
  }

  return errors;
};

const RegistrationForm = () => {
  const initialState = {
    email: '',
    password: '',
    retypePassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    town: '',
    region: '',
    postcode: '',
    country: '',
  };

  const { values, errors, handleChange, handleSubmit } = useFormValidation(initialState, validate);

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email <span className='star'>*</span></label> 
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password <span className='star'>*</span></label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Retype Password <span className='star'>*</span></label>
          <input
            type="password"
            name="retypePassword"
            value={values.retypePassword}
            onChange={handleChange}
          />
          {errors.retypePassword && <p>{errors.retypePassword}</p>}
        </div>
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label>Last Name <span className='star'>*</span></label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label>Phone Number <span className='star'>*</span></label>
          <input
            type="text"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>
        <div className="form-group">
          <label>Address <span className='star'>*</span></label>
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className="form-group">
          <label>Town </label>
          <input
            type="text"
            name="town"
            value={values.town}
            onChange={handleChange}
          />
          {errors.town && <p>{errors.town}</p>}
        </div>
        <div className="form-group">
          <label>Region <span className='star'>*</span></label>
          <input
            type="text"
            name="region"
            value={values.region}
            onChange={handleChange}
          />
          {errors.region && <p>{errors.region}</p>}
        </div>
        <div className="form-group">
          <label>Postcode / Zip <span className='star'>*</span></label>
          <input
            type="text"
            name="postcode"
            value={values.postcode}
            onChange={handleChange}
          />
          {errors.postcode && <p>{errors.postcode}</p>}
        </div>
        <div className="form-group">
          <label>Country <span className='star'>*</span></label>
          <input
            type="text"
            name="country"
            value={values.country}
            onChange={handleChange}
          />
          {errors.country && <p>{errors.country}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
