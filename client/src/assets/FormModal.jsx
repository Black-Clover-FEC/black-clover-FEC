import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyleLib from './Stylesheet.jsx';
import Stars from './Stars.jsx';
import StarsInput from './StarsInput.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// const StarRadio = ({starNum}) => {
//   const starName = `star-${starNum}`
//   return (
//     <>
//       <input type='radio' id={starName} name='rating' value={starNum} />
//       <label htmlFor={starName} >☆</label>
//     </>
//   )
// }



const FormModal = ({ productInfo, isOpen, onClose, onSubmit }) => {
  console.log(productInfo.productName);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Please fill out the form'
    >
      <StyleLib.h2>Write your review</StyleLib.h2>
      <StyleLib.h5>about {productInfo.productName}</StyleLib.h5>
      <form>
          <StarsInput />
        {/* <StyleLib.starRating>
          <StyleLib.p>Overall rating:</StyleLib.p>
          <StarRadio starNum='1' />
          <StarRadio starNum='2' />
          <StarRadio starNum='3' />
          <StarRadio starNum='4' />
          <StarRadio starNum='5' />
        </StyleLib.starRating> */}
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
          Your nickname: <StyleLib.input name='nickname' />
        </StyleLib.blockLabel>
        <StyleLib.blockLabel>
          Your email: <StyleLib.input type='email' name='summary' />
        </StyleLib.blockLabel>
        <StyleLib.button onClick={onClose}>Cancel</StyleLib.button>
        <StyleLib.button >Submit</StyleLib.button>
      </form>
    </Modal>
  );
}

export default FormModal;