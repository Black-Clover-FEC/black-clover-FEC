import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx'
import styled from 'styled-components';

const AddToOutfitCard = ({addOutfit}) => {

  return (
    <RelatedLib.card onClick={() => {
      console.log('outfit added')
      addOutfit();
    }}>
      <RelatedLib.plus></RelatedLib.plus>
      <RelatedLib.addOutfitText>
        <StyleLib.h3>Add to Outfit</StyleLib.h3>
      </RelatedLib.addOutfitText>
    </RelatedLib.card>
  )
}

export default AddToOutfitCard;