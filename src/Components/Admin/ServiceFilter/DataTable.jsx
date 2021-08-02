import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div class='table-style' >
    <table cellPadding={0} cellSpacing={0} 
    class="table table-hover table-bordered ">
      <thead>
        <tr class="table-dark">
          {data[0] && columns.map((heading) => <th>{heading}</th>)}
        </tr>
      </thead>
      <tbody className='table-success'>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
