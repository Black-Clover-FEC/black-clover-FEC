import React, {useState, useEffect} from 'react';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';
import UserPhotos from '../ratings/UserPhotos.jsx';


const Answer = ({answer, answersArray, result, sortAnswers, product, question, helpfulCB}) => {
  // const photos = answer.photos;
  const [reportStatus, setReportStatus] = useState(false);
  const [helpfulACount, setHelpfulACount] = useState(answer.helpfulness);

  useEffect(() => {sortAnswers}, [helpfulACount]);

  const helpfulHandler2 = (e) => {
    api.markAnswerHelpful(answer.id)
      .then(res => api.listQuestions({
        product_id: product.id,
        page: 1,
        count: 900
      }))
        .then(data => {
          setHelpfulACount(data.results.filter(datum => datum.question_id === question)[0].answers[answer.id].helpfulness)
          console.log('data helpful count', data.results.filter(datum => datum.question_id === question)[0].answers[answer.id].helpfulness)
          console.log('helpfulACount', helpfulACount)
        })
      .catch(err => console.error(err));
  }

  const reportHandler2 = (e) => {
    api.reportAnswer(answer.id)
      .then(res => helpfulCB())
      .then(setReportStatus(true))
      .catch(err => console.error(err));
  }

  const combinedFunc = (e) => {
    helpfulHandler2(e);
    sortAnswers();
    console.log(answersArray);
    console.log(answer.helpfulness)
  }

  return (
    <>
    {!reportStatus && answer && <section>
      <StyleLib.p>A: {answer.body}</StyleLib.p>
      <StyleLib.small>{answer.answerer_name} </StyleLib.small>
      <StyleLib.small>{(new Date(answer.date)).toDateString()} </StyleLib.small>
      <StyleLib.small>Helpful? </StyleLib.small>
      <StyleLib.linkButton data-testid={'helpfulHandler'} onClick={combinedFunc} >Yes </StyleLib.linkButton>
      <StyleLib.small>{helpfulACount} </StyleLib.small>
      <StyleLib.linkButton data-testid={'reportHandler'} onClick={reportHandler2}>Report</StyleLib.linkButton>
      {answer.photos ? <UserPhotos photos={answer.photos}/> : null}
    </section>}
    </>
  )
}

export default Answer;