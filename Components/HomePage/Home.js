import React from 'react';
import './styles.css';
import logo from './logo.png';
import grooming from './grooming.jpg';
import appliance from './appliance.jpeg';
import plumber from './plumber.webp';
import pest from './depositphotos_106131480-stock-photo-pesticide-worker-with-thumbs-up.jpg';
import cleaning from './images (1).jpg';
import painter from './painting-contractors.jpg';
import carpenter from './images.jpg';
import electrician from './istockphoto-511990814-612x612.jpg';

class Home extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return (
         <div>
            <ul>
            <img src={logo} width="40" height="40"/>
            <li><a href="#home">Logout</a></li>
            <li><a href="#about">Home</a></li>
          </ul>
          <div className="search1">
            <input className="search2" type="text" placeholder="search service"/>
            <button className="btn1">Search</button>
          </div>
          <div className="card1">
          <div className="card">
            <img className="img1" src={grooming} alt="Avatar" width="100" height="100"/>
            <div className="container">
              <h4><b>Men's Grooming</b></h4> 
            </div>
          </div>
          <div className="card">
            <img className="img1" src={appliance} alt="Avatar" width="100" height="100"/>
            <div class="container">
              <h4><b>Appliance Repair</b></h4> 
            </div>
          </div>
          <div className="card">
            <img className="img1" src={plumber} alt="Avatar" width="100" height="118"/>
            <div className="container">
              <h4><b>Plumber</b></h4> 
            </div>
          </div>
          <div className="card">
            <img className="img1" src={painter} alt="Avatar" width="100" height="118">/
            <div className="container">
              <h4><b>Painters</b></h4> 
            </div>
          </div>
          <div className="card">
            <img className="img1" src={pest} alt="Avatar" width="100" height="118"/>
            <div className="container">
              <h4><b>Pest Control</b></h4> 
            </div>
          </div>
          <div className="card">
            <img className="img1" src={cleaning} alt="Avatar" width="100" height="100"/>
            <div className="container">
              <h4><b>Cleaning Services</b></h4> 
            </div>
          </div>
          <div className="card">
            <img className="img1" src={carpenter} alt="Avatar" width="100" height="118"/>
            <div className="container">
              <h4><b>Carpenter</b></h4> 
            </div>
          </div>
          <div className="card">
            <img className="img1" src={electrician} alt="Avatar" width="100" height="118"/>
            <div className="container">
              <h4><b>Electrician</b></h4> 
            </div>
          </div>
          </div>
         <div>
        <div className="footer-dark">
          <footer className="foot">
            <h3 style="margin-top: 0px;">About Us</h3>
            <h3>Review</h3>
            <h3>Work with Us</h3>
            <h3>Contact Information</h3>
          </footer>
          <footer>
              <hr/>
            <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a>
            </div>            
            <p className="copyright">Company Name © 2021</p>
        </footer>
        </div>
    </div>
        );
    }
}
export default Home;