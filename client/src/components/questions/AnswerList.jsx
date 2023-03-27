import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const AnswerList = ({answers}) => {
  const answersArray = Object.keys(answers);
  const [displayedAnswers, setDisplayedAnswers] = useState([]);
  const [numberOfAs, setNumberOfAs] = useState(2);

  useEffect(() => {setDisplayedAnswers(answersArray.slice(0, 2))}, []);
  useEffect(() => {updateDisplayedAnswers}, [numberOfAs]);

  const updateDisplayedAnswers = () => {
    setDisplayedAnswers(answersArray.slice(0, numberOfAs));
  }

  const render = (answer, index) => {
    return <Answer answer={answer} key={index}/>
  }

  const updateNumberOfAs = (e) => {setNumberOfAs(answersArray.length)};
  const resetNumberOfAs = (e) => {setNumberOfAs(2)};

  return (
    <div>
      <div>
        {displayedAnswers.map((answer, index) => render(answers[answer], index))}
        {answersArray.length > numberOfAs ? <StyleLib.button onClick={updateNumberOfAs}>See more answers</StyleLib.button> : null}
        {answersArray.length <= numberOfAs && answersArray.length !== 0 && numberOfAs !== 2 ? <StyleLib.button onClick={resetNumberOfAs}>Collapse Answers</StyleLib.button> : null}
      </div>
    </div>
  )
}

export default AnswerList;