import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import StyleListItem from './styleListItem.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const StyleList = ({styleList}) => {

  return (
    <div>
      <DetailsLib.selectedStyle>
        <b>STYLE ></b> SELECTED STYLE
      </DetailsLib.selectedStyle>
      <ul>
        {styleList.map((item) => {
          return <StyleListItem key={item.style_id} item={item}/>;
        })}
      </ul>
    </div>
  )
}

export default StyleList;