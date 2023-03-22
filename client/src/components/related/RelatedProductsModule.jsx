import React, {useState, useEffect} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';

const RelatedProductsModule = () => {
  // represents a future state for current selected product
  let testCurrentProduct = 40344;
  // TODO - outfit list not used yet
  const [outfitList, setOutfitList] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);

  // GET LIST OF RELATED PRODUCTS
  const getRelatedIds = (productId) => {
    api.getRelatedProducts(productId)
    .then((data) => {
      setRelatedItemId(data);
    })
    .catch((err) => {
      console.log('failed to get related product ids', err);
    })
  }

  // GET DETAILS, STYLES, AND META DATA
  const collectProductInfo = (id) => {
    let product = {};

    api.getProductId(id)
    .then((data) => {
      product.details = data;
      return api.getProductStyles(id);
    })
    .then((data) => {
      product.styles = data;
      return api.getReviewsMetadata({product_id: id});
    })
    .then((data) => {
      product.reviewsMeta = data;
      setRelatedItems(relatedItems.concat(product));
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {collectProductInfo(testCurrentProduct)}, []);

  return (
    <div>
      Hello World, this is where Related Products go!
      <div>
        {/* TODO - update related items prop after related product objects are formed */}
        <RelatedProductList relatedItems={relatedItems} />
      </div>
      <div>
        <YourOutfitList />
      </div>
    </div>
  )
}

export default RelatedProductsModule;