import { ViewArray } from '@material-ui/icons';
import React from 'react';
import { withRouter } from 'react-router-dom';

class CardItem extends React.Component {
  constructor(props){
    super(props);
    
  }

subservices=()=>{
  let details=this.props.label
  console.log(this.props.details)
  console.log(this.props.label)

  let itemList=this.props.details.map((item)=>{
    if(item.name===this.props.label)
    {
      var itemLists=item.subServices.map((items)=>{
        return items;
      })
      this.props.history.push(
      {
        pathname:"/booking",
        state:{detailss:itemLists}
    })
    }
  })
  
}

render(){
  return (
    <>
      <li className='cards__item' onClick={this.subservices.bind(this)}>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={this.props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={this.props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{this.props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}
}

export default withRouter(CardItem);