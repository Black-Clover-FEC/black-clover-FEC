import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import Factor from './Factor.jsx';


const FactorsList = ({characteristics}) => {
  console.log(characteristics);

  return (
    <ul>
      {characteristics.map(([factor, data]) => <Factor key={data.id} factor={factor} value={data.value} />)}
    </ul>
  );
}

export default FactorsList;