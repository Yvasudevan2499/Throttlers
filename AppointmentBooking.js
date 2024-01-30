// This component was created by Yaswanth Vasudevan (8830598)
import React, { useState } from 'react';
import './AppointmentBooking.css';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Appointment request submitted. We'll contact you to confirm the details.");
  };

  return (
    <div className = "appointment">
    <div className="appointment-booking-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          required 
        />
        <select name="serviceType" value={formData.serviceType} onChange={handleChange} required>
          <option value="">Select Service Type</option>
          <option value="repair">Repair</option>
          <option value="maintenance">Maintenance</option>
          <option value="inspection">Inspection</option>
        </select>
        <textarea 
          name="message" 
          placeholder="Additional Information" 
          value={formData.message} 
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Request</button>
      </form>
    </div>
    </div>
  );
};

export default AppointmentBooking;
