import React from 'react';
import StyleLib from './Stylesheet.jsx';
import ReviewAndQuestionTile from './ReviewAndQuestionTile.jsx';


const UserPhotos = ({photos}) => {

  return (
    <ul>
      {photos.map(photo => <StyleLib.smallPhoto key={photo.id} src={photo.url} />)}
    </ul>
  );
}

export default UserPhotos;