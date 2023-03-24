import React, {useState, useEffect} from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import Modal from 'react-modal';
import Table from '../assets/table.jsx';

// TODO complete comparison modal when a user selects the 'star' action button
// in the related products list

Modal.setAppElement('#root');

const ComparisonModal = ({products, isOpen, onClose}) => {
  const [featureList, setFeatureList] = useState([]);

  const combineFeatureLists = () => {
    let currentProduct = products[0].details.features;
    let selectedProduct = products[1].details.features;
    let combined = [...currentProduct, ...selectedProduct];
    let data = {name: 'allFeatures', id: 1};

    // remove duplicates
    for (let k = 0; k < combined.length; k++) {
      for (let i = k + 1; i < combined.length; i++) {
        if (combined[k].feature === combined[i].feature) {
          combined.splice(i--, 1);
        }
      }
    }
    data.features = combined;
    return data;
  }

  const formatData = (product) => {
    let newDataFormat = {
      'name': product.details.name,
      'id': product.details.id,
      'features': product.details.features
    };
    return newDataFormat;
  }

  const formatAll = (products) => {
    let data = [];
    data.push(combineFeatureLists());
    for (let product of products) {
      data.push(formatData(product));
    }
    setFeatureList(data);
    console.log(data);
  }

  return (
    <Modal
    isOpen={isOpen}
    onAfterOpen={() => formatAll(products)}
    onRequestClose={onClose}
    >
      <span>Comparing</span>
      <div className='modal-body'>
        <Table featureList={featureList} />
      </div>
    </Modal>
  )
}

export default ComparisonModal;
