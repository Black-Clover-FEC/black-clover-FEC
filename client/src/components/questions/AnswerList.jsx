import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const AnswerList = ({answers}) => {
  const answersArray = Object.keys(answers);
  const render = (answer, index) => {
    return <Answer answer={answer} key={index}/>
  }
  return (
    <div>
      {answersArray.map((answer, index) => render(answer, index))}
    </div>
  )
}

export default AnswerList;