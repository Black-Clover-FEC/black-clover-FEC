import React, { useState } from 'react';
import RelatedLib from './Stylesheet.jsx'
import StyleLib from '../../../assets/Stylesheet.jsx'

const Table = ({currentProduct, selectedProduct, features}) => {

  console.log('feature list and products: ', currentProduct, selectedProduct, features);

  return (
    <div>
      <RelatedLib.table>
        <thead>
          <RelatedLib.tr>
            <RelatedLib.th>Currently Viewed Product</RelatedLib.th>
            <RelatedLib.th></RelatedLib.th>
            <RelatedLib.th>Selected Related Product</RelatedLib.th>
          </RelatedLib.tr>
        </thead>
        <tbody>
          {features.map((feature, index) =>
          <RelatedLib.tr key={index}>
            <RelatedLib.td>{currentProduct.features[feature]}</RelatedLib.td>
            <RelatedLib.td>{feature}</RelatedLib.td>
            <RelatedLib.td>{selectedProduct.features[feature]}</RelatedLib.td>
          </RelatedLib.tr>
          )}
        </tbody>
      </RelatedLib.table>
    </div>
  )
}

export default Table;