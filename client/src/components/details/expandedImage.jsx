import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import Modal from 'react-modal';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ExpandedImageCard from './expandedImageCard.jsx';
import Image from './image.jsx';

const ExpandedImage = ({currentStyle, openModal, setOpenModal}) => {
  Modal.setAppElement(document.getElementById('root'));

  const customStyles = {
    content: {
      margin: '1.5%'
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(!openModal)}
      contentLabel='Expanded Image Gallery'
      shouldReturnFocusAfterClose={false}
      style={customStyles}
    >
      <DetailsLib.closeModalBtn onClick={() => setOpenModal(!openModal)}/>
      <Carousel
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={false}
      keyBoardControl={true}
      renderDotsOutside={true}
      >
        {currentStyle.photos.map((photo, index) => {
          return <ExpandedImageCard key={index} photo={photo}/>
        })}
      </Carousel>
    </Modal>
  )
}

export default ExpandedImage;