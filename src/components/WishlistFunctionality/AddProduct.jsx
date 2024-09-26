import React from 'react'

const AddProduct = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h2>AddProduct</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div>
                    {cart.map(product => (
                        <div
                            key={product.id}
                            className='prod-div'>
                            <h1>{product.title}</h1>
                            <p>{product.price}</p>
                            <button onClick={() => removeFromCart(product)}>Romove</button>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default AddProduct