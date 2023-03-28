import React, {useState, useEffect} from 'react';
import Question from './Question.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const QuestionList = ({displayedResults}) => {
  const render = (result, index) => {
    return <Question result={result} key={index}/>
  }
  return (
    <section>
      {displayedResults.map((result, index) => render(result, index))}
    </section>
  )
}

export default QuestionList;