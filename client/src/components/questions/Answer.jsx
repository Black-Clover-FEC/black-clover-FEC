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
    <section>
      <StyleLib.p>A: {answer.body}</StyleLib.p>
      <StyleLib.small>{answer.date} </StyleLib.small>
      <StyleLib.small>{answer.answerer_name} </StyleLib.small>
      <StyleLib.small>Helpful? Yes {answer.helpfulness}</StyleLib.small>
      {photos.map((photo, index) => render(photo, index))}
    </section>
  )
}

export default Answer;