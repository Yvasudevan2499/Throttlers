// This component was created by Yaswanth Vasudevan (8830598)
import React, { useState } from 'react';
import './Login.css'; 
import backgroundImage from '../Images/lambo.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    emailPhone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.emailPhone) {
      newErrors.emailPhone = 'Email address or phone number is required';
      isValid = false;
    } else if (formData.emailPhone.length < 6) {
      newErrors.emailPhone = 'Email/phone must be at least 6 characters long';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      console.log('Form submitted with data:', formData);
    } else {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <form className={`login-form ${isSubmitting ? 'submitting' : ''}`} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email address or phone number</label>
          <input
            type="text"
            name="emailPhone"
            value={formData.emailPhone}
            onChange={handleChange}
          />
          {errors.emailPhone && <span className="error">{errors.emailPhone}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="login-button">
          {isSubmitting ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default Login;
