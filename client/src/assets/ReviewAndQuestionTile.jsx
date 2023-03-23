import React from 'react';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import StyleLib from './Stylesheet.jsx';
import UserPhotos from './UserPhotos.jsx';
import Stars from './Stars.jsx';
import styled from 'styled-components';

const ResponseText = styled(StyleLib.p)`
color: white;
`;

const Response = ({response}) => (
  <StyleLib.coloredDiv>
    <StyleLib.h6>Response: </StyleLib.h6>
    <ResponseText>{response}</ResponseText>
  </StyleLib.coloredDiv>
)


const ReviewAndQuestionTile = ({review}) => {
  return (
    <StyleLib.tile>
      <Stars rating={review.rating} />
      <StyleLib.small>{review.reviewer_name}, {(new Date(review.date)).toDateString()}</StyleLib.small>
      <StyleLib.h4>{review.summary}</StyleLib.h4>
      <StyleLib.p>{review.body}</StyleLib.p>
      {review.photos.length !== 0 && <UserPhotos photos={review.photos}/>}
      {review.recommend && <StyleLib.p><FontAwesomeIcon icon={faCheck} /> I recommend this product </StyleLib.p>}
      {review.response && <Response response={review.response} />}
      <StyleLib.small>
        Helpful? <StyleLib.linkButton>Yes</StyleLib.linkButton>({review.helpfulness}) | <StyleLib.linkButton>Report</StyleLib.linkButton>

      </StyleLib.small>
    </StyleLib.tile>
  );
}

export default ReviewAndQuestionTile;