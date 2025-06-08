import React, {createContext, useState} from "react";
import all_product from "../assets/all_product";
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let index=0;index < all_product.length+1;index++){
       cart[index] = 0
    } return cart;
}

const getDefaultWishlist = () => {
    let wishlist = {};
    for(let index=0;index < all_product.length+1;index++){
       wishlist[index] = 0
    } return wishlist;
}

const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
  
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
  
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                if(itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItems = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const addToWishlist = (itemId) => {
        setWishlistItems((prev) => ({...prev, [itemId]: 1}));
    }

    const removeFromWishlist = (itemId) => {
        setWishlistItems((prev) => ({...prev, [itemId]: 0}));
    }

    const getTotalWishlistItems = () => {
        let totalItem = 0;
        for (const item in wishlistItems) {
            if (wishlistItems[item] > 0) {
                totalItem += wishlistItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
        all_product,
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        getTotalCartItems,
        getTotalCartAmount,
        getTotalWishlistItems
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;