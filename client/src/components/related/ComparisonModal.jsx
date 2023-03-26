import React, {useState, useEffect} from 'react';
import RelatedLib from './assets/Stylesheet.jsx';
import Modal from 'react-modal';
import Table from './assets/table.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';

Modal.setAppElement('#root');

const ComparisonModal = ({products, isOpen, onClose}) => {
  const [productList, setProductList] = useState([]);
  const [features, setFeatures] = useState([]);

  const getAllFeatures = (product1, product2) => {
    let features = new Set();
    let combined = [
      ...product1.features,
      ...product2.features
    ];
    for (let feat of combined) {
      features.add(feat.feature)
    }
    setFeatures([...features]);
  }

  const formatData = (product) => {
    let newDataFormat = {
      'name': product.name,
      'id': product.id,
      'features': getCharacteristics(product)
    };
    return newDataFormat;
  }

  const getCharacteristics = (product) => {
    let characteristics = {};
    for (let feat of product.features) {
      characteristics[feat.feature] = feat.value;
    }
    return characteristics;
  }

  const formatAll = (products) => {
    let data = [];
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
    style={{
      content: {
        top: '200px',
        left: '300px',
        right: '300px',
        bottom: '200px',
      }
    }}
    >
      <StyleLib.h5>Comparing</StyleLib.h5>
      <div className='modal-body'>
        <Table currentProduct={productList[0]} selectedProduct={productList[1]} features={features}/>
      </div>
    </Modal>
  )
}

export default ComparisonModal;
