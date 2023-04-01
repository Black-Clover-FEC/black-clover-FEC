import React, { useState } from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';
import api from '../../lib/api.js';

Modal.setAppElement('#root');

const FormModal = ({ product, question, answers, isOpen, onClose, setAnswers }) => {

  const [photos, setPhotos] = useState([]);

  // const handleFilesChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = (e) => {
  //     let base64File = event.target.result;
  //     base64File = base64File.replace(/^data:image\/(png|jpg|jpeg|gif|heic|webp);base64,/, '');
  //     let photoForm = new FormData();
  //     photoForm.append('image', base64File);
  //     api.postPhotoToImgur(photoForm)
  //       .then(res => {setPhotos([...photos, res.data.link])})
  //       .catch(err => console.error(err));
  //   }
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData.entries()); // converts from fromData object to JSON object.

    api.addAnswer(question.question_id, formData)
      .then(res => console.log('this is the response: ' + res)) // here for now for debugging purposes
      .then(() => {
        api.listAnswers(question.question_id, {
          page: 1,
          count: 1000
        })
          .then(data => {
            setAnswers(data.results)
            console.log('data.results', data.results)
            console.log('data', data)
            console.log('answers', answers)
          })
        .catch(err => console.error(err));
        onClose()
        console.log(answers)
      })
      .catch(err => console.error(err));
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <StyleLib.h2>Submit your answer</StyleLib.h2>
      <StyleLib.h5>{product.name}: {question.question_body}</StyleLib.h5>
      <form onSubmit={handleSubmit} >

        <StyleLib.blockLabel>
          *Your Answer <StyleLib.textarea name='body' rows='5' cols='30' maxlength='1000' required={true} />
        </StyleLib.blockLabel>

        {/* {photos.length < 5 && (
          <StyleLib.blockLabel>
            Upload photos:
            <StyleLib.input name='photos' type='file' accept='image/*, .heic' onChange={handleFilesChange} multiple={true} />
          </StyleLib.blockLabel>
        )} */}

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