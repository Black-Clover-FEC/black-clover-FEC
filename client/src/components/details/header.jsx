import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const Header = () => {

  return (
    <DetailsLib.header>
      <DetailsLib.logo>
        Logo
      </DetailsLib.logo>
      <DetailsLib.searchBar>
        Search Bar
      </DetailsLib.searchBar>
    </DetailsLib.header>
  )
}

export default Header;