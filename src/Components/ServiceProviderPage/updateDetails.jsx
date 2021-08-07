// import PreviewImg from './UpdateDetailsComp/PreviewImg';
import profile from './images/profile.jpg'
import React, { Component } from 'react'
import './UpdateDetailsComp/updatedetails.css'
import { UpdateHome } from './UpdateDetailsComp/UpdateService/UpdateHome'
import { AddUser } from './UpdateDetailsComp/UpdateService/AddUser'
import { EditUser } from './UpdateDetailsComp/UpdateService/EditUser'
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider } from './UpdateDetailsComp/Context/GlobalState'

export class updateDetails extends Component {
    
    constructor(){
        super()
        this.state = {
            profileImg: profile,
        }
    }
    

    // updateImg(val){
    //     this.setState({profileImg : val})
    // }

    imageHandler = (evt) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(evt.target.files[0])
      };

    render() {

        return (
            <div className='upd-img'>
                Update Details
                <h1>Update Details</h1>
                <label className="card card-header">Update Profile Image:</label>
                <div className="img-container">
                    <div className="img-holder">
                        <img src={ this.state.profileImg } alt="profile image" className='spImage'/>         
                     </div>
                    <input type="file" name='Image-upload' id='inp-img' accept='/image/*.jpg' 
                    onChange={this.imageHandler} />
                </div>
                {/* <button onClick={()=>{this.props.data.updateImg(this.state.profileImg)}}>Change Image</button> */}
                {/* <PreviewImg data={
                    {previmg : this.state.profileImg ,
                    updateImg : this.updateImg.bind(this) }
                    } /> */}
                 <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
                    <GlobalProvider>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path ='/serviceprovider/updateDetails/' component = {UpdateHome}/>
                                <Route path ='/serviceprovider/updateDetails/add' component = {AddUser}/>
                                <Route path ='/serviceprovider/updateDetails/edit/:id' component = {EditUser}/>
                            </Switch>
                        </BrowserRouter>
                    </GlobalProvider> 
                </div>   
            </div>
        )
    }
}

export default updateDetails
