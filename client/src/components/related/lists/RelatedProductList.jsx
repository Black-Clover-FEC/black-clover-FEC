import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx';
import ProductCard from '../card_components/ProductCard.jsx';

// TODO - CONVERT TO CAROUSEL
const RelatedProductList = ({relatedItems, openComparison, sendToCompare, changeProduct}) => {



  return (
    <section>
      <StyleLib.h2>Related Products</StyleLib.h2>
      <RelatedLib.leftArrow/>
      <RelatedLib.carousel>
        {relatedItems.map((product) => {
          return <ProductCard key={product.details.id} product={product}
          openComparison={openComparison} sendToCompare={sendToCompare}
          changeProduct={changeProduct}
          />;
        })}
      </RelatedLib.carousel>
      <RelatedLib.rightArrow/>
    </section>
  )
}

export default RelatedProductList;