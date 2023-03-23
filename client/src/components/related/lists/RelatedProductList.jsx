import React from 'react';
import RelatedLib from '../assets/Stylesheet.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx';
import RelatedProductCard from '../card_components/RelatedProductCard.jsx';

const RelatedProductList = ({relatedItems}) => {

  // console.log('related items in list component: ', relatedItems);

  return (
    <RelatedLib.carousel>
      <StyleLib.h2>Related Products</StyleLib.h2>
      <div>
        {relatedItems.map((product) => {
          return <RelatedProductCard key={product.details.id} product={product}/>;
        })}
      </div>
    </RelatedLib.carousel>
  )
}

export default RelatedProductList;