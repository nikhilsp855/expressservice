import React from 'react'
// import manish from './images/manish.jpg'
import profile from '../Images/profile.jpg'

export default class AdminHeader extends React.Component {

	state = {
		profileImg: profile,
		// ServiceTitle: 'Choudhary Furnitures'
	}

	

    render() {
        return <div> 
            <div className="jumbotron text-center adminHeader">
                <h2 className='companyName'>Express Service</h2>
		        <h3 className='sph3'>Admin</h3>
                <img src={ this.state.profileImg } alt="profile image" className='spImage'/>
	        </div>

            	
				


        </div>
    }
}