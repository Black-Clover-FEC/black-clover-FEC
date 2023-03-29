import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ImageCard from './imageCard.jsx';
import ImageThumbnail from './imageThumbnail.jsx';

const Image = ({currentStyle, openModal, setOpenModal}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      draggable={false}
      showDots={true}
      customDot={<ImageThumbnail currentStyle={currentStyle}/>}
      responsive={responsive}
      keyBoardControl={true}
      infinite={false}
      arrows={!openModal}
    >
      {currentStyle.photos.map((photo, index) => {
        return <ImageCard key={index} photo={photo} setOpenModal={setOpenModal}/>
      })}
    </Carousel>
  )
}

export default Image;