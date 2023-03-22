import React, {useState, useEffect} from 'react';

// TODO - product information for RelatedProductCards

const ProductInfo = ({details, styles}) => {
  const [defaultProduct, setDefault] = useState('');

 // HELPER FUNCTIONS
  const returnDefaultStyle = (style) => {
    if (style['default?']) {
      console.log('found default: ', style)
      return style;
    }
  }

  const findDefault = (styles) => {
    for (let i = 0; i < styles.length; i++) {
      // console.log(styles[i]);
      return returnDefaultStyle(styles[i]);
    }
  }

  const getPrice = (style) => {
    if (style.sale_price) {
      return '$' + style.sale_price;
    } else {
      console.log('price: ', style.original_price)
      return '$' + style.original_price;
    }
  }

  // Returns product price
  const price = (styles) => {
    let Prodefault = findDefault(styles);
    return getPrice(Prodefault);
  }

  return (
    <div>
      <h5>{details.category}</h5>
      <h4>{details.name}</h4>
      <h4>{price(styles.results)}</h4>

    </div>
  )
}

export default ProductInfo;