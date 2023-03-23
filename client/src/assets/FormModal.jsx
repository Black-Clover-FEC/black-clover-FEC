import React from 'react';
import StyleLib from './Stylesheet.jsx';
import StarsInput from './StarsInput.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';
import api from '../lib/api.js';

Modal.setAppElement('#root');

const FormModal = ({ productInfo, isOpen, onClose, submitFunc }) => {

  const [starRating, setStarRating] = React.useState(-1);
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData.entries()); // converts from fromData object to JSON object.
    formData.rating = starRating + 1;
    formData.product_id = productInfo.p_id;
    formData.photos = [];
    formData.recommend = formData.recommend === 'yes';
    // characteristics is hardcoded for now while I work on implementing user inputs for that
    formData.characteristics = {
      '135400': 5,
      '135401': 5,
      '135402': 5,
      '135403': 5
    }

    console.log(formData);
    api.addReview(formData)
      .then(res => console.log('this is the response: ' + res)) // here for now for debugging purposes
      .then(() => {
        onClose();
        submitFunc();
      })
      .catch(err => console.error(err));
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Please fill out the form'
    >
      <StyleLib.h2>Write your review</StyleLib.h2>
      <StyleLib.h5>about {productInfo.productName}</StyleLib.h5>
      <form onSubmit={handleSubmit} >
        <StarsInput starRating={starRating} handleClick={(index) => setStarRating(index)} />
        <StyleLib.blockLabel>
          Would you recommend this product? <StyleLib.input name='recommend' value='yes' type='radio' />
        </StyleLib.blockLabel>
        <StyleLib.blockLabel>
          Review summary: <StyleLib.input name='summary' />
        </StyleLib.blockLabel>
        <StyleLib.blockLabel>
          Review body: <StyleLib.textarea name='body' rows='5' cols='30' />
        </StyleLib.blockLabel>
        <StyleLib.button >Upload Photos</StyleLib.button>
        <StyleLib.blockLabel>
          Your nickname: <StyleLib.input name='name' />
        </StyleLib.blockLabel>
        <StyleLib.blockLabel>
          Your email: <StyleLib.input type='email' name='email' />
        </StyleLib.blockLabel>
        <StyleLib.button type='button' onClick={onClose}>Cancel</StyleLib.button>
        <StyleLib.button type='submit'>Submit</StyleLib.button>
      </form>
    </Modal>
  );
}

export default FormModal;