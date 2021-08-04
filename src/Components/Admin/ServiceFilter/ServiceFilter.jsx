import React, { useState, useEffect } from 'react';
import Datatable from './DataTable';
import './datastyle.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function ServiceFilter() {
  const [data, setData] = useState([]);               //customer data
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

  const columns = data[0] && Object.keys(data[0]);
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
