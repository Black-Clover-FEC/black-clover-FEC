import React, {useState, useEffect} from 'react';
import api from '../../../../../client/src/lib/api.js';
import RelatedLib from '../assets/Stylesheet.jsx';
import ProductInfo from './ProductInformation.jsx';
import Stars from '../../../assets/Stars.jsx'

const RelatedProductCard = ({product, openComparison, sendToCompare}) => {
  const [image, setImage] = useState('No Image Available');
  const [style, setStyle] = useState('No Style Available');
  const [price, setPrice] = useState('No Price Available');

  const findDefault = (style) => {
    if (style['default?']) {
      return true;
    }
  }

  const returnDefaultStyle = (styles) => {
    for (let i = 0; i < styles.length; i++) {
      if (findDefault(styles[i])) {
        return styles[i];
      }
    }
    return styles[0];
  }

  const setDefault = (styles) => {
    let defaultStyle = returnDefaultStyle(styles);
    setImage(defaultStyle.photos[0].thumbnail_url);
    setStyle(defaultStyle.name);
    setPrice(formatPrice(defaultStyle));
  }

useEffect(() => {setDefault(product.styles.results)}, [product]);

// TODO - revisit to format strikethrough original price when sales price active
  const formatPrice = (style) => {
    if (style.sale_price) {
      return 'on sale - $' + style.sale_price;
    } else {
      return '$' + style.original_price;
    }
  }

  return (
    <RelatedLib.card>
      <RelatedLib.imgContainer>
        <RelatedLib.compareStar onClick={() => {
          sendToCompare(product)
          openComparison()
        }}></RelatedLib.compareStar>
        <RelatedLib.cardImg src={image} alt='product-image'/>
      </RelatedLib.imgContainer>
      <ProductInfo details={product.details} price={price} styleName={style}/>
      <Stars rating={product.reviewsMeta.averageRating}/>
    </RelatedLib.card>
  )
}

export default RelatedProductCard;