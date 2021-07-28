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

class Home extends React.Component{
  render(){
    const mystyle={
      marginTop:"0px",
    };
    return (
      <div className='hmbody'>
        
        <div className="header">
          <ul className='hmul'>
            <img className="logo hmimg" src={logo} width="60" alt="home" height="60"/>
            <li className='hmli'><a href="#home">Logout</a></li>
            <li className='hmli'><a href="#about">Home</a></li>
          </ul>
        </div>
        
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
