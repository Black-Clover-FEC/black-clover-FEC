import React, {useEffect, useState} from 'react';
import AnswerList from './AnswerList.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const Question = ({result}) => {
  const answers = result.answers;
  const [helpfulQCount, setHelpfulQCount] = useState(result.question_helpfulness);

  const helpfulHandler = (e) => {
    api.markQuestionHelpful(result.question_id)
      .then(() => setHelpfulQCount(result.question_helpfulness))
      .catch(err => console.error(err));
  }
  return (
    <StyleLib.tile>
      <StyleLib.p>Q: {result.question_body}</StyleLib.p>
      <StyleLib.small>{result.question_date}</StyleLib.small>
      <StyleLib.small>Helpful?
        <StyleLib.linkButton onClick={helpfulHandler}>
          Yes
        </StyleLib.linkButton>
        {helpfulQCount}
      </StyleLib.small>
      <AnswerList answers={answers} />
    </StyleLib.tile>
  )
}

export default Question;