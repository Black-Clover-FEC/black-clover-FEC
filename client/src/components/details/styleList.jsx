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
      <div>
        {styleList.map((item, index) => {
          return <StyleListItem key={item.id} item={item} index={index}/>;
        })}
      </div>
    </div>
  )
}

export default StyleList;