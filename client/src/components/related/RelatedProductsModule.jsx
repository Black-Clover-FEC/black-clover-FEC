import React, {useState, useEffect} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';
import ComparisonModal from './modal/ComparisonModal.jsx';

// ComparisonModal.setAppElement('#root');

const RelatedProductsModule = () => {
  // represents a future state for current selected product
  let testCurrentProduct = 40344;
  // TODO - outfit list not used yet
  const [outfitList, setOutfitList] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [comparisonView, setComparisonView] = useState(false);
  const [featuresToCompare, setFeaturesToCompare] = useState([]);

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
    // iterate over ids and create an array of objects
    let list = []
    for (let id of productIds) {
      const product = await api.collectProductInfo(id);
      list.push(product);
    }
    setRelatedItems(list);
  }

  // helper function
  const sendToCompare = (selected) => {
    // placeholder until overview product available
    let current = relatedItems[2].details.features;
    setFeaturesToCompare([current, selected]);
  }

  // TODO - revisit and replace testCurrentProduct refresh off change in current product
  useEffect(() => {getRelatedIds(testCurrentProduct)}, []);
  useEffect(() => {populateRelatedItems(relatedProductIds)}, [relatedProductIds]);
  // using dummy data - replace with current product and selected related product when available

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
        features={featuresToCompare}
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