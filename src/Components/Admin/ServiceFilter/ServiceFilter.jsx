import React, { useState, useEffect } from 'react';
import Datatable from './DataTable';
import './datastyle.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

async function getServiceProvidersList(accessToken){

  const res = await fetch("https://expressservicebackend.herokuapp.com/serviceProviders/getSPList",{
          method : "GET",
          headers : {
            "Authorization":"Bearer "+accessToken,
            "Content-Type" : "application/json"
          }
        });
    
        const data = await res.json();
        console.log("data.SPList = ",data.SPList);
        
    
        if(data) {
    
            //console.log("data.pendingCustomerList = ",data.pendingCustomerList);
            return data.SPList;
        
        }
        return [];
}

export class ServiceFilter extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      data : [],
      q : 0
    }
  }

  setData(data) {
    this.setState({data : data});
    //console.log("this.state.data = ",this.state.data)
  }

  async reFetch() {

    await getServiceProvidersList(this.props.accessToken)
      .then((result) => this.setData(result));
  }

  
async componentDidMount() {

  await getServiceProvidersList(this.props.accessToken)
    .then((result) => this.setData(result));
}


  render() {
  return (

    <div class='table-style' >
      
      <table cellPadding={0} cellSpacing={0} 
        class="table table-hover table-bordered ">
        
        <thead>
          <tr class="table-dark">
            {/* {data[0] && columns.map((heading) => <th>{heading}</th>)} */}
          </tr>
        </thead>
        <tbody className='table-success'>
          <tr>
            <th><h3>Name</h3></th>
            <th><h3>Store Name</h3></th>
            <th><h3>Email id</h3></th>
            <th><h3>Service Name</h3></th>
            <th><h3>City</h3></th>
          </tr>
          {this.state.data.map((row) => (
            <tr key={row._id}>
                <td>{row.name}</td>
                <td>{row.storeName}</td>
                <td>{row.email}</td>
                <td>{row.servname}</td>
                <td>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  }
}
