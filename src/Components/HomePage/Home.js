import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';
import logo from './logo.png';
import grooming from './grooming.jpg';
import appliance from './appliance.jpeg';
import plumber from './plumber.webp';
import pest from './depositphotos_106131480-stock-photo-pesticide-worker-with-thumbs-up.jpg';
import cleaning from './images (1).jpg';
import painter from './painting-contractors.jpg';
import carpenter from './images.jpg';
import electrician from './istockphoto-511990814-612x612.jpg';
import Footer from '../Page2/Footer';

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export class HomeHeader extends React.Component {
  
  constructor(props) {

    super(props);
  }

  render(){
    
    if(this.props.payload){
      return <div className="header">
      
        <ul className='hmul'>
          <img className="logo hmimg" src={logo} width="60" alt="home" height="60"/>
          <li className='hmli'>{this.props.payload.name}</li>
          <li className='hmli' onClick={this.props.logoutUser}>Logout</li>
          <Link to="/"><li className='hmli'>Home</li></Link>
        </ul>
      </div>
    }else{
      return <div className="header">
        <ul className='hmul'>
          <img className="logo hmimg" src={logo} width="60" alt="home" height="60"/>
          <Link to="/login"><li className='hmli'>Login</li></Link>
          <Link to="/"><li className='hmli'>Home</li></Link>
        </ul>
      </div>
    }
  }
}

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      accessToken : this.props.location.state && this.props.location.state.accessToken,
      payload : this.props.location.state && parseJwt(this.props.location.state.accessToken)
    }
  }

  logoutUser() {

    this.setState({accessToken:null,payload:null});
  }

  render(){

    //console.log("In home accessToken = ",this.state.payload.name);
    const mystyle={
      marginTop:"0px",
    };
    return (
      <div className='hmbody'>
        
        <HomeHeader payload={this.state.payload} logoutUser={this.logoutUser.bind(this)}/>
        
        <div className="search1">
          <input className="search2" type="text" placeholder="search service"/>
          <button className="btn1">Search</button>
        </div>
          
        <div className="cards1">
          <div className="card_s">
            <img className="img_1" src={grooming} alt="Avatar"/>
            <div className="containers_text">
              <h4><b>Grooming</b></h4> 
            </div>
          </div>
          
          <div className="card_s">
            <img className="img_1" src={appliance} alt="Avatar"/>
            <div className="containers_text">
              <h4><b>Repair</b></h4> 
            </div>
          </div>
          
          <Link to="/service"><div className="card_s">
            <img className="img_1" src={plumber} alt="Avatar"/>
             <div className="containers_text">
            <h4 className="texts"><b>Plumber</b></h4>
            </div> 
          </div></Link>
          
          <div className="card_s">
            <img className="img_1" src={painter} alt="Avatar"/>
            <div className="containers_text">
              <h4><b>Painters</b></h4> 
            </div>
          </div>
          
          <div className="card_s">
            <img className="img_1" src={pest} alt="Avatar"/>
            <div className="containers_text">
              <h4><b>Pest Control</b></h4> 
            </div>
          </div>
          
          <div className="card_s">
            <img className="img_1" src={cleaning} alt="Avatar"/>
            <div className="containers_text">
              <h4><b>Cleaning</b></h4> 
            </div>
          </div>
          
          <div className="card_s">
            <img className="img_1" src={carpenter} alt="Avatar"/>
            <div className="containers_text">
              <h4><b>Carpenter</b></h4> 
            </div>
          </div>
          
          <div className="card_s">
            <img className="img_1" src={electrician} alt="Avatar"/>
            <div className="containers_text">
              <h4><b>Electrician</b></h4> 
            </div>
          </div>
        </div>
        <div className="foot">
        <Footer/>
        </div>
        
      </div>
    );
  }
}
export default Home;
