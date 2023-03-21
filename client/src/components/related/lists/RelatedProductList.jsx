import React from 'react';
import StyleLib from '../../../assets/Stylesheet.jsx';
import RelatedProductCard from '../card_components/RelatedProductCard.jsx';

const RelatedProductList = ({relatedItems}) => {

  return (
    <section>
      <StyleLib.h2>Related Products</StyleLib.h2>
      <div>
        {relatedItems.map((item) => {
          return <RelatedProductCard key={item.id}/>;
        })}
      </div>
    </section>
  )
}

export default RelatedProductList;