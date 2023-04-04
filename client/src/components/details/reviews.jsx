import React from 'react';
import Stars from '../ratings/Stars.jsx';
import StyleLib from '../../assets/Stylesheet.jsx';
import DetailsLib from './assets/Stylesheet.jsx';

const Reviews = ({product}) => {
  const hasReviews = product && product.reviewsMeta && product.reviewsMeta.reviewsCount > 0;
  return (
    hasReviews
    ?
    <DetailsLib.rating>
    <StyleLib.small >
      Average Rating: <Stars rating={product.reviewsMeta.averageRating} />
      <DetailsLib.smallUnderline >
        {'Read All ' + product.reviewsMeta.reviewsCount + ' Reviews'}
      </DetailsLib.smallUnderline>
      </StyleLib.small>
    </DetailsLib.rating>
    :
    <DetailsLib.rating>
    <StyleLib.small></StyleLib.small>
      <DetailsLib.smallUnderline></DetailsLib.smallUnderline>
    </DetailsLib.rating>
  );
}

export default Reviews;