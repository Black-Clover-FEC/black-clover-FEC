import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import StyleListItem from './styleListItem.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const StyleList = ({currentStyle, setCurrentStyle, styleList}) => {
  return (
    <div>
      <DetailsLib.selectedStyle>
        <b>{'STYLE >'}</b> {currentStyle.name}
      </DetailsLib.selectedStyle>
      <ul>
        {styleList.map((item, index) => {
          return <StyleListItem currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} key={/*item.style_id*/index} item={item}/>;
        })}
      </ul>
    </div>
  )
}

export default StyleList;