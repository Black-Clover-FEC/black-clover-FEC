import React from 'react';
import StyleLib from '../../../assets/Stylesheet.jsx';
import RelatedLib from '../assets/Stylesheet.jsx';
import AddToOutfitCard from '../card_components/AddToOutfitCard.jsx';
import ProductCard from '../card_components/ProductCard.jsx';

const YourOutfitList = ({outfits, addOutfit, product, removeOutfit}) => {

  return (
    <section>
      <StyleLib.h2>Your Outfit</StyleLib.h2>
      <RelatedLib.carousel>
        {outfits.map((outfit, index) => {
          if (outfit.details.id === 'button') {
            return <AddToOutfitCard key={index} addOutfit={addOutfit} product={product} />
          } else {
            return <ProductCard key={outfit.details.id} product={outfit} removeBtn={true} removeOutfit={removeOutfit}/>
          }
        })}
      </RelatedLib.carousel>
    </section>
  )

}

export default YourOutfitList;