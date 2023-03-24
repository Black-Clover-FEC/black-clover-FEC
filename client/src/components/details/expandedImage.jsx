import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import Modal from 'react-modal';

const ExpandedImage = ({setOpenModal}) => {
  return (
    <DetailsLib.modalBackground>
      <DetailsLib.modalContainer>
        <DetailsLib.modalCloseBtnContainer>
          <DetailsLib.modalCloseBtn onClick={() => setOpenModal(false)}> X </DetailsLib.modalCloseBtn>
        </DetailsLib.modalCloseBtnContainer>
        <DetailsLib.modalTitle>
          <h1>Image Gallery Title</h1>
        </DetailsLib.modalTitle>
        <DetailsLib.modalBody>
          <p>This the Image Gallery body</p>
        </DetailsLib.modalBody>
        <DetailsLib.modalFooter>
          <DetailsLib.modalFooterButton onClick={() => setOpenModal(false)}>Cancel</DetailsLib.modalFooterButton>
          <DetailsLib.modalFooterButton onClick={() => setOpenModal(false)}>Continue</DetailsLib.modalFooterButton>
        </DetailsLib.modalFooter>
      </DetailsLib.modalContainer>
    </DetailsLib.modalBackground>
  )
}

export default ExpandedImage;