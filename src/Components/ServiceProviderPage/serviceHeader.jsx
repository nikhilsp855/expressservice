import React from 'react'
// import manish from './images/manish.jpg'
import profile from './images/profile.jpg'
import { Redirect } from "react-router-dom";

export class ServiceHeader extends React.Component {

	constructor(props) {
	
		super(props);
		this.state = {
			profileImg: profile,
			ServiceTitle: 'Name of Your Store',
			slogan : 'Slogan for your store',
			route : '/serviceprovider'
		}
	}

	changeProfilePic(profilePic) {

		this.setState({profileImg : profilePic});
	}

	changeServiceTitle(serviceTitle) {
		
		this.setState({ServiceTitle : serviceTitle});
	}

	changeSlogan(slogan) {

		this.setState({slogan : slogan});
	}

	async componentDidMount() {

		this.getProfileImage(this.props.accessToken)
          .then(image => this.setState({ profileImg:image}))
          .catch(e => console.log(e));

		this.getStoreNameAndSlogan(this.props.accessToken)
			.then(data => this.setState({ServiceTitle : data.data.storeName, slogan : data.data.slogan}))
			.catch(e => console.log(e));

	}

	async getProfileImage(accessToken){
	
		const res = await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails/retrieveImage",{
		  method : "GET",
		  headers : {
			"Authorization":"Bearer "+accessToken
		  }
		})

		const data = await res.json();
    

    	if(data) {

        	//console.log("data.customerList = ",data.customerList);
        	return data.imageUrl;
    
    	}
    	return profile;
	}

	async getStoreNameAndSlogan(accessToken){
	
		const res = await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails/getStoreNameAndSlogan",{
		  method : "GET",
		  headers : {
			"Authorization":"Bearer "+accessToken,
			"Content-Type" : "application/json"
		  }
		})

		const data = await res.json();
    

    	if(data) {

        	console.log("data = ",data);
        	return data;
    
    	}
		//console.log("helllll");
    	return {storeName : "",slogan : ""};
	}

	splogoutRef() {

		this.setState({route : '/'});
	}

    render() {

		if(this.state.route === '/serviceprovider') {

        return <div> 
            <div className="jumbotron text-center serviceHeader">
            
                <h2 className='companyName'>Express Service</h2>
				<h3 className='serviceProviderLogout' onClick={this.splogoutRef.bind(this)}>Logout</h3>
                <h1 className='sph1'><b>{this.state.ServiceTitle}</b></h1>
		        <h3 className='sph3'>{this.state.slogan}</h3>
				
                <img src={ this.state.profileImg } alt="profile image" className='spImage'/>
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
		}else {
			return <Redirect to={{pathname:this.state.route}}/>;
		}
    }
}