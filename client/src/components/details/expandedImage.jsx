import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import Modal from 'react-modal';

const ExpandedImage = ({openModal, setOpenModal}) => {
  Modal.setAppElement(document.getElementById('root'));

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(!openModal)}
      contentLabel='Expanded Image Gallery'
      shouldReturnFocusAfterClose={false}
    >
      <DetailsLib.closeModalBtn onClick={() => setOpenModal(!openModal)}/>
    </Modal>
  )
}

export default ExpandedImage;