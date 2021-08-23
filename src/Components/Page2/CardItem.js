import { ViewArray } from '@material-ui/icons';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './Demo.scss'

class CardItem extends React.Component {
  constructor(props) {
    super(props);

  }

  subservices = () => {
    let details = this.props.label
    console.log(this.props.details)
    console.log(this.props.label)
    console.log(this.props.src)

    let itemList = this.props.details.map((item) => {
      if (item.name === this.props.label) {
        var itemLists = item.subServices.map((items) => {
          return items;
        })
        this.props.history.push(
          {
            pathname: "/booking",
            state: { detailss: itemLists, providers: this.props.label }
          })
      }
    })

  }

  render() {
    return (
      <>
        <ul onClick={this.subservices.bind(this)}>
          <div className="card">
            <div className="card__body">
              <img src={this.props.src} class="card__image" />
              <h2 className="card__title">{this.props.label}</h2>
              <p className="card__description">{this.props.text}</p>
            </div>

            <button className="card__btn">View Services</button>
          </div>
        </ul>
      </>
    );
  }
}

export default withRouter(CardItem);