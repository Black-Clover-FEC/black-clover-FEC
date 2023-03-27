import React from 'react';
import StyleLib from './Stylesheet.jsx';
import StarsInput from './StarsInput.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';
import api from '../lib/api.js';
import CharacteristicsInput from '../components/ratings/CharacteristicsInput.jsx';

Modal.setAppElement('#root');

const FormModal = ({ product, isOpen, onClose, submitFunc, factors }) => {

  const [starRating, setStarRating] = React.useState(-1);

  const formatCharacteristics = (formData) => {
    formData.characteristics = {};
    factors.forEach(factor => {
      formData.characteristics[factor.id] = parseInt(formData[factor.id]);
      delete formData[factor.id];
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData.entries()); // converts from fromData object to JSON object.
    let photoForm = new FormData();

    photoForm.append('image', formData.photos);
    api.postPhoto(photoForm);
    formData.rating = starRating + 1;
    formData.product_id = product.id;
    formData.recommend = formData.recommend === 'yes';
    // formData.photos = [];
    formatCharacteristics(formData);
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
      contentLabel='Please complete the form to review this product'
    >
      <StyleLib.h2>Write your review</StyleLib.h2>
      <StyleLib.h5>about {product.name}</StyleLib.h5>
      <form onSubmit={handleSubmit} >
        <StyleLib.blockLabel>
          Please rate this product:
          <StarsInput starRating={starRating} handleClick={(index) => setStarRating(index)} />
        </StyleLib.blockLabel>
        <StyleLib.p>Would you recommend this product?
          <StyleLib.blockLabel>
            <input name='recommend' value='yes' type='radio' />Yes
          </StyleLib.blockLabel>
          <StyleLib.blockLabel>
            <input name='recommend' value='no' type='radio' />No
          </StyleLib.blockLabel>
        </StyleLib.p>
        <div>
          Characteristics:
          <CharacteristicsInput factors={factors}/>
        </div>

        <StyleLib.blockLabel>
          Review summary: <StyleLib.input name='summary' maxlength='60'/>
        </StyleLib.blockLabel>
        <StyleLib.blockLabel>
          Review body: <StyleLib.textarea name='body' rows='5' cols='30' minlength='50' maxlength='1000' required={true}/>
        </StyleLib.blockLabel>

        {/* <StyleLib.button >Upload Photos</StyleLib.button> */}
        <StyleLib.blockLabel>
          Upload photos:
          <StyleLib.input name='photos' type='file' accept='image/*' multiple={true} />
        </StyleLib.blockLabel>

        <StyleLib.blockLabel>
          Your nickname: <StyleLib.input name='name' maxlength='60' required={true}/>
        </StyleLib.blockLabel>
        <StyleLib.blockLabel>
          Your email: <StyleLib.input type='email' name='email' maxlength='60' required={true}/>
        </StyleLib.blockLabel>
        <StyleLib.button type='button' onClick={onClose}>Cancel</StyleLib.button>
        <StyleLib.button type='submit'>Submit</StyleLib.button>
      </form>
    </Modal>
  );
}

export default FormModal;