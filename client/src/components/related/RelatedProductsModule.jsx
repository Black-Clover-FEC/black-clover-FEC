import React, {useState, useEffect, Profiler} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedProductsModule = ({product}) => {

  // LISTS
  const [outfits, setOutfits] = useState(['button']);
  const [relatedItems, setRelatedItems] = useState([]);

  // RELATED ITEMS AND COMPARISON
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
    let current = product;
    setProductsToCompare([current, selected.details]);
  }

  // ADD OUTFIT
  const addOutfit = async () => {
    console.log('tried to add outfit');
    let outfit = await api.collectProductInfo(product.id);
    setOutfits(outfits.concat(outfit));
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
        <YourOutfitList outfits={outfits} addOutfit={addOutfit}/>
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