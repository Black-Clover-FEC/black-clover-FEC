import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';  // used to assert and manipulate rendered components
import ProdMock from '../../../../../__mocks__/productMock.js';
import MockFunc from '../../../../../__mocks__/functionMocks.js';

// IMPORT COMPONENTS
import AddToOutfitCard from '../card_components/AddToOutfitCard.jsx';
import ProductCard from '../card_components/ProductCard.jsx';
import ComparisonModal from '../ComparisonModal.jsx';
import ProductInfo from '../card_components/ProductInformation.jsx';
import YourOutfitList from '../lists/YourOutfitList.jsx';
import RelatedProductList from '../lists/RelatedProductList.jsx';
import RelatedProductsModule from '../RelatedProductsModule.jsx';



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

  it('tests to see if the ComparisonModal component renders correctly', () => {
    const tree = renderer.create(<ComparisonModal
      products={[ProdMock, ProdMock]}
      isOpen={true}
      onClose={MockFunc.default}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the ProductInformation component renders correctly', () => {
    const tree = renderer.create(<ProductInfo details={ProdMock.details}
      price={ProdMock.details.default_price} styleName={ProdMock.styles.results[0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the YourOutfitList component renders correctly', () => {
  const tree = renderer.create(<YourOutfitList outfits={[{details: {id: 'button'}}, ProdMock]} product={ProdMock}
    addOutfit={MockFunc.default} removeOutfit={MockFunc.default}
    updateindex={MockFunc.default} outfitViewIndex={0}/>).toJSON();
  expect(tree).toMatchSnapshot();
})

  it('tests to see if the YourOutfitList component renders correctly', () => {
    const tree = renderer.create(<RelatedProductList
      relatedItems={[ProdMock, ProdMock]}
      relatedViewIndex={1}
      updateindex={MockFunc.default}
      openComparison={MockFunc.default}
      sendToCompare={MockFunc.default}
      changeProduct={MockFunc.default}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the RelatedProductsModule component renders correctly', () => {
    const tree = renderer.create(<RelatedProductsModule product={ProdMock} changeProduct={MockFunc.default}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})



