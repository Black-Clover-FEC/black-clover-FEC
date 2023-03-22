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
  const [relatedProductIds, setRelatedProductIds] = useState([]);

  // GET RELATED ITEM ID'S
  const getRelatedIds = (id) => {
    api.getRelatedProducts(id)
    .then(data => setRelatedProductIds(data))
    .catch(err => console.log(err));
  }

  // GET DETAILS, STYLES, AND META DATA
  const collectProductInfo = (id) => {
    let product = {};

    return api.getProductId(id)
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
      return product;
      // setRelatedItems(relatedItems.concat(product));
    })
    .catch(err => console.log(err));
  }


  // POPULATE LIST OF RELATED PRODUCTS
  const populateRelatedItems = (productIds) => {
    // iterate over ids and create an array of objects
    let list = [];
    productIds.map((id) => {
      collectProductInfo(id)
      .then((item) => {
        console.log(item);
        list.push(item);
      })
      .catch(err => console.log(err));
    })
    // set relatedItems to new array
    setRelatedItems(list);
  }

  useEffect(() => {populateRelatedItems(relatedProductIds)}, [relatedProductIds]);
  useEffect(() => {getRelatedIds(testCurrentProduct)}, []);

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