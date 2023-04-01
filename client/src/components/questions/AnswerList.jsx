import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const AnswerList = ({answers, result, product, question, helpfulCB}) => {
  const answersIDArray = Object.keys(answers);
  const answersArray = [];
  for (var i = 0; i < answersIDArray.length; i++ ) {
    answersArray.push(answers[answersIDArray[i]]);
  }
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [sortedAnswersArray, setSortedAnswersArray] = useState(answersArray.sort((a, b) => b.helpfulness - a.helpfulness));
  const [numberOfAnswers, setNumberOfAnswers] = useState(2);
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {setDisplayedAnswers(sortedAnswersArray.slice(0, 2))}, []);
  useEffect(() => {sortAnswers()}, []);
  useEffect(() => {sortAnswers()}, [numberOfAnswers])
  useEffect(() => {
    updateDisplayedAnswers();
  }, [numberOfAnswers]);

  useEffect(() => {
    buttonTextHelper();
  }, [displayedAnswers]);

  const render = (answer, index) => {
    return <Answer answer={answer} answersArray={answersArray} sortAnswers={sortAnswers} result={result} product={product} question={question} helpfulCB={helpfulCB} key={index}/>
  }

  const sortAnswers = () => {
    setSortedAnswersArray(answersArray.sort((a, b) => b.helpfulness - a.helpfulness));
  }

  const updateDisplayedAnswers = () => {
    setDisplayedAnswers(sortedAnswersArray.slice(0, numberOfAnswers));
  }

  const updateNumberOfAnswers = (e) => {
    if (numberOfAnswers < answersArray.length) {
      setNumberOfAnswers(answersArray.length);
    } else {
      setNumberOfAnswers(2);
    };
  };

  const buttonTextHelper = () => {
    if (displayedAnswers.length < answersArray.length) {
      setButtonText('See More Answers');
    }
    if (displayedAnswers.length >= answersArray.length) {
      setButtonText('Collapse Answers');
    }
  }

  return (
    <section>
      {displayedAnswers.map((answer, index) => render(answer, index))}
      {answersArray.length > 2 && <StyleLib.button onClick={updateNumberOfAnswers}>{buttonText}</StyleLib.button>}
    </section>
  )
}

export default AnswerList;