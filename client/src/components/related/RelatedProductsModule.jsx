import React, {useState, useEffect} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';

const RelatedProductsModule = () => {
  // represents a future state for current selected product
  let testCurrentProduct = 40344;

  const [relatedItems, setRelatedItems] = useState(['no related products']);
  const [relatedItemIds, setRelatedItemIds] = useState(['no id']);
  // TODO - outfit list not used yet
  const [outfitList, setOutfitList] = useState([]);

  const getRelatedIds = () => {
    api.getRelatedProducts(testCurrentProduct)
    .then((res) => {
      setRelatedItemIds(res);
    })
    .catch((err) => {
      console.log('get product failed', err);
    })
  }

  const getStaticInfo = () => {
    api.getProductId(productId)
    .then((res) => {
      console.log('results for id', res);
    })
    .then(() => {
      console.log('product static data', productStaticData);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // const getImageAndPrice = () => {
  //   api.getProductStyles(productId)
  //   .then()
  //   .catch()
  // }

  const populateRelatedItems = () => {
    // iterate over related product id's
    let list = [];
    for (let i = 0; i < relatedItemIds.length; i++) {
      let productId = relatedItemIds[i];
      let product = {};
      product.staticInfo = getStaticInfo(productId);
    }
    // run getStaticInfo to get name and category
    // run getImageAndPrice
    // run getRating


    // set related items to array of objects
    setRelatedItems(list);
  }

  // TODO - change dependency to update when current product changes
  useEffect(getRelatedIds, []);

  return (
    <div>
      Hello World, this is where Related Products go!
      <div>
        {/* TODO - update related items prop after related product objects are formed */}
        <RelatedProductList relatedItems={relatedItemIds}/>
      </div>
      <div>
        <YourOutfitList />
      </div>
    </div>
  )
}

export default RelatedProductsModule;