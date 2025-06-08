import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import CartItems from '../Components/CartItems/CartItems'
import './CSS/Cart.css'

const Cart = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {Object.keys(cartItems).map((itemId) => {
          if (cartItems[itemId] > 0) {
            return <CartItems key={itemId} id={itemId} />
          }
          return null;
        })}
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
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart