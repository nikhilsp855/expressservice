import React from 'react';
import Navbar from '../Components/Page2/Navbar';
import Cards from '../Components/Page2/Cards';
import Footer from '../Components/Page2/Footer';
import HeroSection from '../Components/Page2/HeroSection';

function HomeP() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default HomeP
