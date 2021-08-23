import React, { Component } from 'react'
export default class NewRequests extends Component {

    constructor(props){
        super(props)
        this.state = {
            current:[],                     //Deleted Item is stored here
            customers:[]
            /*[
                {id:'100',name:'Emma',service:'Motor Installation',date:'06/06/2021',contact:'12345',},
                {id:'100',name:'Max',service:'Wash Basin Installation',date:'06/06/2021',contact:'12345',},
                {id:'100',name:'Peter',service:'Water Tank Installation',date:'06/06/2021',contact:'12345',},
            ]*/
        }
    }

    async componentDidMount() {

        this.getPendingCustomerList(this.props.accessToken)
          .then(elements => this.setState({ customers:elements }))
          .catch(e => console.log(e));
    }

    async getPendingCustomerList(accessToken){

        console.log("getPendingCustomerList called");
        console.log("accessToken : ",accessToken);
    
    
        const res = await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/pendingCustomer",{
          method : "GET",
          headers : {
            "Authorization":"Bearer "+accessToken
          }
        });
    
        const data = await res.json();
        /*if(data.status(200)) {
    
          alert("Login successfull");
          console.log("Login successfull")
        }else if(data.status(202)) {
    
          alert("Login unsuccessfull");
          console.log("Login unsuccessfull")
        }*/
    
        if(data) {
    
            console.log("data.pendingCustomerList = ",data.pendingCustomerList);
            return data.pendingCustomerList;
        
        }
        return [];
    }

    async removeCustomer(accessToken,id) {

        await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/pendingCustomer/removeCustomer",{
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

    async addCustomer(accessToken,newUser) {

        console.log("newUser at addSubService = ",newUser)
        await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/addCustomer",{
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
            current:  prevState.customers.filter(p => p === item),       //Deleted Item is set here
          customers: prevState.customers.filter(p => p !== item)         //item is deleted => new list
        }), 
        () => console.log("Deleted Item",this.state.current));
         
        console.log(item.id)
        this.removeCustomer(this.props.accessToken,item.id);
        this.addCustomer(this.props.accessToken,item);
            
        
    }

     onDeny(item) {
        this.setState(prevState => ({
            current:  prevState.customers.filter(p => p === item),       //Deleted Item is set here
          customers: prevState.customers.filter(p => p !== item)         //item is deleted
        }), 
        () => console.log("Deleted Item",this.state.current));     
        
        this.removeCustomer(this.props.accessToken,item.id);

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
                        <p class='accept-deny-list-item'> <b>On Date :</b>  {customer.date} {customer.time}  </p>
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

