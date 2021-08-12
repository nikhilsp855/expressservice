import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Details } from '@material-ui/icons';

class Cards extends React.Component {
  constructor(props){
    super(props);
    
  }
  render(){
  return (
    <div className='cards'>
      <h1>Check out these service providers</h1>
      {this.props.details.map((item, index) => (
        <div className='cards__container' key={index}>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/plumber1.jpg'
              text='Good understanding to reach the most difficult parts of a system'
              label={item.name}
              path='/booking'
              details={this.props.details}
            />
          </ul>
        </div>
      </div>
    ))}
      
    </div>
  );
}
}

export default Cards;