import React from 'react';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className="heroimg" src='/images/background.jpg' alt="/19340" />
      <h1>Quality home services, on demand</h1>
      <p>Experienced, hand-picked Professinals to serve you at your doorstep</p>
      
    </div>
  );
}

export default HeroSection;