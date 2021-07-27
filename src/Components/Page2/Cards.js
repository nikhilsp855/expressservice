import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these service providers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/plumber1.jpg'
              text='Good understanding to reach the most difficult parts of a system'
              label='Jitendra Choudhary'
              path='/services'
            />
            <CardItem
              src='images/plumber5.jpg'
              text='Physically flexible to reach the most difficult/isolated parts of a system'
              label='Aditya Patil'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/plumber3.jpg'
              text='Top level knowledge in assembling, modifying and fixing plumbing system'
              label='Shabad Khan'
              path='/services'
            />
            <CardItem
              src='images/plumber4.jpg'
              text='Demonstrated track record troubleshooting complex plumbing systems'
              label='Amarita Desai'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;