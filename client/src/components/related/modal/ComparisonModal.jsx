import React, {useState, useEffect} from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import Modal from 'react-modal';
import Table from '../assets/table.jsx';

// TODO complete comparison modal when a user selects the 'star' action button
// in the related products list

Modal.setAppElement('#root');

const ComparisonModal = ({features, isOpen, onClose}) => {
  // compare characteristics of list with characteristics for product - apply to both products
  const [allFeatures, setAllFeatures] = useState([]);
  // generate combined list of both feature lists, no duplicates

  const combineFeatureList = () => {
    let combined = [...features[0], ...features[1]];
    for (let k = 0; k < combined.length; k++) {
      for (let i = k + 1; i < combined.length; i++) {
        if (combined[k].feature === combined[i].feature) {
          combined.splice(i--, 1);
        }
      }
    }
    setAllFeatures(combined);
  }


  return (

    <Modal
    isOpen={isOpen}
    onAfterOpen={combineFeatureList}
    onRequestClose={onClose}
    >

      <span>Comparing</span>
      <div className='modal-header'>
        <div>features go here</div>
      </div>
      <div className='modal-body'>
        <Table />
      </div>
    </Modal>
  )
}

export default ComparisonModal;
