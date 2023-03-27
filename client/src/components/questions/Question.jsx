import React, {useEffect, useState} from 'react';
import AnswerList from './AnswerList.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const Question = ({result}) => {
  const answers = result.answers;
  return (
    <div>
      <div>Q: {result.question_body}</div>
      <div>{result.question_date}</div>
      <div>{result.asker_name}</div>
      <div>{result.question_helpfulness} thumbs up</div>
      <AnswerList answers={answers} />
    </div>
  )
}

export default Question;