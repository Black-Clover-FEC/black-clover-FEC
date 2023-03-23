import React, {useState, useEffect} from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';

// TODO complete comparison modal when a user selects the 'star' action button
// in the related products list

const ComparisonModal = ({products}) => {

  // compare characteristics of list with characteristics for product - apply to both products

  return (
    <section className='modal'>
      <span>Comparing</span>
      <div className='modal-header'>

        <div>names of products will go here</div>
      </div>
      <div className='modal-body'>
        list of characteristics will go here
      </div>
    </section>
  )
}

export default ComparisonModal;
