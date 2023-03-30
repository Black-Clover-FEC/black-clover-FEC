import React, {useState, useEffect, Profiler} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedProductsModule = ({product, changeProduct}) => {

  // LISTS
  const [outfits, setOutfits] = useState(JSON.parse(window.localStorage.getItem('outfits')));
  const [relatedItems, setRelatedItems] = useState([]);

  // RELATED ITEMS AND COMPARISON
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [comparisonView, setComparisonView] = useState(false);
  const [productsToCompare, setProductsToCompare] = useState([]);

  // NAVIGATE LISTS
  const [relatedViewIndex, setRelatedViewIndex] = useState(0);
  const [outfitViewIndex, setOutfitViewIndex] = useState(0);

  useEffect(() => {getAndSetRelatedProducts(product.id)}, [product]);

  useEffect(() => {
    setOutfits(JSON.parse(window.localStorage.getItem('outfits')));
  }, [])

  useEffect(() => {
      window.localStorage.setItem('outfits', JSON.stringify(outfits));
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
    let current = product;
    setProductsToCompare([current, selected.details]);
  }

  // ADD AND REMOVE OUTFITS
  const addOutfit = async (product) => {
    for (let outfit of outfits) {
      if (product.id === outfit.details.id) {
        return;
      }
    }
    let outfit = await api.collectProductInfo(product.id);
    setOutfits(outfits.concat(outfit));
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
        changeProduct={changeProduct}
        />}
      </div>
      <div>
        <YourOutfitList outfits={outfits} product={product}
        addOutfit={addOutfit} removeOutfit={removeOutfit}
        updateindex={updateindex} outfitViewIndex={outfitViewIndex}
        changeProduct={changeProduct}/>
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