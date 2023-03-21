import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const Header = () => {

  return (
    <DetailsLib.header style={{padding: '10px'}}>
      <div style={{float: 'left', display: 'inline-block'}}>
        Logo
      </div>
      <div style={{float: 'right', display: 'inline-block'}}>
        Search Bar
      </div>
    </DetailsLib.header>
  )
}

export default Header;