import React from 'react';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import StyleLib from './Stylesheet.jsx';
import Stars from './Stars.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const FormModal = ({isOpen, onClose, onSubmit}) => {
  console.log('im here')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Please fill out the form"
      >
        <StyleLib.h2>Write your review about [product name]</StyleLib.h2>
        <form>
          <label>
            Overall rating: <input name="rating" />
          </label>
          <label>
            Would you recommend this product? <input name="recommend" type="radio" />
          </label>
          <label>
            Review summary: <input name="summary" />
          </label>
          <label>
            Review body: <textarea name="body" rows="5" cols="45" />
          </label>
          <StyleLib.button onClick={onClose}>Cancel</StyleLib.button>
          <StyleLib.button >Upload Photos</StyleLib.button>
          <label>
            Your nickname: <input name="nickname" />
          </label>
          <label>
            Your email: <input type="email" name="summary" />
          </label>
          <StyleLib.button >Submit</StyleLib.button>
        </form>
      </Modal>
  );
}

export default FormModal;