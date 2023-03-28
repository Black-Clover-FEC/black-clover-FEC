import React, {useState, useEffect} from 'react';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';
import Photo from './Photo.jsx';


const Answer = ({answer, helpfulCB}) => {
  const photos = answer.photos;
  const [helpfulCount, setHelpfulCount] = useState(answer.helpfulness);

  useEffect(() => {setHelpfulCount(answer.helpfulness)}, [])

  const helpfulHandler = (e) => {
    api.markAnswerHelpful(answer.id)
      .then(res => helpfulCB())
      .then(setHelpfulCount(answer.helpfulness))
      .catch(err => console.error(err));
  }

  const render = (photo, index) => {
    return <Photo photo={photo} key={index}/>
  }
  return (
    <section>
      <StyleLib.p>A: {answer.body}</StyleLib.p>
      <StyleLib.small>{answer.answerer_name} </StyleLib.small>
      <StyleLib.small>{(new Date(answer.date)).toDateString()} </StyleLib.small>
      <StyleLib.small>Helpful? </StyleLib.small>
      <StyleLib.linkButton onClick={helpfulHandler}>Yes </StyleLib.linkButton>
      <StyleLib.small>{helpfulCount} </StyleLib.small>
      {photos.map((photo, index) => render(photo, index))}
    </section>
  )
}

export default Answer;