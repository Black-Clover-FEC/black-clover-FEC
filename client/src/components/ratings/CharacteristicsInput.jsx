import React from 'react';
// import StyleLib from './Stylesheet.jsx';
import InputOptions from '../../assets/InputOptions.jsx';


const CharacteristicsInput = ({ factors }) => {

  return (
    <>
      {factors.map((factor, index) => {
        console.log(factor)
        return (
          <InputOptions key={factor.id} type='radio' factor={factor} valueList={[1, 2, 3, 4, 5]} />
        );
      })}
    </>
  );
}

export default CharacteristicsInput;