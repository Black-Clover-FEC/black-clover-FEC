import React from 'react';
import StyleLib from './Stylesheet.jsx';


const InputOptions = ({type, name, valueList, labelList = valueList}) => {

  return (
    <>
    <br/>
      {valueList.map((value, index) => (
        <label>
          {labelList[index]}
          <input type={type} key={index} value={value} name={name} />
        </label>
      ))}
    </>
  );
}

export default InputOptions;