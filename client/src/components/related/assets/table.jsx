import React, { useState } from 'react';

const Table = ({currentProduct, selectedProduct, features}) => {

  console.log('feature list and products: ', currentProduct, selectedProduct, features);

  return (
    <div>
      <table >
        <thead>
          <tr>
            <th>features</th>
            {/* <th>{currentProduct.name}</th>
            <th>{selectedProduct.name}</th> */}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) =>
          <tr key={index}>
            <td>{currentProduct.features[feature]}</td>
            <td>{feature}</td>
            <td>{selectedProduct.features[feature]}</td>
          </tr>

          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table;