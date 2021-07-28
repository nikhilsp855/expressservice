import React from 'react'
import manish from './images/manish.jpg'

export class ServiceHeader extends React.Component {

    render() {

        return <div> 
            <div className="jumbotron text-center serviceHeader">
            
                <h2 className='companyName'>Express Service</h2>
                <h1 className='sph1'><b>Choudhary Furnitures</b></h1>
		        <h3 className='sph3'>We build, We decorate, We innovate</h3>

                <img src={ manish } alt="choudhary image" className='spImage'/>
	        </div>

            <div className='stickyTop'>
            	
				<nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
  					<a className="navbar-brand" href="#">Home</a>
  					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    					<span className="navbar-toggler-icon"></span>
  					</button>
  					<div className="collapse navbar-collapse" id="collapsibleNavbar">
    					<ul className="navbar-nav">
      						<li className="nav-item">
        						<a className="nav-link" href="#">Portfolio</a>
      						</li>
      						<li className="nav-item">
        						<a className="nav-link" href="#">Services</a>
      						</li>
      						<li className="nav-item">
        						<a className="nav-link" href="#">About Us</a>
      						</li>    
      						<li className="nav-item">
        						<a className="nav-link" href="#">Contact Us</a>
      						</li>    
    					</ul>
  					</div>  
				</nav>

            </div>

        </div>
    }
}