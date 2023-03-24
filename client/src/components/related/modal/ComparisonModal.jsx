import React, {useState, useEffect} from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import Modal from 'react-modal';
import Table from '../assets/table.jsx';

// TODO complete comparison modal when a user selects the 'star' action button
// in the related products list

Modal.setAppElement('#root');

const ComparisonModal = ({products, isOpen, onClose}) => {
  const [productList, setProductList] = useState([]);
  const [features, setFeatures] = useState([]);

  // const combineFeatureLists = () => {
  //   let currentProduct = products[0].details.features;
  //   let selectedProduct = products[1].details.features;
  //   let combined = [...currentProduct, ...selectedProduct];
  //   let data = {name: 'allFeatures', id: 1};

  //   // remove duplicates
  //   for (let k = 0; k < combined.length; k++) {
  //     for (let i = k + 1; i < combined.length; i++) {
  //       if (combined[k].feature === combined[i].feature) {
  //         combined.splice(i--, 1);
  //       }
  //     }
  //   }
  //   data.features = combined;
  //   return data;
  // }



  const getAllFeatures = (product1, product2) => {
    let mySet = new Set();
    let currentProduct = products[0].details.features;
    let selectedProduct = products[1].details.features;
    let combined = [...currentProduct, ...selectedProduct];
    for (let features of combined) {
      mySet.add(features.feature)
    }
    setFeatures([...mySet]);
  }

  //
  const formatData = (product) => {
    getCharacteristics(product);
    let newDataFormat = {
      'name': product.details.name,
      'id': product.details.id,
        // set a new property to the feature object
      // 'features': product.details.features
      'features': getCharacteristics(product)
    };
    return newDataFormat;
  }

  const getCharacteristics = (product) => {
    // iterate over product.details.features
    let characteristics = {};
    for (let feat of product.details.features) {
      characteristics[feat.feature] = feat.value;
    }
    return characteristics;
  }

  const formatAll = (products) => {
    let data = [];
    // let data = [getAllFeatures(products[0], products[1])];
    // data.push(combineFeatureLists());
    getAllFeatures(products[0], products[1])
    for (let product of products) {
      data.push(formatData(product));
    }
    setProductList(data);
  }

  return (
    <Modal
    isOpen={isOpen}
    onAfterOpen={() => formatAll(products)}
    onRequestClose={onClose}
    >
      <span>Comparing</span>
      <div className='modal-body'>
        <Table currentProduct={productList[0]} selectedProduct={productList[1]} features={features}/>
      </div>
    </Modal>
  )
}

export default ComparisonModal;
