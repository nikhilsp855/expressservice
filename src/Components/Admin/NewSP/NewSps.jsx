import { CenterFocusStrong } from '@material-ui/icons';
import React, { Component } from 'react';

export default class NewSps extends Component {
    constructor(){
        super()
        this.state = {
            current:[],                     //Deleted Item is stored here
            sps :[
                {id:'101',name:'xyz',location:'Pune',date:'06/06/2021',contact:'99156',},
                {id:'102',name:'abc',location:'Banglore',date:'06/06/2021',contact:'99156',},
                {id:'103',name:'pqr',location:'Mumbai',date:'06/06/2021',contact:'99156',},
            ]
        }        
    }


    onAccept(item) {
        this.setState(prevState => ({
            current:  prevState.sps.filter(p => p === item),       //Deleted Item is set here
            sps: prevState.sps.filter(p => p !== item)         //item is deleted => new list
        }), 
        () => console.log("Deleted Item",this.state.current));     
        
    }

     onDeny(item) {
        this.setState(prevState => ({
            current:  prevState.sps.filter(p => p === item),       //Deleted Item is set here
          sps: prevState.customers.filter(p => p !== item)         //item is deleted
        }), 
        () => console.log("Deleted Item",this.state.current));     
        
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
                    <div className='d-flex accept-deny-list rounded'>
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
