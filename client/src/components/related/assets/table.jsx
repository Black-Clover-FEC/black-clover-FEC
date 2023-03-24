import React, { useState } from 'react';
import api from '../../../lib/api.js';

const Table = ({currentProduct, selectedProduct, features}) => {

  // const [features, setFeatures] = useState([]);

  console.log('feature list and products: ', currentProduct, selectedProduct, features);
  // // const features = [...featureLists[0]];
  // // console.log('set: ', [...featureLists[0]]);
  // const getfeatures = () => {
  //   if (!featureLists) {
  //     return;
  //   } else {
  //     let list = [...featureLists[0]];
  //     console.log(list);
  //     setFeatures(list);
  //   }
  // }


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