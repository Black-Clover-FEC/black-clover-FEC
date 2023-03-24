import React from 'react';
// import StyleLib from './Stylesheet.jsx';
import InputOptions from '../../assets/InputOptions.jsx';


const CharacteristicsInput = ({factors}) => {

  return (
    <>
      {factors.map((factor, index) => (
        <div>{factor.name}
        <InputOptions type='radio' name={factor.id} valueList={[1, 2, 3, 4, 5]} />
        </div>
      ))}
    </>
  );
}

export default CharacteristicsInput;