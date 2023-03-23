import React from 'react';

const Table = ({data}) => {

console.log('data received by table: ', data);
  return (
    <div>
      <table>
        <tc>
          <th>Current Product</th>
          <th>Characteristics</th>
          <th>Related Product</th>
        </tc>

      </table>
    </div>
  )
}

export default Table;