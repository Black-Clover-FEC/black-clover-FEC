import React, { useState } from 'react';
import StyleLib from './Stylesheet.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';
import api from '../lib/api.js';

Modal.setAppElement('#root');

const FormModal = ({ product, isOpen, onClose, submitFunc }) => {

  const [photos, setPhotos] = useState([]);

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
        .then(res => {setPhotos([...photos, res.data.link])})
        .catch(err => console.error(err));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData.entries()); // converts from fromData object to JSON object.

    formData.product_id = product.id;
    console.log(formData);
    api.addQuestion(formData)
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
    >
      <StyleLib.h2>Ask your question</StyleLib.h2>
      <StyleLib.h5>about {product.name}</StyleLib.h5>
      <form onSubmit={handleSubmit} >

        <StyleLib.blockLabel>
          *Your Question <StyleLib.textarea name='body' rows='5' cols='30' maxlength='1000' required={true} />
        </StyleLib.blockLabel>

        <StyleLib.blockLabel>
          *Your nickname: <StyleLib.input name='name' maxlength='60' required={true} placeholder={"“Example: jackson11!”"}/>
          For privacy reasons, do not use your full name or email address
        </StyleLib.blockLabel>
        <StyleLib.blockLabel>
          *Your email: <StyleLib.input type='email' name='email' maxlength='60' required={true} />
          For authentication reasons, you will not be emailed
        </StyleLib.blockLabel>
        <StyleLib.button type='button' onClick={onClose}>Cancel</StyleLib.button>
        <StyleLib.button type='submit'>Submit</StyleLib.button>
      </form>
    </Modal>
  );
}

export default FormModal;