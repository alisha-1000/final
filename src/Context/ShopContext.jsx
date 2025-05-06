import React, { createContext, useState, useEffect } from "react";
import all_product from "../assets/all_product.js";
import CartItems from "../Components/CartItems/CartItems";

// Create the context for the shop
export const ShopContext = createContext(null);

// Function to set up the default cart with item counts initialized to 0
const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0; // Initialize cart with product ids as keys
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Effect to log cartItems whenever it changes (as state updates asynchronously)
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // Add item to cart by incrementing the count
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove item from cart by decrementing the count, ensuring count doesn't go below 0
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = prev[itemId] - 1;
      return { ...prev, [itemId]: newCount > 0 ? newCount : 0 };
    });
  };

  // Calculate total cart amount based on items in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Calculate total number of items in the cart
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  // Context value to be shared with children components
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;