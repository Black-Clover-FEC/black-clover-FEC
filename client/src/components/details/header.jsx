import React from 'react';
import Stars from '../ratings/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import CloverSvg from '../../assets/CloverSvg.jsx';
import DetailsLib from './assets/Stylesheet.jsx';


const Header = () => {
  return (
    <StyleLib.routerLink to={'../'} >
    <StyleLib.header>
      <StyleLib.appDiv>
      <StyleLib.logo >KATE <CloverSvg color={'#d87659'}/> CLOVER</StyleLib.logo>
      {/* <DetailsLib.searchBarButton /> */}
      {/* <DetailsLib.searchBar placeholder={'Search...'}/> */}
      </StyleLib.appDiv>
    </StyleLib.header>
    </StyleLib.routerLink>
  )
}

export default Header;