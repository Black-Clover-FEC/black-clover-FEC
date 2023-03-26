import React, {useState, useEffect} from 'react';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';
import Photo from './Photo.jsx';

const Answer = ({answer}) => {
  const photos = answer.photos;
  const render = (photo, index) => {
    return <Photo photo={photo} key={index}/>
  }
  return (
    <div>
      A: <div>{answer.body}</div>
      <div>{answer.date}</div>
      <div>{answer.answerer_name}</div>
      <div>{answer.helpfulness}</div>
      {photos.map((photo, index) => render(photo, index))}
    </div>
  )
}

export default Answer;