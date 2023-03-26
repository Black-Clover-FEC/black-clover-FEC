import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx';
import ProductCard from '../card_components/ProductCard.jsx';

// TODO - CONVERT TO CAROUSEL
const RelatedProductList = ({relatedItems, openComparison, sendToCompare,
  changeProduct, navigateLeft, navigateRight, relatedViewIndex}) => {

  return (
    <section>
      <StyleLib.h2>Related Products</StyleLib.h2>
      <RelatedLib.leftArrow onClick={navigateLeft}/>
      <RelatedLib.carousel>
        {relatedItems.map((product, index) => {
          return <RelatedLib.carouselItem style={{transform: `translate(-${relatedViewIndex * 100}%)`}}>
            Test item {index}
          </RelatedLib.carouselItem>

          {/* <ProductCard key={product.details.id} product={product}
          openComparison={openComparison} sendToCompare={sendToCompare}
          changeProduct={changeProduct}
          style={{transform: `translate(-${relatedViewIndex * 100}%)`}}
          />; */}
        })}
      </RelatedLib.carousel>
      <RelatedLib.rightArrow onClick={navigateRight}/>
    </section>
  )
}

export default RelatedProductList;