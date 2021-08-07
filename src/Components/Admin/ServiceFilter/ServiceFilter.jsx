import React, { useState, useEffect } from 'react';
import Datatable from './DataTable';
import './datastyle.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function ServiceFilter() {
  const [data, setData] = useState([                              //customer data
    {"id":"101","name":"Ammar Habib","Username":"Ammar","email":"Ammar@bazinga.com","Contact":"99745"},
    {"id":"102","name":"Ishwar More","Username":"Ishwar","email":"Ishwar@bazinga.com","Contact":"99745"},
    {"id":"103","name":"Kshitij Patil","Username":"Kshitij","email":"Kshitij@bazinga.com","Contact":"99745"},
    {"id":"104","name":"Manish Choudhary","Username":"Manish","email":"Manish@bazinga.com","Contact":"99745"},
    {"id":"105","name":"Nikhil Patil","Username":"Nikhil","email":"Nikhil@bazinga.com","Contact":"99745"},

  ]);              
  const [q, setQ] = useState('');


  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);


// Searching by firstname
  function search(rows) {
      return rows.filter(row => row.name.toLowerCase().indexOf(q)> -1)
  }

  return (
    <div>
      <div>
        Search:<input type='text' value={q} onChange={(evt) => setQ(evt.target.value)} />
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
}
