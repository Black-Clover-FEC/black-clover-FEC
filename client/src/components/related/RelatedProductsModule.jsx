import React, {useState, useEffect} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';
import ComparisonModal from './ComparisonModal.jsx';

// ComparisonModal.setAppElement('#root');

const RelatedProductsModule = () => {
  // placeholder until compoenent state routing available
  let testCurrentProduct = 40344;
  // TODO - outfit list not used yet
  const [outfitList, setOutfitList] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [comparisonView, setComparisonView] = useState(false);
  const [productsToCompare, setProductsToCompare] = useState([]);

  const openComparison = () => setComparisonView(true);
  const closeComparison = () => setComparisonView(false);

  // GET RELATED ITEM ID'S
  const getRelatedIds = (id) => {
    api.getRelatedProducts(id)
    .then(data => setRelatedProductIds(data))
    .catch(err => console.log(err));
  }

  // POPULATE LIST OF RELATED PRODUCTS
  async function populateRelatedItems (productIds) {
    let list = []
    for (let id of productIds) {
      const product = await api.collectProductInfo(id);
      list.push(product);
    }
    setRelatedItems(list);
  }

  // helper function
  const sendToCompare = (selected) => {
    // placeholder until current product viewed in overview available
    let current = relatedItems[2];
    setProductsToCompare([current, selected]);

  }

  // TODO - revisit and replace testCurrentProduct refresh off change in current product
  useEffect(() => {getRelatedIds(testCurrentProduct)}, []);
  useEffect(() => {populateRelatedItems(relatedProductIds)}, [relatedProductIds]);

  return (
    <div>
      <div>
        {/* TODO - update related items prop after related product objects are formed */}
        <RelatedProductList
        relatedItems={relatedItems}
        openComparison={openComparison}
        sendToCompare={sendToCompare}
        />
        <ComparisonModal
        products={productsToCompare}
        isOpen={comparisonView}
        onClose={closeComparison}
        />
      </div>
      <div>
        <YourOutfitList />
      </div>
    </div>
  )
}

export default RelatedProductsModule;