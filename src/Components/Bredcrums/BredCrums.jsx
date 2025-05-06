import React from 'react';
import "./BredCrums.css"; // Keeping the original CSS file name
import arrow_icon from "../../assets/arrow_icon.png";

const BredCrums = (props) => {
  const { product } = props;

  return (
    <div className='bredcrums'>
      Home <img src={arrow_icon} alt="Arrow icon" height="10px" /> 
      SHOP <img src={arrow_icon} alt="Arrow icon" height="10px" />
      {product.category} <img src={arrow_icon} alt="Arrow icon" height="10px" /> 
      {product.name}
    </div>
  );
}

export default BredCrums;