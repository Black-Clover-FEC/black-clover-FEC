import React from 'react';
import StyleLib from './Stylesheet.jsx';


const InputOptions = ({type, name, valueList, labelList = valueList}) => {

  return (
    <>
    <br/>
      {valueList.map((value, index) => (
        <label key={index}>
          {labelList[index]}
          <input type={type} value={value} name={name} />
        </label>
      ))}
    </>
  );
}

export default InputOptions;