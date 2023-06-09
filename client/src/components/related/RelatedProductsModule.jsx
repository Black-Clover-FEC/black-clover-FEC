import React, {useState, useEffect, Profiler} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedProductsModule = ({product, currentStyle}) => {

  // LISTS
  const [outfits, setOutfits] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);

  // RELATED ITEMS AND COMPARISON
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [comparisonView, setComparisonView] = useState(false);
  const [productsToCompare, setProductsToCompare] = useState([]);

  // NAVIGATE LISTS
  const [relatedViewIndex, setRelatedViewIndex] = useState(0);
  const [outfitViewIndex, setOutfitViewIndex] = useState(0);

  useEffect(() => {getAndSetRelatedProducts(product.details.id)}, [product]);

  // console.log('outfits: ', outfits);

  useEffect(() => {
      let storage = JSON.parse(window.localStorage.getItem('outfits'));
      if (!storage || storage.length === 0) {
        window.localStorage.setItem('outfits', JSON.stringify([{details: {id: 'button'}}]));
      }
      setOutfits(JSON.parse(window.localStorage.getItem('outfits')));
  }, [])

  useEffect(() => {
      setTimeout(() => {
        window.localStorage.setItem('outfits', JSON.stringify(outfits));
      }, 500);
  }, [outfits]);

  const updateindex = (newIndex, list) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= list.length) {
      newIndex = list.length - 1;
    }
    if (list === outfits) {
      setOutfitViewIndex(newIndex);
    } else {
      setRelatedViewIndex(newIndex);
    }
  }

  // TOGGLE COMPARISON VIEW
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

  // helper function for Comparison Modal
  const sendToCompare = (selected) => {
    let current = product.details;
    setProductsToCompare([current, selected.details]);
  }

  // ADD AND REMOVE OUTFITS
  const addOutfit = async (product) => {
    // console.log('currentStyle: ', currentStyle);
    // console.log('product passed for add outfit: ', product);
    for (let outfit of outfits) {
      if (product.details.id === outfit.details.id) {
        return;
      }
    }
    setOutfits(outfits.concat(product));
  }

  const removeOutfit = (product_id) => {
    outfits.forEach((outfit, i) => {
      if (product_id === outfit.details.id) {
        let newOutfits = outfits.slice(0, i).concat(outfits.slice(i + 1));
        setOutfits(newOutfits);
        return;
      }
    })
  }

  return (
    <div>
      <div>
        {relatedItems.length !== 0 && <RelatedProductList
        relatedItems={relatedItems}
        relatedViewIndex={relatedViewIndex}
        updateindex={updateindex}
        openComparison={openComparison}
        sendToCompare={sendToCompare}
        />}
      </div>
      <div>
        <YourOutfitList outfits={outfits} product={product}
        addOutfit={addOutfit} removeOutfit={removeOutfit}
        updateindex={updateindex} outfitViewIndex={outfitViewIndex}
        />
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