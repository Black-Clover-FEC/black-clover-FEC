import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx'
import styled from 'styled-components';

const AddToOutfitCard = () => {

  const AddOutfitText = styled(StyleLib.blockLabel)`
    position: absolute;
    top: 70%;
    left: 17%;
  `;

  return (
    <RelatedLib.card>
      <RelatedLib.plus></RelatedLib.plus>
      <AddOutfitText>
        <StyleLib.h3>Add to Outfit</StyleLib.h3>
      </AddOutfitText>
    </RelatedLib.card>
  )
}

export default AddToOutfitCard;