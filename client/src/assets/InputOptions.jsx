import React, {useState} from 'react';
import StyleLib from './Stylesheet.jsx';
import { factorsMeaning } from '../components/ratings/reviewMeaningsKey.js';
import FactorsMeaning from '../components/ratings/FactorsMeaning.jsx';


const InputOptions = ({type, factor, valueList, labelList = valueList}) => {
  const [selected, setSelected] = useState(-1);

  return (
    <StyleLib.factorBlock>
    <StyleLib.factorLabel>
      {factor.name} - {selected !== -1 && <span>{factorsMeaning[factor.name][selected - 1]}</span>}
    </StyleLib.factorLabel>
    <StyleLib.inputOptionFlex >

      {valueList.map((value, index) => (
        <StyleLib.inputOptionLabel key={index}>
          {labelList[index]}
          <input
            type={type}
            value={value}
            name={factor.name}
            required={true}
            onChange={(e) => {setSelected(e.target.value)}}
          />
        </StyleLib.inputOptionLabel>
      ))}
    </StyleLib.inputOptionFlex>
    <FactorsMeaning factor={factor.name} />
    </StyleLib.factorBlock>
  );
}
//
export default InputOptions;