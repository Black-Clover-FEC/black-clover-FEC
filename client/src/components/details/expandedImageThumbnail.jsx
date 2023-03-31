import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const ExpandedImageThumbnail = ({ onClick, index, active }) => {
  const thumbnailStyle = active ? 'white' : 'black';

  return (
    <DetailsLib.modalCarouselThumbnail className={active ? "active" : "inactive"}
      onClick={() => onClick()} style={{color: thumbnailStyle}}
    />
  );
};

export default ExpandedImageThumbnail;