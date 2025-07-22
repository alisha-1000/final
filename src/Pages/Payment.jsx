import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Payment = () => {
  const [method, setMethod] = useState('card');
  const [success, setSuccess] = useState(false);
  const [billing, setBilling] = useState(null);
  const { clearCart } = useContext(ShopContext);

  useEffect(() => {
    const details = localStorage.getItem('billingDetails');
    if (details) setBilling(JSON.parse(details));
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    setSuccess(true);
    clearCart(); 
  };

  return (
    <div className="payment-page" style={{ maxWidth: 500, margin: '40px auto', background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 4px 32px rgba(76,175,80,0.10)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24, color: '#388e3c', letterSpacing: 1 }}>Payment</h2>
      {success ? (
        <div style={{ textAlign: 'center', color: '#4CAF50', fontWeight: 700, fontSize: 22, padding: 24 }}>
          <span style={{ fontSize: 40, display: 'block', marginBottom: 12 }}>✔️</span>
          Payment Successful! Thank you for your order.
        </div>
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
            {billing ? (
              <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0 0', color: '#444', fontSize: 15, lineHeight: 1.7 }}>
                <li><b>Name:</b> {billing.name}</li>
                <li><b>Email:</b> {billing.email}</li>
                <li><b>Phone:</b> {billing.phone}</li>
                <li><b>Address:</b> {billing.address}</li>
                <li><b>City:</b> {billing.city}</li>
                <li><b>State:</b> {billing.state}</li>
                <li><b>ZIP:</b> {billing.zip}</li>
              </ul>
            ) : (
              <div style={{ color: '#888', fontSize: 15, marginTop: 6 }}>(No billing details found.)</div>
            )}
          </div>
          <button type="submit" style={{ padding: '14px 0', background: '#388e3c', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 17, cursor: 'pointer', marginTop: 10, boxShadow: '0 2px 8px rgba(76,175,80,0.10)' }}>Confirm Payment</button>
        </form>
      )}
    </div>
  );
};

export default Payment; 