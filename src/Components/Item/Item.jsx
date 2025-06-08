import React, { useContext } from 'react'
import "./Item.css"
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {
    const { addToCart, addToWishlist, removeFromWishlist, wishlistItems } = useContext(ShopContext);
    const { id, name, image, new_price, old_price } = props;
    const navigate = useNavigate();

    const isWishlisted = wishlistItems[id] > 0;

    return (
        <div className='item'>
            <Link to={`/product/${id}`}><img onClick={() => navigate(`/product/${id}`)} src={image} alt="" /></Link>
            <p>{name}</p>
            <div className='item-prices'>
                <div className="item-price-new">
                    ${new_price}
                </div>
                <div className="item-price-old">
                    ${old_price}
                </div>
            </div>
            <div className="item-buttons">
                <button className="add-to-cart" onClick={() => addToCart(id)}>Add to Cart</button>
                {isWishlisted ? (
                    <button className="remove-from-wishlist" onClick={() => removeFromWishlist(id)}>
                        Remove from Wishlist
                    </button>
                ) : (
                    <button className="add-to-wishlist" onClick={() => addToWishlist(id)}>
                        Add to Wishlist
                    </button>
                )}
            </div>
        </div>
    )
}

export default Item