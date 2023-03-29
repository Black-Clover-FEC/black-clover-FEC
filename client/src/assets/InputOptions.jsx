import React, {useState} from 'react';
import StyleLib from './Stylesheet.jsx';
import { factorsMeaning } from '../components/ratings/reviewMeaningsKey.js';


const InputOptions = ({type, factor, valueList, labelList = valueList}) => {
  const [selected, setSelected] = useState(-1);

  return (
    <div >{factor.name} - {selected !== -1 && <span>{factorsMeaning[factor.name][selected - 1]}</span>}
    <br/>
      {valueList.map((value, index) => (
        <label key={index}>
          {labelList[index]}
          <input
            type={type}
            value={value}
            name={factor.name}
            required={true}
            onChange={(e) => {setSelected(e.target.value)}}
          />
        </label>
      ))}
    </div>
  );
}

export default InputOptions;