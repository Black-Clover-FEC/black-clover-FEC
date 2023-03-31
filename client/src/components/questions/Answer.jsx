import React, {useState, useEffect} from 'react';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';
import UserPhotos from '../../assets/UserPhotosQA.jsx';


const Answer = ({answer, sortAnswers, question, helpfulCB}) => {
  // const photos = answer.photos;
  console.log('Answer: question', question);
  const [reportStatus, setReportStatus] = useState(false);
  const [helpfulACount, setHelpfulACount] = useState(answer.helpfulness);

  const helpfulHandler2 = (e) => {
    api.markAnswerHelpful(answer.id)
      .then(res => api.listAnswers(question))
        .then(data => setHelpfulACount(data.results[answer.id].helpfulness))
        .then(console.log(helpfulACount))
        .then(console.log(answer.helpfulness))
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
  }

  // const render = (photo, index) => {
  //   return <Photo photo={photo} key={index}/>
  // }
  return (
    <>
    {!reportStatus && answer && <section>
      <StyleLib.p>A: {answer.body}</StyleLib.p>
      <StyleLib.small>{answer.answerer_name} </StyleLib.small>
      <StyleLib.small>{(new Date(answer.date)).toDateString()} </StyleLib.small>
      <StyleLib.small>Helpful? </StyleLib.small>
      <StyleLib.linkButton data-testid={'helpfulHandler'} onClick={helpfulHandler2} >Yes </StyleLib.linkButton>
      <StyleLib.small>{answer.helpfulness} </StyleLib.small>
      <StyleLib.linkButton data-testid={'reportHandler'} onClick={reportHandler2}>Report</StyleLib.linkButton>
      {answer.photos ? <UserPhotos photos={answer.photos}/> : null}
    </section>}
    </>
  )
}

export default Answer;