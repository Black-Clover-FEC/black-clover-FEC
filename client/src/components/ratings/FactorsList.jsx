import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import Factor from './Factor.jsx';


const FactorsList = ({characteristics}) => {

  return (
    <StyleLib.vertPaddedList>
      {characteristics.map(([factor, data]) => <Factor key={data.id} factor={factor} value={data.value} />)}
    </StyleLib.vertPaddedList>
  );
}

export default FactorsList;