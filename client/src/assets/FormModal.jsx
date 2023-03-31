import React, { useState } from 'react';
import StyleLib from './Stylesheet.jsx';
import StarsInput from './StarsInput.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';
import api from '../lib/api.js';
import CharacteristicsInput from '../components/ratings/CharacteristicsInput.jsx';
import { starsMeaning } from '../components/ratings/reviewMeaningsKey.js';

// StyleLib.formModal.setAppElement('#root');
Modal.setAppElement('#root');
const formStyle = {
  content: {
    top: '5%',
    left: '35%',
    right: '35%',
    bottom: '5%',
    padding: '3em'
  }
}

const FormModal = ({ product, isOpen, onClose, submitFunc, factors }) => {

  const [starRating, setStarRating] = useState(-1);
  const [bodyText, setBodyText] = useState('');
  const [charCountError, setCharCountError] = useState('');
  const [photos, setPhotos] = useState([]);

  const formatCharacteristics = (formData) => {
    formData.characteristics = {};
    factors.forEach(factor => {
      formData.characteristics[factor.id] = parseInt(formData[factor.name]);
      delete formData[factor.id];
    });
  }

  const handleFilesChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      let base64File = event.target.result;
      base64File = base64File.replace(/^data:image\/(png|jpg|jpeg|gif|heic|webp);base64,/, '');
      let photoForm = new FormData();
      photoForm.append('image', base64File);
      api.postPhotoToImgur(photoForm)
        .then(res => { setPhotos([...photos, res.data.link]) })
        .catch(err => console.error(err));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bodyText.length > 50 && bodyText.length < 1000) {
      let formData = new FormData(e.target);
      formData = Object.fromEntries(formData.entries()); // converts from fromData object to JSON object.
      formData.rating = starRating + 1;
      formData.product_id = product.id;
      formData.recommend = formData.recommend === 'yes';
      formData.photos = photos;
      formatCharacteristics(formData);
      api.addReview(formData)
        .then(res => console.log('this is the response: ' + res)) // here for now for debugging purposes
        .then(() => {
          onClose();
          submitFunc();
        })
        .catch(err => console.error(err));
    } else {
      setCharCountError(true);
    }
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Please complete the form to review this product'
      style={formStyle}
    >
      <StyleLib.h2>Write your review</StyleLib.h2>
      <StyleLib.h5>about {product.name}</StyleLib.h5>

      <form onSubmit={handleSubmit} >

        <StyleLib.blockLabel>
          Please rate this product:
          <StarsInput starRating={starRating} handleClick={(index) => setStarRating(index)} />

          {starRating > -1 && <p>{starsMeaning[starRating]}</p>}

          <StyleLib.hiddenInput type='number' required={true} value={starRating} onChange={(e) => setStarRating(e.target.value)} min={0} />
        </StyleLib.blockLabel>

        <StyleLib.recommendBlock>
          Would you recommend this product?
          <StyleLib.inputsFlex>
            <StyleLib.inputOptionLabel>
              Yes
              <input name='recommend' value='yes' type='radio' required={true} />
            </StyleLib.inputOptionLabel>
            <StyleLib.inputOptionLabel>
              No
              <input name='recommend' value='no' type='radio' required={true} />
            </StyleLib.inputOptionLabel>
          </StyleLib.inputsFlex>
        </StyleLib.recommendBlock>

        <StyleLib.factorLabel>
          Characteristics:
          <CharacteristicsInput factors={factors} />
        </StyleLib.factorLabel>

        <StyleLib.blockLabel>
          Review summary:
          <StyleLib.input name='summary' maxLength={60} width={'100%'} />
        </StyleLib.blockLabel>

        <StyleLib.blockLabel>
          Review body:
          <StyleLib.textarea
            name='body'
            rows='5'
            cols='25'
            minLength={50}
            maxLength={1000}
            value={bodyText}
            onChange={e => setBodyText(e.target.value)}
            required={true}
          />
          {bodyText.length < 50 && (
            <StyleLib.p color={charCountError ? '#D87659' : '#424242'}>
              Please tell us more! You need at least {50 - bodyText.length} more characters to submit.
            </StyleLib.p>
          )}
        </StyleLib.blockLabel>

        {photos.length < 5 && (
          <StyleLib.blockLabel>
            Upload photos:
            <StyleLib.input
              name='photos'
              type='file'
              accept='image/*, .heic'
              onChange={handleFilesChange}
              multiple={true}
            />
          </StyleLib.blockLabel>
        )}

        <StyleLib.blockLabel>
          Your nickname:
          <StyleLib.input name='name' maxLength={60} required={true} width={'100%'} />
        </StyleLib.blockLabel>

        <StyleLib.blockLabel>
          Your email:
          <StyleLib.input type='email' name='email' maxLength={60} required={true} width={'100%'} />
        </StyleLib.blockLabel>

        <StyleLib.button
          type='button'
          onClick={onClose}
          cancel={true}
        >
          Cancel
        </StyleLib.button >

        <StyleLib.button
          type='submit'
        >
          Submit
        </StyleLib.button>

      </form>
    </Modal >
  );
}

export default FormModal;