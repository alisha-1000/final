import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const inputStyle = {
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: 6,
  fontSize: 16,
  marginBottom: 4,
  outline: 'none',
  transition: 'border 0.2s, box-shadow 0.2s',
  background: '#fafbfc',
};
const labelStyle = {
  fontWeight: 600,
  color: '#333',
  marginBottom: 6,
  fontSize: 15,
};
const formGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  marginBottom: 16,
};
const buttonStyle = {
  padding: '14px 0',
  background: 'linear-gradient(90deg, #388e3c 0%, #4CAF50 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 17,
  cursor: 'pointer',
  marginTop: 10,
  boxShadow: '0 2px 8px rgba(76,175,80,0.10)'
};

const BillingDetails = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('billingDetails', JSON.stringify(form));
    navigate('/payment');
  };

  return (
    <div className="billing-details" style={{ maxWidth: 700, margin: '48px auto', background: '#fff', padding: 56, borderRadius: 20, boxShadow: '0 8px 48px rgba(76,175,80,0.13)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 28, color: '#388e3c', letterSpacing: 1 }}>Billing Details</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="name">Full Name</label>
          <input id="name" name="name" placeholder="Enter your full name" value={form.name} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="address">Address</label>
          <input id="address" name="address" placeholder="Enter your address" value={form.address} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ ...formGroupStyle, flex: 1 }}>
            <label style={labelStyle} htmlFor="city">City</label>
            <input id="city" name="city" placeholder="City" value={form.city} onChange={handleChange} style={inputStyle} required />
          </div>
          <div style={{ ...formGroupStyle, flex: 1 }}>
            <label style={labelStyle} htmlFor="state">State</label>
            <input id="state" name="state" placeholder="State" value={form.state} onChange={handleChange} style={inputStyle} required />
          </div>
          <div style={{ ...formGroupStyle, flex: 1 }}>
            <label style={labelStyle} htmlFor="zip">ZIP Code</label>
            <input id="zip" name="zip" placeholder="ZIP Code" value={form.zip} onChange={handleChange} style={inputStyle} required />
          </div>
        </div>
        <button type="submit" style={buttonStyle}>Proceed to Payment</button>
      </form>
    </div>
  );
};

export default BillingDetails; 