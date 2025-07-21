import React, { useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
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

const Checkout = () => {
  const { clearCart, getTotalCartAmount } = useContext(ShopContext);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '', zip: ''
  });
  const [method, setMethod] = useState('card');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBillingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setSuccess(true);
    clearCart();
    setTimeout(() => navigate('/'), 2500);
  };

  return (
    <div style={{ maxWidth: 700, margin: '48px auto', background: '#fff', padding: 56, borderRadius: 20, boxShadow: '0 8px 48px rgba(76,175,80,0.13)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 28, color: '#388e3c', letterSpacing: 1 }}>Checkout</h2>
      {success ? (
        <div style={{ textAlign: 'center', color: '#4CAF50', fontWeight: 700, fontSize: 22, padding: 24 }}>
          <span style={{ fontSize: 40, display: 'block', marginBottom: 12 }}>✔️</span>
          Payment Successful! Thank you for your order.<br/>
          Redirecting to home...
        </div>
      ) : step === 1 ? (
        <form onSubmit={handleBillingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
      ) : (
        <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <label style={{ fontWeight: 600, color: '#333' }}>Select Payment Method:</label>
            <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
              <label><input type="radio" name="method" value="card" checked={method === 'card'} onChange={() => setMethod('card')} /> Card</label>
              <label><input type="radio" name="method" value="upi" checked={method === 'upi'} onChange={() => setMethod('upi')} /> UPI</label>
              <label><input type="radio" name="method" value="cod" checked={method === 'cod'} onChange={() => setMethod('cod')} /> Cash on Delivery</label>
            </div>
          </div>
          <div style={{ background: '#f8f8f8', padding: 18, borderRadius: 10, margin: '12px 0', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
            <strong style={{ color: '#333', fontSize: 17 }}>Billing Details:</strong>
            <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0 0', color: '#444', fontSize: 15, lineHeight: 1.7 }}>
              <li><b>Name:</b> {form.name}</li>
              <li><b>Email:</b> {form.email}</li>
              <li><b>Phone:</b> {form.phone}</li>
              <li><b>Address:</b> {form.address}</li>
              <li><b>City:</b> {form.city}</li>
              <li><b>State:</b> {form.state}</li>
              <li><b>ZIP:</b> {form.zip}</li>
            </ul>
          </div>
          <div style={{ fontWeight: 600, color: '#333', marginBottom: 8 }}>Order Total: ${getTotalCartAmount()}</div>
          <button type="submit" style={buttonStyle}>Confirm Payment</button>
        </form>
      )}
    </div>
  );
};

export default Checkout; 