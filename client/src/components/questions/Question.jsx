import React, {useEffect, useState} from 'react';
import AnswerList from './AnswerList.jsx';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';
import FormModalA from '../../assets/FormModalA.jsx';

const Question = ({result, product, helpfulCB}) => {
  const [answers, setAnswers] = useState(result.answers);
  const [helpfulQCount, setHelpfulQCount] = useState(result.question_helpfulness);
  const [modal, setModal] = useState(false);


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

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
    <StyleLib.tile>
      <StyleLib.p>Q: {result.question_body}</StyleLib.p>
      <StyleLib.small>{(new Date(result.question_date)).toDateString()} </StyleLib.small>
      <StyleLib.small>Helpful?
        <StyleLib.linkButton onClick={helpfulHandler}>
          Yes
        </StyleLib.linkButton>
        {result.question_helpfulness}
      </StyleLib.small>
      <StyleLib.linkButton onClick={reportHandler}>Report </StyleLib.linkButton>
      <StyleLib.linkButton onClick={openModal}>Add Answer</StyleLib.linkButton>

      <AnswerList answers={answers} question={result.question_id} product={product} result={result} helpfulCB={helpfulCB}/>
    </StyleLib.tile>

    <FormModalA
    product={product}
    question={result}
    isOpen={modal}
    onClose={closeModal}
    answers={answers}
    setAnswers={setAnswers}
    />
    </>
  )
}

export default Question;