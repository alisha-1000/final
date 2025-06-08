import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import wishlist_icon from "../../assets/wishlist_icon.svg"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    const { getTotalCartItems, getTotalWishlistItems } = useContext(ShopContext)

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" height="50px" />
                <p>Shopify</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/">Home</Link>{menu==="home" ? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/mens">Men</Link>{menu==="mens" ? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/womens">Women</Link>{menu==="womens" ? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/kids">Kids</Link>{menu==="kids" ? <hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/wishlist"><img src={wishlist_icon} alt="Wishlist" height="40px" /></Link>
                <div className="nav-wishlist-count">{getTotalWishlistItems()}</div>
                <Link to="/cart"><img src={cart_icon} alt="Cart" height="40px" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar