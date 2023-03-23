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
    // iterate over ids and create an array of objects
    let list = []
    for (let id of productIds) {
      const product = await api.collectProductInfo(id);
      list.push(product);
    }
    setRelatedItems(list);
  }

  // TODO - revisit and replace testCurrentProduct refresh off change in current product
  useEffect(() => {getRelatedIds(testCurrentProduct)}, []);
  useEffect(() => {populateRelatedItems(relatedProductIds)}, [relatedProductIds]);
  // using dummy data - replace with current product and selected related product when available
  useEffect(() => {setProductsToCompare([relatedItems[2], relatedItems[3]])}, [relatedItems]);

  return (
    <div>
      <div>
        {/* TODO - update related items prop after related product objects are formed */}
        <RelatedProductList relatedItems={relatedItems} openComparison={openComparison}/>
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