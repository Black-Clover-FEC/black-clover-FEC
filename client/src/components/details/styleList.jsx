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
        {styleList.map((item, index) => {
          return <StyleListItem key={/*item.style_id*/index} item={item}/>;
        })}
      </ul>
    </div>
  )
}

export default StyleList;