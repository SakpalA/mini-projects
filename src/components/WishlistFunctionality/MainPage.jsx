import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from './ProductList'
import WishlistComp from './WishlistComp'
import AddProduct from './AddProduct'


const MainPage = () => {
    const [products, setProducts] = useState([])
    // console.log("Products", products)
    const [wishlist, setWishlist] = useState([])
    // console.log(wishlist)
    const [cart, setCart] = useState([])
    // console.log(cart)

    useEffect(() => {
        axios.get('https://appy.trycatchtech.com/v3/chitale_foods/product_list?category_id=1')
            .then(res =>
                setProducts(res.data)
                // console.log(res.data)
            )
            .catch(err => console.error("Error fetching product:", err))
    }, [])

    const toggleWishlist = (product) => {
        // The function first checks if the product is already in the wishlist state array.
        // The includes method checks if the specific product object exists within the wishlist array. It returns true if the product is found and false otherwise.
        if (wishlist.includes(product)) {
            // If the product is found in the wishlist (i.e., wishlist.includes(product) is true), the function removes it.
            // filter creates a new array containing all the items in the wishlist except the one that matches the product being toggled.
            // item => item !== product is a callback function that filter uses to include only those items in the new array that do not match the product. This effectively removes the product from the wishlist.
            setWishlist(wishlist.filter(item => item !== product))
        } else {
            // If the product is not found in the wishlist (i.e., wishlist.includes(product) is false), the function adds it to the wishlist.
            // The spread operator ...wishlist is used to copy the current items in the wishlist into a new array.
            // product is then added to the end of this new array, updating the state to include the new product.
            setWishlist([...wishlist, product])
        }
    }

    const clearWishlist = () => {
        setWishlist([]);
    }

    const addToCart = () => {
        setCart([...cart, ...wishlist])
        setWishlist([])
    }

    // cart.filter(...): The filter method creates a new array that includes only those items for which the provided condition is true.
    // Condition: The condition here is item !== product, meaning the filter function will include only those items in the new array that are not equal to the product being removed.
    const removeFromCart = (product) => {
        setCart(cart.filter(item => item !== product))
    }
    return (
        <div>
            <h2>Product List</h2>
            <ProductList
                products={products}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist} />

            <WishlistComp
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                clearWishlist={clearWishlist}
                addToCart={addToCart} />

            <AddProduct
                cart={cart}
                removeFromCart={removeFromCart} />
        </div>
    )
}

export default MainPage