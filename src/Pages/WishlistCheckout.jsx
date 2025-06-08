import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import './CSS/WishlistCheckout.css'

const WishlistCheckout = () => {
    const { wishlistItems, all_product, removeFromWishlist, addToCart } = useContext(ShopContext)
    const navigate = useNavigate()

    const handleAddToCart = (itemId) => {
        addToCart(itemId)
        removeFromWishlist(itemId)
    }

    const handleAddAllToCart = () => {
        Object.keys(wishlistItems).forEach(itemId => {
            if (wishlistItems[itemId] > 0) {
                addToCart(parseInt(itemId))
                removeFromWishlist(parseInt(itemId))
            }
        })
        navigate('/cart')
    }

    const getTotalWishlistItems = () => {
        return Object.values(wishlistItems).reduce((total, count) => total + count, 0)
    }

    const getTotalAmount = () => {
        let total = 0
        all_product.forEach((item) => {
            if (wishlistItems[item.id] > 0) {
                total += item.new_price
            }
        })
        return total
    }

    const wishlistProducts = all_product.filter(item => wishlistItems[item.id] > 0)

    if (wishlistProducts.length === 0) {
        return (
            <div className="wishlist-checkout-page">
                <div className="wishlist-checkout-container">
                    <div className="empty-wishlist">
                        <h2>Your Wishlist is Empty</h2>
                        <p>Add some products to your wishlist to see them here</p>
                        <button onClick={() => navigate('/shop')}>Continue Shopping</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="wishlist-checkout-page">
            <div className="wishlist-checkout-container">
                <h1>Final Checkout</h1>
                
                <div className="wishlist-summary">
                    <div className="summary-header">
                        <h2>Your Wishlist Items</h2>
                        <p>Total Items: {getTotalWishlistItems()}</p>
                    </div>

                    <div className="wishlist-items">
                        {wishlistProducts.map((item) => (
                            <div key={item.id} className="checkout-item">
                                <img src={item.image} alt={item.name} onClick={() => navigate(`/product/${item.id}`)} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p className="price">${item.new_price}</p>
                                </div>
                                <div className="item-actions">
                                    <button className="add-to-cart" onClick={() => handleAddToCart(item.id)}>
                                        Add to Cart
                                    </button>
                                    <button className="remove" onClick={() => removeFromWishlist(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="checkout-summary">
                        <div className="summary-row">
                            <span>Total Items:</span>
                            <span>{getTotalWishlistItems()}</span>
                        </div>
                        <div className="summary-row">
                            <span>Total Value:</span>
                            <span>${getTotalAmount().toFixed(2)}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Final Amount:</span>
                            <span>${getTotalAmount().toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="checkout-actions">
                        <button className="add-all-to-cart" onClick={handleAddAllToCart}>
                            Add All to Cart
                        </button>
                        <button className="continue-shopping" onClick={() => navigate('/shop')}>
                            Continue Shopping
                        </button>
                    </div>
                </div>

                <div className="checkout-instructions">
                    <h3>Checkout Instructions</h3>
                    <ul>
                        <li>Review all items in your wishlist</li>
                        <li>Click "Add to Cart" for individual items</li>
                        <li>Or use "Add All to Cart" to add everything at once</li>
                        <li>After adding to cart, you can proceed to payment</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WishlistCheckout 