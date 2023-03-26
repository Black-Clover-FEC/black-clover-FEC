import React, {useState, useEffect, Profiler} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';
import ComparisonModal from './ComparisonModal.jsx';

// ComparisonModal.setAppElement('#root');

const RelatedProductsModule = ({product}) => {

  // represents a future state for current selected product
  // TODO - outfit list not used yet
  const [outfitList, setOutfitList] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);

  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [comparisonView, setComparisonView] = useState(false);
  const [productsToCompare, setProductsToCompare] = useState([]);

  const openComparison = () => setComparisonView(true);
  const closeComparison = () => setComparisonView(false);



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

  // helper function for Comparison Modal
  const sendToCompare = (selected) => {
    // placeholder until current product viewed in overview available
    let current = relatedItems[2];
    setProductsToCompare([current, selected]);

  }

  return (
    <div>
      <div>
        {relatedItems.length !==0 && <RelatedProductList
        relatedItems={relatedItems}
        openComparison={openComparison}
        sendToCompare={sendToCompare}
        />}
      </div>
      <div>
        <YourOutfitList />
      </div>
      <ComparisonModal
        products={productsToCompare}
        isOpen={comparisonView}
        onClose={closeComparison}
        />
    </div>
  )
}

export default RelatedProductsModule;