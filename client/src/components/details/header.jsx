import React from 'react';
import Stars from '../../assets/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';


const Header = () => {
  return (
    <DetailsLib.header>
      <DetailsLib.logo src={'https://images.unsplash.com/photo-1679638561023-b27271e07e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2826&q=80'} />
      <DetailsLib.searchBarButton />
      <DetailsLib.searchBar placeholder={'Search...'}/>
    </DetailsLib.header>
  )
}

export default Header;