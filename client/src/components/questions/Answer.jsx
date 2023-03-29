import React, {useState, useEffect} from 'react';
import api from '../../lib/api.js';
import StyleLib from '../../assets/Stylesheet.jsx';
import UserPhotos from '../../assets/UserPhotosQA.jsx';


const Answer = ({answer, helpfulCB}) => {
  // const photos = answer.photos;

  const [reportStatus, setReportStatus] = useState(false);

  const helpfulHandler = (e) => {
    api.markAnswerHelpful(answer.id)
      .then(res => helpfulCB())
      .catch(err => console.error(err));
  }

  const reportHandler = (e) => {
    api.reportAnswer(answer.id)
      .then(res => helpfulCB())
      .then(setReportStatus(true))
      .catch(err => console.error(err));
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
      <StyleLib.linkButton onClick={helpfulHandler}>Yes </StyleLib.linkButton>
      <StyleLib.small>{answer.helpfulness} </StyleLib.small>
      <StyleLib.linkButton onClick={reportHandler}>Report</StyleLib.linkButton>
      {answer.photos ? <UserPhotos photos={answer.photos}/> : null}
    </section>}
    </>
  )
}

export default Answer;