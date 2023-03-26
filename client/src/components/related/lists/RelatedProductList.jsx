import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx';
import ProductCard from '../card_components/ProductCard.jsx';

const RelatedProductList = ({relatedItems, openComparison, sendToCompare}) => {

  // console.log('related items in list component: ', relatedItems);

  return (
    <section>
      <StyleLib.h2>Related Products</StyleLib.h2>
      <RelatedLib.carousel>
        {relatedItems.map((product) => {
          return <ProductCard
          key={product.details.id}
          product={product}
          openComparison={openComparison}
          sendToCompare={sendToCompare}
          />;
        })}
      </RelatedLib.carousel>
    </section>
  )
}

export default RelatedProductList;