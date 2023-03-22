import React from 'react';
import StyleLib from './Stylesheet.jsx';
import StarsInput from './StarsInput.jsx';
import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const FormModal = ({ productInfo, isOpen, onClose, onSubmit }) => {

  const emptyStar = '☆';
  const fullStar = '★';
  const [stars, setStars] = React.useState(new Array(5).fill(emptyStar));

  const updateRating = (index) => {
    let newStars = [];
    let key = 0;
    for (let i = 0; i < 5; i++) {
      if (i <= index){
        newStars.push(fullStar);
      } else {
        newStars.push(emptyStar);
      }
    }
    setStars(newStars);
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Please fill out the form'
    >
      <StyleLib.h2>Write your review</StyleLib.h2>
      <StyleLib.h5>about {productInfo.productName}</StyleLib.h5>
      <form>
        <StarsInput stars={stars} handleClick={updateRating} />
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