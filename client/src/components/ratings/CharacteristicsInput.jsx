import React from 'react';
// import StyleLib from './Stylesheet.jsx';
import InputOptions from './InputOptions.jsx';


const CharacteristicsInput = ({ factors }) => {

  return (
    <>
      {factors.map((factor, index) => {
        return (
          <InputOptions key={factor.id} type='radio' factor={factor} valueList={[1, 2, 3, 4, 5]} />
        );
      })}
    </>
  );
}

export default CharacteristicsInput;