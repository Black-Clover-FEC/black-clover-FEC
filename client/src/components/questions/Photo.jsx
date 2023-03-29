import React, {useEffect, useState} from 'react';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const Photo = ({photo}) => {
  return (
    <div>
      <img src={photo} style={{height: 70, width:100}} alt='photo'/>
    </div>
  )
}

export default Photo;
