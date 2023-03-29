import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const AnswerList = ({answers, helpfulCB}) => {
  const answersArray = Object.keys(answers);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [numberOfAnswers, setNumberOfAnswers] = useState(2);
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {setDisplayedAnswers(answersArray.slice(0, 2))}, []);

  useEffect(() => {
    updateDisplayedAnswers();
  }, [numberOfAnswers]);

  useEffect(() => {
    buttonTextHelper();
  }, [displayedAnswers]);

  const render = (answer, index) => {
    return <Answer answer={answer} helpfulCB={helpfulCB} key={index}/>
  }

  const updateDisplayedAnswers = () => {
    setDisplayedAnswers(answersArray.slice(0, numberOfAnswers));
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
      {displayedAnswers.map((answer, index) => render(answers[answer], index))}
      {answersArray.length > 2 && <StyleLib.button onClick={updateNumberOfAnswers}>{buttonText}</StyleLib.button>}
    </section>
  )
}

export default AnswerList;