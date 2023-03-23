import React, {useState, useEffect} from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import api from '../../lib/api.js';
import ReviewAndQuestionList from '../../assets/ReviewAndQuestionList.jsx';

const QAModule = () => {

  return (
    <div>
      <StyleLib.h2>Questions and Answers</StyleLib.h2>
      <StyleLib.h4>Yung Search Bar</StyleLib.h4>
        <input type='text'/>
      <StyleLib.h4>Example Question</StyleLib.h4>
      <StyleLib.h5>Example Answer</StyleLib.h5>
      <StyleLib.h5>Example Answer 2</StyleLib.h5>
      <StyleLib.button>More Answered Questions</StyleLib.button>
      <StyleLib.button>Add A Question</StyleLib.button>
    </div>
  )
}

export default QAModule;