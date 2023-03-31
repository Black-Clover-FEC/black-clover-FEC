import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import ReviewStyles from './assets/ReviewStyles.jsx';
import {factorsMeaning} from './reviewMeaningsKey.js';

const FactorsMeaning = ({factor}) => {

  return (
    <ReviewStyles.factorsGrid>
      <ReviewStyles.factorsGridCol1>
        <StyleLib.small>{factorsMeaning[factor][0]}</StyleLib.small>
      </ReviewStyles.factorsGridCol1>

      <ReviewStyles.factorsGridCol2>
        <StyleLib.small>{factorsMeaning[factor][2]}</StyleLib.small>
      </ReviewStyles.factorsGridCol2>

      <ReviewStyles.factorsGridCol3>
        <StyleLib.small>{factorsMeaning[factor][4]}</StyleLib.small>
      </ReviewStyles.factorsGridCol3>
    </ReviewStyles.factorsGrid>
  );
}

export default FactorsMeaning;