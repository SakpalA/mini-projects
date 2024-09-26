import React from 'react'
import './wishlist.css'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart  } from "react-icons/fa";

const ProductList = ({products, wishlist, toggleWishlist}) => {
  return (
    <div>
        {products && products.map(product => (
            <div 
            key={product.id}
            className='prod-div'>
                <h2>{product.title}</h2>
                <button onClick={() => toggleWishlist(product)}>
                {wishlist.includes(product) ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>
        ))}
    </div>
  )
}

export default ProductList