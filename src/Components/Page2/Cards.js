import React from 'react';
import './Demo.scss';
import CardItem from './CardItem';
import { Details } from '@material-ui/icons';

class Cards extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      picsList : new Array(this.props.details.length)
    }
    
  }

  async getSPProfileImage(accessToken,profilePic){
	
    //console.log("profilePic = ",profilePic);
    //console.log("accessToken = ",accessToken);
		const res = await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails/retrieveSPImage",{
		  method : "POST",
		  headers : {
			"Authorization":"Bearer "+accessToken,
      "Content-Type" : "application/json"
		  },
      body : JSON.stringify({
        profilePic : profilePic
    }) 
      
		})

		const data = await res.json();
    

    console.log("data in cards = ",data);
    	if(data) {

        	//console.log("data.customerList = ",data.customerList);
        	return data.imageUrl;
    
    	}
    	return null;
	}

  /*
  async componentDidMount() {
    var tempPicsArr = [];
    
    this.props.details.map(item => tempPicsArr.push(this.getSPProfileImage(this.props.accessToken,item.profilePic)));
    this.setState({picsList : tempPicsArr});
    console.log("tempPicsArr = ",tempPicsArr);
  }*/

  async componentDidMount() {
    var tempPicsArr = await Promise.all(this.props.details.map(async (item)  => {
      return await this.getSPProfileImage(this.props.accessToken,item.profilePic)
    }
      ));
    this.setState({picsList : tempPicsArr});
    //console.log("tempPicsArr = ",tempPicsArr);
  }

  render(){
    console.log("this.state.picsList = ",this.state.picsList);
    
  return (
    <>
      <h1 className="top">Check out these service providers</h1>
      <div className="wrapper">
      {this.props.details.map((item, index) => (
        
            <CardItem
              src={this.state.picsList[index]}
              text={item.storeName}
              label={item.name}
              path='/booking'
              details={this.props.details}
            />
        
    ))}
      
    </div>
    </>
  );
     
}
}

export default Cards;