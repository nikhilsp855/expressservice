import React from 'react'
import {CartProvider, cartProvider} from "react-use-cart";
import Cart from '../Components/Page2/Cart';
import MyCart from '../Components/Page2/MyCart';
import Navbar from '../Components/Page2/Navbar';
import Footer from '../Components/Page2/Footer';
function Booking() {
    return (
        <div>
            <Navbar/>

            <CartProvider>
            <Cart/>
            <MyCart/>
            </CartProvider>

            <Footer/>
            
        </div>
    )
}

export default Booking
