import React, { useContext, useState } from 'react'
import "../CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  const [sort, setSort] = useState('default');

  // Filter by category
  let filtered = all_product.filter(item => props.category === item.category);

  // Sort logic
  if (sort === 'price-low-high') {
    filtered = [...filtered].sort((a, b) => a.new_price - b.new_price);
  } else if (sort === 'price-high-low') {
    filtered = [...filtered].sort((a, b) => b.new_price - a.new_price);
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-{filtered.length}</span> out of {filtered.length} products
        </p>
        <div className='shopcategory-sort'>
          <label htmlFor="sort-dropdown" style={{ marginRight: 8 }}>Sort by</label>
          <select
            id="sort-dropdown"
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{ padding: '6px 18px', borderRadius: 20, border: '1px solid #888', fontSize: 15 }}
          >
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
          <img src={dropdown_icon} alt="" height="20px" style={{ marginLeft: 8 }} />
        </div>
      </div>
      <div className="shopcategory-products">
        {filtered.map((item,i)=>(
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory