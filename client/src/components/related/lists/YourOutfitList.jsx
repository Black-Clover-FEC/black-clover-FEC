import React from 'react';
import StyleLib from '../../../assets/Stylesheet.jsx';
import RelatedLib from '../assets/Stylesheet.jsx';
import AddToOutfitCard from '../card_components/AddToOutfitCard.jsx';
import ProductCard from '../card_components/ProductCard.jsx';

// TODO - CONVERT TO CAROUSEL
const YourOutfitList = ({outfits, addOutfit, product, removeOutfit}) => {

  return (
    <section>
      <StyleLib.h2>Your Outfit</StyleLib.h2>
      <RelatedLib.leftArrow/>
      <RelatedLib.carouselContainer>
      <RelatedLib.content>
        {outfits.map((outfit, index) => {
          if (outfit.details.id === 'button') {
            return (
              <RelatedLib.carouselItem key={index}>
                <AddToOutfitCard key={index} addOutfit={addOutfit} product={product} />
              </RelatedLib.carouselItem>
            )
          } else {
            return (
              <RelatedLib.carouselItem key={index}>
                <ProductCard key={outfit.details.id} product={outfit}
                removeBtn={true} removeOutfit={removeOutfit}/>
              </RelatedLib.carouselItem>
            )
          }
        })}
      </RelatedLib.content>
      </RelatedLib.carouselContainer>
      <RelatedLib.rightArrow/>
    </section>
  )

}

export default YourOutfitList;