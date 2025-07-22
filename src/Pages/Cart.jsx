
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import CartItems from '../Components/CartItems/CartItems'
import './CSS/Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <CartItems />
      </div>
      <div className="cart-down">
        <div className="cart-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-total-item total">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
        <button onClick={() => navigate('/checkout')}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart