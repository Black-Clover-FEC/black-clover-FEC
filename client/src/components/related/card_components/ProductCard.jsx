import React, {useState, useEffect} from 'react';
import StyleLib from '../../../assets/Stylesheet.jsx';
import api from '../../../../../client/src/lib/api.js';
import RelatedLib from '../assets/Stylesheet.jsx';
import ProductInfo from './ProductInformation.jsx';
import Stars from '../../../assets/Stars.jsx'

const ProductCard = ({product, openComparison, sendToCompare, removeBtn, removeOutfit}) => {
  const [image, setImage] = useState('No Image Available');
  const [style, setStyle] = useState('No Style Available');
  const [price, setPrice] = useState('No Price Available');

  const setDefault = (styles) => {
    let defaultStyle = product.styles.default;
    setImage(defaultStyle.photos[0].thumbnail_url);
    setStyle(defaultStyle.name);
    setPrice(formatPrice(defaultStyle));
    // console.log('image:', image);
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

  const handleRemove = (product) => {
    removeOutfit(product.details.id);
  }

  let path = `../${product.details.id}`;

  return (
    <RelatedLib.cardContainer>
      <StyleLib.routerLink to={path}>
      <RelatedLib.card >
        <RelatedLib.imgContainer>
          <RelatedLib.cardImg src={image} alt='product-image'/>
        </RelatedLib.imgContainer>
        <RelatedLib.container>
          <ProductInfo details={product.details} price={price} styleName={style}/>
          <Stars rating={product.reviewsMeta.averageRating}/>
        </RelatedLib.container>
      </RelatedLib.card>
      </StyleLib.routerLink>
      <RelatedLib.iconContainer>
        {removeBtn ?
        <RelatedLib.times onClick={() => {
          handleRemove(product)
        }}/> :
        <RelatedLib.compareStar onClick={() => {
          sendToCompare(product);
          openComparison();
        }}/>}
      </RelatedLib.iconContainer>
    </RelatedLib.cardContainer>

  )
}

export default ProductCard;