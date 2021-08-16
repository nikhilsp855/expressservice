import React from 'react';
import Navbar from '../Components/Page2/Navbar';
import Cards from '../Components/Page2/Cards';
import Footer from '../Components/Page2/Footer';
import HeroSection from '../Components/Page2/HeroSection';

const HomeP=(props)=> {
    console.log(props.details)
    return (
        <div>
            <Navbar/>
            
            <Cards details={props.details} />
            <Footer/>
        </div>
    )
}

export default HomeP
