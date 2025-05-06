import React, { useContext } from 'react';
import "./CartItems.css"; // Import styles
import removeIcon from "../../assets/remove.webp"; // Image import for remove icon
import { ShopContext } from '../../Context/ShopContext'; // Context import

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartItems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Loop through all products and display cart items */}
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className='cartItems-format cartitems-format-main'>
                <img src={product.image} alt={product.name} height="100px" />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cartitems-quantity'>
                  {cartItems[product.id]}
                </button>
                <p>{product.new_price * cartItems[product.id]}</p>
                <img 
                  src={removeIcon} 
                  alt="Remove" 
                  onClick={() => removeFromCart(product.id)} 
                  height="20px" 
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Cart totals and promo code section */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type='text' placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;