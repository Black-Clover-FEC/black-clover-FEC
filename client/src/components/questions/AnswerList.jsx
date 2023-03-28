import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const AnswerList = ({answers, helpfulCB}) => {
  const answersArray = Object.keys(answers);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [numberOfAnswers, setNumberOfAnswers] = useState(2);

  useEffect(() => {setDisplayedAnswers(answersArray.slice(0, 2))}, []);
  useEffect(() => {updateDisplayedAnswers}, [numberOfAnswers]);

  const updateDisplayedAnswers = () => {
    setDisplayedAnswers(answersArray.slice(0, numberOfAnswers));
  }

  const render = (answer, index) => {
    return <Answer answer={answer} helpfulCB={helpfulCB} key={index}/>
  }

  const updateNumberOfAnswers = (e) => {
    console.log(displayedAnswers);
    setNumberOfAs(answersArray.length);
  };
  const resetNumberOfAnswers = (e) => {setNumberOfAnswers(2)};

  return (
    <section>
      {displayedAnswers.map((answer, index) => render(answers[answer], index))}
      {answersArray.length > numberOfAnswers ? <StyleLib.button onClick={updateNumberOfAnswers}>See more answers</StyleLib.button> : null}
      {/* {answersArray.length <= numberOfAnswers && answersArray.length !== 0 && numberOfAs !== 2 ? <StyleLib.button onClick={resetNumberOfAnswers}>Collapse Answers</StyleLib.button> : null} */}
    </section>
  )
}

export default AnswerList;