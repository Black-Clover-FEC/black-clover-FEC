import React, {useState, useEffect, Profiler} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';


const RelatedProductsModule = ({product}) => {

  // represents a future state for current selected product
  // TODO - outfit list not used yet
  const [outfitList, setOutfitList] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);

  // GET RELATED ITEM ID'S
  const getAndSetRelatedProducts = (id) => {
    return api.getRelatedProducts(id)
      .then(relatedIds => getRelatedProducts(relatedIds))
      .then(relatedProducts => setRelatedItems(relatedProducts))
      .catch(err => console.log(err));
  }

  // POPULATE LIST OF RELATED PRODUCTS
  const getRelatedProducts = (productIds) => {
    return Promise.all(productIds.map(id => api.collectProductInfo(id)));
  }

  useEffect(() => {getAndSetRelatedProducts(product.id)}, []);

  return (
    <div>
      <div>
        {relatedItems.length !==0 && <RelatedProductList relatedItems={relatedItems} />}
      </div>
      <div>
        <YourOutfitList />
      </div>
    </div>
  )
}

export default RelatedProductsModule;