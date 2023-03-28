import React from 'react';
import StyleLib from '../../../assets/Stylesheet.jsx';
import RelatedLib from '../assets/Stylesheet.jsx';
import AddToOutfitCard from '../card_components/AddToOutfitCard.jsx';
import ProductCard from '../card_components/ProductCard.jsx';

const YourOutfitList = ({outfits, addOutfit, product, removeOutfit, updateindex, outfitViewIndex, changeProduct}) => {

  return (
    <section>
      <StyleLib.h2>Your Outfit</StyleLib.h2>
      <RelatedLib.leftArrow onClick={() => updateindex(outfitViewIndex - 1, outfits)}/>
      <RelatedLib.carouselContainer>
      <RelatedLib.content style={{ transform: `translateX(-${outfitViewIndex * 25}%)` }}>
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
                removeBtn={true} removeOutfit={removeOutfit} changeProduct={changeProduct}/>
              </RelatedLib.carouselItem>
            )
          }
        })}
      </RelatedLib.content>
      </RelatedLib.carouselContainer>
      <RelatedLib.rightArrow onClick={() => updateindex(outfitViewIndex + 1, outfits)}/>
    </section>
  )

}

export default YourOutfitList;