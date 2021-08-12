import React, { Component } from 'react'
export default class NewRequests extends Component {

    constructor(){
        super()
        this.state = {
            current:[],                     //Deleted Item is stored here
            customers:[
                {id:'100',name:'Emma',service:'Motor Installation',date:'06/06/2021',contact:'12345',},
                {id:'100',name:'Max',service:'Wash Basin Installation',date:'06/06/2021',contact:'12345',},
                {id:'100',name:'Peter',service:'Water Tank Installation',date:'06/06/2021',contact:'12345',},
            ]
        }
    }

    onAccept(item) {
        this.setState(prevState => ({
            current:  prevState.customers.filter(p => p === item),       //Deleted Item is set here
          customers: prevState.customers.filter(p => p !== item)         //item is deleted => new list
        }), 
        () => console.log("Deleted Item",this.state.current));     
        
    }

     onDeny(item) {
        this.setState(prevState => ({
            current:  prevState.customers.filter(p => p === item),       //Deleted Item is set here
          customers: prevState.customers.filter(p => p !== item)         //item is deleted
        }), 
        () => console.log("Deleted Item",this.state.current));     
        
      }

    render() {
        return (
            <div>
            <h3 className='card card-header border-top'>New Customer Requests</h3> 
            <div className='mt-4'>
                {this.state.customers.map(customer=>(
                    <div className='d-flex accept-deny-list rounded'>
                        <p class='accept-deny-list-item'> <b>Customer Name </b> : {customer.name}   </p>
                        <p class='accept-deny-list-item'> <b>Service Requirement:</b>  {customer.service}  </p>
                        <p class='accept-deny-list-item'> <b>On Date :</b>  {customer.date}   </p>
                        <p class='accept-deny-list-item'> <b>Contact :</b>  {customer.contact}   </p>
                        <button className='btn btn-success mt-5 '  
                        onClick={() => this.onAccept(customer)}  >Accept </button>
                        <button className='btn btn-danger mt-5'
                         onClick={() => this.onDeny(customer)}  >Deny </button>
                    </div>
                ))}
                <h3 className='card card-header border-top' >Recently Processed Customer</h3>
                {this.state.current.map(current=>(
                    <div className='d-flex accept-deny-list rounded btn-info'>
                        <p class='accept-deny-list-item'> <b>Customer Name </b> : {current.name}   </p>
                        <p class='accept-deny-list-item'> <b>Service Requirement:</b>  {current.service}  </p>
                        <p class='accept-deny-list-item'> <b>Contact :</b>  {current.contact}   </p>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}

