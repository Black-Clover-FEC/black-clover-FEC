import React, {useState, useEffect} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';
import api from '../../../../client/src/lib/api.js';

const RelatedProductsModule = () => {
  const [relatedItems, setRelatedItems] = useState(['No related Items']);
  const [outfitList, setOutfitList] = useState([]);

  const getProductList = (err, result) => {
    api.listProducts()
    .then((res) => {
      setRelatedItems(res);
      console.log('results from api' , res);
    })
    .catch((err) => {
      console.log('get product failed', err);
    })
  }

  useEffect(getProductList, []);


  return (
    <div>
      Hello World, this is where Related Products go!
      <div>
        <RelatedProductList relatedItems={relatedItems}/>
      </div>
      <div>
        <YourOutfitList />
      </div>
    </div>
  )
}

export default RelatedProductsModule;