import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import './CSS/Wishlist.css';

const Wishlist = () => {
  const { wishlistItems, all_product, removeFromWishlist, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
    removeFromWishlist(itemId);
  };

  const getTotalWishlistItems = () => {
    return Object.values(wishlistItems).reduce((total, count) => total + count, 0);
  };

  const wishlistProducts = all_product.filter(item => wishlistItems[item.id] > 0);

  return (
    <div className="wishlist">
      <h1>My Wishlist</h1>
      <div className="wishlist-items">
        <div className="wishlist-items-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        <hr />
        {wishlistProducts.length === 0 ? (
          <div className="empty-wishlist">
            <p>Your wishlist is empty</p>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
          </div>
        ) : (
          wishlistProducts.map((item) => {
            return (
              <div key={item.id}>
                <div className="wishlist-items-format">
                  <img src={item.image} alt={item.name} onClick={() => navigate(`/product/${item.id}`)} />
                  <p>{item.name}</p>
                  <p>${item.new_price}</p>
                  <div className="wishlist-actions">
                    <button className="add-to-cart" onClick={() => handleAddToCart(item.id)}>
                      Add to Cart
                    </button>
                    <button className="remove" onClick={() => removeFromWishlist(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })
        )}
      </div>

      {wishlistProducts.length > 0 && (
        <div className="wishlist-checkout">
          <div className="wishlist-checkout-items">
            <p>Total Items: {getTotalWishlistItems()}</p>
            <button className="checkout-button" onClick={() => navigate('/cart')}>
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;      







