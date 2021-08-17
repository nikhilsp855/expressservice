import React, { useState, useEffect } from 'react';
import Datatable from './DataTable';
import './datastyle.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

async function getServiceProvidersList(accessToken){

  const res = await fetch("http://localhost:4000/serviceProviders/getSPList",{
          method : "GET",
          headers : {
            "Authorization":"Bearer "+accessToken,
            "Content-Type" : "application/json"
          }
        });
    
        const data = await res.json();
        console.log("data.SPList = ",data.SPList);
        /*if(data.status(200)) {
    
          alert("Login successfull");
          console.log("Login successfull")
        }else if(data.status(202)) {
    
          alert("Login unsuccessfull");
          console.log("Login unsuccessfull")
        }*/
    
        if(data) {
    
            //console.log("data.pendingCustomerList = ",data.pendingCustomerList);
            return data.SPList;
        
        }
        return [];
}

export default function ServiceFilter(props) {
  const [data, setData] = useState([                             //customer data
    {"id":"101","name":"Ammar Habib","Username":"Ammar","email":"Ammar@bazinga.com","Contact":"99745"},
    {"id":"102","name":"Ishwar More","Username":"Ishwar","email":"Ishwar@bazinga.com","Contact":"99745"},
    {"id":"103","name":"Kshitij Patil","Username":"Kshitij","email":"Kshitij@bazinga.com","Contact":"99745"},
    {"id":"104","name":"Manish Choudhary","Username":"Manish","email":"Manish@bazinga.com","Contact":"99745"},
    {"id":"105","name":"Nikhil Patil","Username":"Nikhil","email":"Nikhil@bazinga.com","Contact":"99745"},

  ]);            
  const [q, setQ] = useState('');


  /*
  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);
*/

useEffect(async () => {
  await getServiceProvidersList(props.accessToken)
    .then((result) => setData(result));
}, []);



// Searching by firstname
  function search(rows) {
      return rows.filter(row => row.name.toLowerCase().indexOf(q)> -1)
  }
/*
  return (
    <div>
      <div className='card card-header'>
        Search:<input className='card card-header' type='text' value={q}
         onChange={(evt) => setQ(evt.target.value)} style={{width:'20rem',height:'2rem'}}/>
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
  */

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
          {data.map((row) => (
            <tr>
              {row.map((ele) => (
                <td>{ele}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
