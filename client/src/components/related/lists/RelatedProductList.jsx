import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx';
import ProductCard from '../card_components/ProductCard.jsx';

// TODO - CONVERT TO CAROUSEL
const RelatedProductList = ({relatedItems, openComparison, sendToCompare,
  changeProduct, updateindex, relatedViewIndex}) => {

  return (
    <section>
      <StyleLib.h2>Related Products</StyleLib.h2>
      <RelatedLib.leftArrow onClick={() => updateindex(relatedViewIndex - 1)}/>
        <RelatedLib.carouselContainer>
        <RelatedLib.content style={{ transform: `translateX(-${relatedViewIndex * 25}%)` }}>
          {relatedItems.map((product, index) => {
            return (
              <RelatedLib.carouselItem key={index}>
                <ProductCard key={product.details.id} product={product}
                openComparison={openComparison} sendToCompare={sendToCompare}
                changeProduct={changeProduct}
                />
            </RelatedLib.carouselItem>
            )
          })}
        </RelatedLib.content>
        </RelatedLib.carouselContainer>
        <RelatedLib.rightArrow onClick={() => updateindex(relatedViewIndex + 1)}/>
    </section>
  )
}

export default RelatedProductList;