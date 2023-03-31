import React, {useState, useEffect} from 'react';
import Question from './Question.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';

const QuestionList = ({displayedResults, helpfulCB, product}) => {
  const render = (result, index) => {
    return <Question result={result} product={product} helpfulCB={helpfulCB} key={index}/>
  }
  return (
    <section>
      {displayedResults.map((result, index) => render(result, index))}
    </section>
  )
}

export default QuestionList;