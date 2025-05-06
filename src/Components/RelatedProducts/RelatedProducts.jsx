// src/Components/RelatedProducts/RelatedProducts.jsx
import React, { useState, useEffect } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import data_product from "../../assets/newcollections.js";  // Importing product data

const RelatedProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data (In case of real API calls)
    setTimeout(() => {
      setProducts(data_product);
      setIsLoading(false);
    }, 1000); // Simulate loading delay
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No related products available.</div>;
  }

  return (
    <div className="relatedproducts">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default RelatedProducts;