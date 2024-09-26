import React from 'react'

const WishlistComp = ({wishlist, toggleWishlist, clearWishlist, addToCart}) => {
  return (
    <div>
        <h2>Wishlist</h2> 
        {wishlist.length === 0 ? (
            <p>Wishlist is Empty</p>
        ) : (
            <div>
                {wishlist.map(product => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <button onClick={() => toggleWishlist(product)}>
                            Remove from wishlist
                        </button>
                    </div>
                ))}
                <button onClick={clearWishlist}>Clear Wishlist</button>
                <button onClick={addToCart}>Add All to Cart</button>
            </div>
        )}

    </div>
  )
}

export default WishlistComp