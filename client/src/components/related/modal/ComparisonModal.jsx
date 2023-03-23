import React, {useState, useEffect} from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import Modal from 'react-modal';

// TODO complete comparison modal when a user selects the 'star' action button
// in the related products list

Modal.setAppElement('#root');

const ComparisonModal = ({products, isOpen, onClose}) => {

  // compare characteristics of list with characteristics for product - apply to both products

  return (

    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    >

      <span>Comparing</span>
      <div className='modal-header'>

        <div>names of products will go here</div>
      </div>
      <div className='modal-body'>
        list of characteristics will go here
      </div>
    </Modal>
  )
}

export default ComparisonModal;
