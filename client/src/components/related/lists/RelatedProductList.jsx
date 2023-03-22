import React from 'react';
import StyleLib from '../../../assets/Stylesheet.jsx';
import RelatedProductCard from '../card_components/RelatedProductCard.jsx';

const RelatedProductList = ({relatedItems}) => {

  return (
    <section>
      <StyleLib.h2>Related Products</StyleLib.h2>
      <div>
        {relatedItems.map((product) => {
          return <RelatedProductCard key={product.details.id} product={product}/>;
        })}
      </div>
    </section>
  )
}

export default RelatedProductList;