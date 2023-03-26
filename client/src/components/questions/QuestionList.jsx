import React, {useState, useEffect} from 'react';
import Question from './Question.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const QuestionList = ({results}) => {
  const render = (result, index) => {
    return <Question result={result} key={index}/>
  }
  return (
    <div>
      {results.map((result, index) => render(result, index))}
    </div>
  )
}

export default QuestionList;