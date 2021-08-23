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
import './myStyle.css'

export class updateDetails extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            profileImg: profile,
            accessToken: this.props.accessToken
        };

        this.storeNameRef = React.createRef();
        this.sloganNameRef = React.createRef();
    }
    

    // updateImg(val){
    //     this.setState({profileImg : val})
    // }

   /* async uploadImage(reader) {

        await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails/uploadImage",{
                method : "POST",
                headers : {
                    "Authorization":"Bearer "+this.state.accessToken,
                    "Content-Type" : "application/json" 
                },
                body : new FormData().append('file',reader.result)
        });

    }*/

/*
    imageHandler = (evt) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result});

            //this.uploadImage(reader);
            
            //console.log("reader.result = ",reader.result);
          }
        }
        reader.readAsDataURL(evt.target.files[0])
      };
*/


      addFile(event) {
        var formData = new FormData();


        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result});

            //this.uploadImage(reader);
            
            //console.log("reader.result = ",reader.result);
            this.props.changeProfileImage(reader.result);
          }
        }
        reader.readAsDataURL(event.target.files[0]);

        



        formData.append("file", event.target.files[0]);
        //formData.append('name', 'some value user types');
        //formData.append('description', 'some value user types');
        //console.log("event.target.files[0] = ",event.target.files[0]);
    
        fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails/uploadImage", {
            method: 'POST',
            headers: {
                "Authorization":"Bearer "+this.state.accessToken
                //'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        /*.then((response) => response.json())
        .then((data) => {
            this.setState({images: data.images, isLoading: false});
            this.props.updateImages(data.images);
        })
        .catch(error => this.setState({error, isLoading: false}));*/
    }
    
    setStoreName() {

        fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails/setStoreName", {
            method : 'POST',
            headers : {
                "Authorization":"Bearer "+this.state.accessToken,
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                storeName : this.storeNameRef.current.value
            })       
        })
        
        this.props.changeServiceTitle(this.storeNameRef.current.value);
    }

    setSloganName() {

        //console.log("this.sloganNameRef.current.value = ",this.sloganNameRef.current.value);
        fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails/setSloganName", {
            method : 'POST',
            headers : {
                "Authorization":"Bearer "+this.state.accessToken,
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                slogan : this.sloganNameRef.current.value
            })       
        })

        this.props.changeSlogan(this.sloganNameRef.current.value);
        
        //console.log("after");
    }


    render() {

        return (
            <div className='upd-img'>
                <h1>Update Details</h1>
                <label className="card card-header">Update Profile Image:</label>
                <div className="img-container">
                    <div className="img-holder">
                        <img src={ this.state.profileImg } alt="profile image" className='spImage'/>         
                     </div>
                  { /* <input type="file" name='Image-upload' id='inp-img' accept='/image/*.jpg' 
                    onChange={this.imageHandler} />*/}
                </div>
                
                <div className="updatedata">
                
                <div>
                    <form encType="multipart/form-data" action="">
                        <input id="id-for-upload-file" className="imgdata" onChange={this.addFile.bind(this)} type="file"/>
                    </form>
                </div>

                <div>

                    <input type="text" className="storedata" placeholder="Enter Store name" ref={this.storeNameRef}/>
                    <button  class="btn btn-warning" onClick={this.setStoreName.bind(this)}>Submit</button>
                </div>

                <div>

                    <input type="text" className="storedata" placeholder="Enter Slogan for your store" ref={this.sloganNameRef}/>
                    <button className="btn btn-info" onClick={this.setSloganName.bind(this)}>Submit</button>
                </div>

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
                                <Route exact path ='/serviceprovider/updateDetails/' >
                                    <UpdateHome accessToken={this.state.accessToken}/>
                                </Route>

                                <Route path ='/serviceprovider/updateDetails/add'>
                                    <AddUser accessToken={this.state.accessToken}/>
                                </Route>
                                
                                <Route path ='/serviceprovider/updateDetails/edit/:id'>
                                    <EditUser accessToken={this.state.accessToken}/>
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </GlobalProvider> 
                </div>   
            </div>
        )
    }
}

export default updateDetails
