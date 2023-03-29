import React, {useEffect, useState} from 'react';
import AnswerList from './AnswerList.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';

const Question = ({result, helpfulCB}) => {
  const answers = result.answers;
  const [helpfulQCount, setHelpfulQCount] = useState(result.question_helpfulness);

  const helpfulHandler = (e) => {
    api.markQuestionHelpful(result.question_id)
      .then(res => helpfulCB())
      .then(setHelpfulQCount(result.question_helpfulness))
      .catch(err => console.error(err));
  }

  const reportHandler = (e) => {
    api.reportQuestion(result.question_id)
      .then(res => helpfulCB())
      .catch(err => console.error(err));
  }

  return (
    <StyleLib.tile>
      <StyleLib.p>Q: {result.question_body}</StyleLib.p>
      <StyleLib.small>{(new Date(result.question_date)).toDateString()} </StyleLib.small>
      <StyleLib.small>Helpful?
        <StyleLib.linkButton onClick={helpfulHandler}>
          Yes
        </StyleLib.linkButton>
        {helpfulQCount}
      </StyleLib.small>
      <StyleLib.linkButton onClick={reportHandler}>Report </StyleLib.linkButton>

      <AnswerList answers={answers} helpfulCB={helpfulCB}/>
    </StyleLib.tile>
  )
}

export default Question;