import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import StyleListItem from './styleListItem.jsx';

const StyleList = ({styleList}) => {

  return (
    <div>
      <StyleLib.h2 style={{fontSize: 'small'}}><strong>STYLE > </strong>SELECTED STYLE</StyleLib.h2>
      <div>
        {styleList.map((item, index) => {
          return <StyleListItem key={item.id} item={item} index={index}/>;
        })}
      </div>
    </div>
  )
}

export default StyleList;