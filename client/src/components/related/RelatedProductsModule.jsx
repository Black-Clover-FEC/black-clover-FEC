import React, {useState} from 'react';
import RelatedProductList from './lists/RelatedProductList.jsx';
import YourOutfitList from './lists/YourOutfitList.jsx';

const RelatedProductsModule = () => {
  let testData = [{id: 40304, name: 'shoe'},{id: 40305, name: 'shirt'}, {id: 40306, name: 'pants'}]
  const [relatedItems, setRelatedItems] = useState(testData);


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