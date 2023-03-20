import React from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import StyleLib from './Stylesheet.jsx';
import styled from 'styled-components';

const Star = ({className}) => <FontAwesomeIcon className={className} icon={faStar} />;

const FilledStar = styled(Star)`
color: #2E4552;
`
const UnfilledStar = styled(Star)`
color: #D5D5D5;
`

const PartialStar = ({percentage, key}) => (
  <span key={key}>
    <StyleLib.spanTrimRight percentage={(100 - percentage).toString()}>
      <FilledStar/>
    </StyleLib.spanTrimRight>
    <StyleLib.spanTrimLeft percentage={percentage}>
      <UnfilledStar />
    </StyleLib.spanTrimLeft>
  </span>
);

const Stars = ({rating}) => {
  const intRating = Math.floor(rating);
  const decRating = rating - intRating;
  let roundedPercent = Math.floor((Math.round(decRating * 4))/4 * 100);
  const unfilledStars = 5 - Math.ceil(rating);

  let stars = [];
  let key = 0;
  for (let i = 0; i < intRating; i++) {
    stars.push(<FilledStar key={key} />);
    key++;
  }
  if (roundedPercent > 0) {
    stars.push(PartialStar({percentage: roundedPercent, key: key}))
    key++;
  }
  for (let i = 0; i < unfilledStars; i++) {
    stars.push(<UnfilledStar key={key} />);
    key++;
  }

  return (
    <span>
      {stars}
    </span>
  );
}

export default Stars;