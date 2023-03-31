import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const ImageThumbnail = ({index, active, onClick, currentStyle}) => {
  const thumbnailStyle = active ? '3px solid grey' : 'none';

  return (
    <DetailsLib.imageThumbnail className={active ? "active" : "inactive"} key={index} src={currentStyle.photos[index].thumbnail_url}
      onClick={() => {
        onClick();
      }} style={{border: thumbnailStyle}}/>
  )
}

export default ImageThumbnail;