import { CenterFocusStrong } from '@material-ui/icons';
import React, { Component } from 'react';

export default class NewSps extends Component {
    constructor(props){
        super(props)
        this.state = {
            current:[],                     //Deleted Item is stored here
            sps : []
            /*[
                {id:'101',name:'xyz',location:'Pune',date:'06/06/2021',contact:'99156',},
                {id:'102',name:'abc',location:'Banglore',date:'06/06/2021',contact:'99156',},
                {id:'103',name:'pqr',location:'Mumbai',date:'06/06/2021',contact:'99156',},
            ]*/
        }        
    }

    async componentDidMount() {

        console.log("this.props.accessToken = ",this.props.accessToken);
        this.getPendingSPList(this.props.accessToken)
          .then(elements => this.setState({ sps:elements }))
          .catch(e => console.log(e));
    }

    async getPendingSPList(accessToken){

        //console.log("getPendingCustomerList called");
        //console.log("accessToken : ",accessToken);
    
    
        const res = await fetch("http://localhost:4000/admin/pendingSP",{
          method : "GET",
          headers : {
            "Authorization":"Bearer "+accessToken,
            "Content-Type" : "application/json"
          }
        });
    
        const data = await res.json();
        console.log("data = ",data);
        /*if(data.status(200)) {
    
          alert("Login successfull");
          console.log("Login successfull")
        }else if(data.status(202)) {
    
          alert("Login unsuccessfull");
          console.log("Login unsuccessfull")
        }*/
    
        if(data) {
    
            //console.log("data.pendingCustomerList = ",data.pendingCustomerList);
            return data.pendingSPList;
        
        }
        return [];
    }

    async removeSP(accessToken,id) {

        await fetch("http://localhost:4000/admin/pendingSP/removeSP",{
                method : "POST",
                headers : {
                    "Authorization":"Bearer "+accessToken,
                    "Content-Type" : "application/json" 
                },
                body : JSON.stringify({
                    id : id
                })
        })
    }

    async addSP(accessToken,newUser) {

        console.log("newUser at addSubService = ",newUser)
        await fetch("http://localhost:4000/serviceProviders/addSP",{
                method : "POST",
                headers : {
                    "Authorization":"Bearer "+accessToken,
                    "Content-Type" : "application/json" 
                },
                body : JSON.stringify({
                    newCustomer : newUser
                })
        });
    }

    onAccept(item) {
        this.setState(prevState => ({
            current:  prevState.sps.filter(p => p === item),       //Deleted Item is set here
            sps: prevState.sps.filter(p => p !== item)         //item is deleted => new list
        }), 
        () => console.log("Deleted Item",this.state.current));     
        
        this.removeSP(this.props.accessToken,item.id);
        this.addSP(this.props.accessToken,item);
    }

     onDeny(item) {
        this.setState(prevState => ({
            current:  prevState.sps.filter(p => p === item),       //Deleted Item is set here
          sps: prevState.customers.filter(p => p !== item)         //item is deleted
        }), 
        () => console.log("Deleted Item",this.state.current));     
        
        this.removeSP(this.props.accessToken,item.id);
      }

    render() {
        return (
            <div>
            <h3 className='card card-header' style={{textAlign:"center"}}>Recently Processed Service Provider</h3>
            {this.state.current.map(current=>(
                <div className='d-flex accept-deny-list rounded btn-info'>
                    <p class='accept-deny-list-item'> <b>Customer Name </b> : {current.name}   </p>
                    <p class='accept-deny-list-item'> <b>Service Requirement:</b>  {current.service}  </p>
                    <p class='accept-deny-list-item'> <b>Contact :</b>  {current.contact}   </p>
                </div>
            ))}

            <h3 className='card card-header border-top'>New Service Providers Regestered</h3> 
            <div className='mt-4'>
                {this.state.sps.map(sp=>(
                    <div className='d-flex accept-deny-list rounded' key={sp.id}>
                        <p class='accept-deny-list-item'> <b>Customer Name </b> : {sp.name}   </p>
                        <p class='accept-deny-list-item'> <b>Service Requirement:</b>  {sp.location}  </p>
                        <p class='accept-deny-list-item'> <b>On Date :</b>  {sp.date}   </p>
                        <p class='accept-deny-list-item'> <b>Contact :</b>  {sp.contact}   </p>
                        <button className='btn btn-success mt-5 '  
                        onClick={() => this.onAccept(sp)}  >Accept </button>
                        <button className='btn btn-danger mt-5'
                         onClick={() => this.onDeny(sp)}  >Deny </button>
                    </div>
                ))}
                
            </div>
        </div>
        )
    }
}
