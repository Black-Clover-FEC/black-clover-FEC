import React, { useState } from 'react';
import StyleLib from './Stylesheet.jsx';
import StarsInput from './StarsInput.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';
import api from '../lib/api.js';
import CharacteristicsInput from '../components/ratings/CharacteristicsInput.jsx';
import { starsMeaning } from '../components/ratings/reviewMeaningsKey.js';

Modal.setAppElement('#root');

const requiredValDefaults = {
  rating : 0,
  recommend : undefined,
  email : '',
  name : '',
  body : ''
};

const FormModal = ({ product, isOpen, onClose, submitFunc, factors }) => {

  const [starRating, setStarRating] = useState(-1);
  const [bodyText, setBodyText] = useState('');
  const [photos, setPhotos] = useState([]);

  const defaultValidity = {
    rating: true,
    recommend: true,
    email: true,
    name: true,
    body: true
  }
  for (let factor of factors) {
    defaultValidity[factor.name] = true;
  };

  const [validity, setValidity] = useState(defaultValidity);

  const validateInputs = (formData) => {
    console.log(JSON.stringify(formData));
    let validityList = {...validity};
    for (let field in requiredValDefaults) {
      if (formData[field] === requiredValDefaults[field]) {
        validityList[field] = false;
      }
    }
    for (let factor of factors) {
      if (formData[factor.name] === undefined) {
        validityList[field] = false;
      }
    }
    if (validityList.body === true) {
      if (formData.body.length < 50) {
        validityList.body = 'short';
      } else if (formData.body.length > 1000) {
        validityList.body = 'short';
      }
    }
    console.log(invalidList);
  };

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
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData.entries()); // converts from fromData object to JSON object.
    formData.rating = starRating + 1;
    validateInputs(formData);
    formData.product_id = product.id;
    // formData.recommend = formData.recommend === 'yes';
    formData.photos = photos;
    // formatCharacteristics(formData);
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
          {starRating > -1 && <p>{starsMeaning[starRating]}</p>}
          <StyleLib.hiddenInput type='number' required={true}/>
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
          <CharacteristicsInput factors={factors} />
        </div>

        <StyleLib.blockLabel>
          Review summary: <StyleLib.input name='summary' maxlength='60' />
        </StyleLib.blockLabel>
        <StyleLib.blockLabel>
          Review body: <StyleLib.textarea
            name='body'
            rows='5'
            cols='25'
            minlength='50'
            maxlength='1000'
            value={bodyText}
            onChange={e => setBodyText(e.target.value)}
          />
        </StyleLib.blockLabel>

        {photos.length < 5 && (
          <StyleLib.blockLabel>
            Upload photos:
            <StyleLib.input name='photos' type='file' accept='image/*, .heic' onChange={handleFilesChange} multiple={true} />
          </StyleLib.blockLabel>
        )}

        <StyleLib.blockLabel>
          Your nickname: <StyleLib.input name='name' maxlength='60' />
        </StyleLib.blockLabel>
        <StyleLib.blockLabel>
          Your email: <StyleLib.input type='email' name='email' maxlength='60' />
        </StyleLib.blockLabel>
        <StyleLib.button type='button' onClick={onClose}>Cancel</StyleLib.button>
        <StyleLib.button type='submit'>Submit</StyleLib.button>
      </form>
    </Modal >
  );
}

export default FormModal;