import React, {useEffect, useState} from 'react'
import {CartProvider, cartProvider} from "react-use-cart";
import Cart from '../Components/Page2/Cart';
import MyCart from '../Components/Page2/MyCart';
import Navbar from '../Components/Page2/Navbar';
import Footer from '../Components/Page2/Footer';
import {useLocation} from "react-router-dom";
const Booking=()=> {
    let location = useLocation();
    const[state1,setState]=useState([{}]);
    const[providers,setProvider]=useState();
    useEffect(() => {
        console.log(location.pathname); 
        console.log(location.state.detailss); 
        console.log(location.state.providers);
        setState(location.state.detailss);
        setProvider(location.state.providers)
     }, [location]);
     console.log(state1)
    return (
        <div>
            <Navbar/>

            <CartProvider>
            <Cart states={state1} providers={providers}/>
            <MyCart providers={providers}/>
            </CartProvider>

            <Footer/>
            
        </div>
    )
}

export default Booking
