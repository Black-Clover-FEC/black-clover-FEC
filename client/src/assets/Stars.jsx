import React from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import StyleLib from './Stylesheet.jsx';

const PartialStar = ({percentage, key}) => (
  <span key={key}>
    <StyleLib.spanTrimRight percentage={(100 - percentage).toString()}><FontAwesomeIcon className='filled-star' icon={faStar} /></StyleLib.spanTrimRight>
    <StyleLib.spanTrimLeft percentage={percentage}><FontAwesomeIcon className='unfilled-star' icon={faStar} /></StyleLib.spanTrimLeft>
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
    stars.push(<FontAwesomeIcon key={key} icon={faStar} className="filled-star" />);
    key++;
  }
  if (roundedPercent > 0) {
    stars.push(PartialStar({percentage: roundedPercent, key: key}))
    key++;
  }
  for (let i = 0; i < unfilledStars; i++) {
    stars.push(<FontAwesomeIcon key={key} icon={faStar} className="unfilled-star" />);
    key++;
  }

  return (
    <div>
      {stars}
    </div>
  );
}

export default Stars;