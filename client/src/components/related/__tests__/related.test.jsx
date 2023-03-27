import React from 'react'; // import like any other jsx file
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';  // used to assert and manipulate rendered components
import ProdMock from '../../../../../__mocks__/productMock.js';
import MockFunc from '../../../../../__mocks__/functionMocks.js';

// IMPORT COMPONENTS
import AddToOutfitCard from '../card_components/AddToOutfitCard.jsx';
import ProductCard from '../card_components/ProductCard.jsx';
import YourOutfitList from '../lists/YourOutfitList.jsx';
import RelatedProductList from '../lists/RelatedProductList.jsx';


// for more info on testing with jest and react see, https://jestjs.io/docs/tutorial-react

// resources:
// https://jestjs.io/docs/tutorial-react#snapshot-testing
// https://jestjs.io/docs/snapshot-testing
// https://jestjs.io/docs/expect - list of different matchers eg. toBe, toBeFalsy, toContain

// EXAMPLE TEST CASES
// TEST CHANGES TO COMPONENT RENDERING - CREATES SNAPSHOT
// use for simple static components that don't require data eg. buttons, icons, etc.

describe('Does a component render to the page', () => {

  it('tests to see if the AddToOutfitCard component renders correctly', () => {
    const tree = renderer.create(<AddToOutfitCard />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the ProductCard component renders correctly', () => {
    const tree = renderer.create(<ProductCard key={ProdMock.details.id} product={ProdMock}
      openComparison={MockFunc.default} sendToCompare={MockFunc.default}
      changeProduct={MockFunc.default}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  // it('tests to see if the YourOutfitList component renders correctly', () => {
//   const tree = renderer.create(<YourOutfitList outfits={MockFunc.prodArray} product={ProdMock}
//     addOutfit={MockFunc.default} removeOutfit={MockFunc.default}
//     updateindex={MockFunc.default} outfitViewIndex={MockFunc.num}/>).toJSON();
//   expect(tree).toMatchSnapshot();
// })

  // it('tests to see if the YourOutfitList component renders correctly', () => {
  //   const tree = renderer.create(<RelatedProductList
  //     relatedItems={MockFunc.prodArray}
  //     relatedViewIndex={MockFunc.num}
  //     updateindex={MockFunc.default}
  //     openComparison={MockFunc.default}
  //     sendToCompare={MockFunc.default}
  //     changeProduct={MockFunc.default}
  //     />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // })
})




