import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import ReviewStyles from './assets/ReviewStyles.jsx';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FactorsMeaning from './FactorsMeaning.jsx';

const maxScore = 5;

const Factor = ({ factor, value }) => {

  value = Number.parseFloat(value).toFixed(1)
  const left = Math.round((value / maxScore) * 100);

  return (
    <ReviewStyles.slideGauge>
      <StyleLib.p>{factor}</StyleLib.p>
      <ReviewStyles.slideGaugeBG>
        <ReviewStyles.slideGaugeIndicator left={left}><FontAwesomeIcon icon={faPlay} rotation={90} /></ReviewStyles.slideGaugeIndicator>
      </ReviewStyles.slideGaugeBG>
      <FactorsMeaning factor={factor} />
    </ReviewStyles.slideGauge>
  );
}

export default Factor;