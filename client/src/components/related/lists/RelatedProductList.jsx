import React from 'react';
import StyleLib from '../../../assets/Stylesheet.jsx';
import RelatedProductCard from '../card_components/RelatedProductCard.jsx';

const RelatedProductList = ({relatedItems}) => {

  return (
    <section>
      <StyleLib.h2>Related Products</StyleLib.h2>
      <div>
        {relatedItems.map((productId) => {
          // for each item, utilize function calls to populate card
          return <RelatedProductCard key={productId}/>;
        })}
      </div>
    </section>
  )
}

export default RelatedProductList;