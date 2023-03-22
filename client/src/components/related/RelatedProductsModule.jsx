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

  // States for each api call
  const [relatedItemId, setRelatedItemId] = useState(['placeholder']);
  const [itemStyle, setItemStyle] = useState();
  const [itemDetails, setItemDetails] = useState([]);

  // get list of related products by id
  const getRelatedIds = (productId) => {
    api.getRelatedProducts(productId)
    .then((data) => {
      setRelatedItemId(data);
    })
    .catch((err) => {
      console.log('failed to get related product ids', err);
    })
  }

  // get details for product
  const getDetails = (productId) => {
    return api.getProductId(productId)
    .then((data) => {
      // setItemDetails(data);
      console.log('details', data);
      return data;
    })
    .catch(err => console.log(err))
  }

  // get styles for product
  const getStyles = (productId) => {
   return api.getProductStyles(productId)
    .then((data) => {
      // setItemStyle(data);
      console.log('styles', data);
      return data;
    })
    .catch(err => console.log(err))
  }

  // use api calls to aggregate data in to object
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
      console.log('product: ', product);
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