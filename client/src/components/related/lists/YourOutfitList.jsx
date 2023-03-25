import React from 'react';
import StyleLib from '../../../assets/Stylesheet.jsx';
import RelatedLib from '../assets/Stylesheet.jsx';
import AddToOutfitCard from '../card_components/AddToOutfitCard.jsx';
import ProductCard from '../card_components/RelatedProductCard.jsx';

const YourOutfitList = ({outfits, addOutfit}) => {

  return (
    <section>
      <StyleLib.h2>Your Outfit</StyleLib.h2>
      <RelatedLib.carousel>
        {outfits.map((outfit, index) => {
          if (outfit === 'button') {
            return <AddToOutfitCard key={index} addOutfit={addOutfit}/>
          } else {
            <ProductCard key={outfit.id} outfit={outfit}/>
          }
        })}
      </RelatedLib.carousel>
    </section>
  )

}

export default YourOutfitList;