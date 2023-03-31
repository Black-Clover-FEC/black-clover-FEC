import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';  // used to assert and manipulate rendered components
import ProdMock from '../../../../../__mocks__/productMock.js';
import MockFunc from '../../../../../__mocks__/functionMocks.js';

// IMPORT COMPONENTS
import AddToBag from '../addToBag.jsx';
import Description from '../description.jsx';
import ExpandedImage from '../expandedImage.jsx';
import ExpandedImageCard from '../expandedImageCard.jsx';
import Favorite from '../favorite.jsx';
import Header from '../header.jsx';
import Image from '../image.jsx';
import ImageCard from '../imageCard.jsx';
import ImageThumbnail from '../imageThumbnail.jsx';
import OverviewModule from '../OverviewModule.jsx';
import ProductInformation from '../productInformation.jsx';
import QuantitySelector from '../quantitySelector.jsx';
import Reviews from '../reviews.jsx';
import SizeSelector from '../sizeSelector.jsx';
import StyleList from '../styleList.jsx';
import StyleListItem from '../styleListItem.jsx';
import StylePrice from '../stylePrice.jsx';



// for more info on testing with jest and react see, https://jestjs.io/docs/tutorial-react

// resources:
// https://jestjs.io/docs/tutorial-react#snapshot-testing
// https://jestjs.io/docs/snapshot-testing
// https://jestjs.io/docs/expect - list of different matchers eg. toBe, toBeFalsy, toContain

// EXAMPLE TEST CASES
// TEST CHANGES TO COMPONENT RENDERING - CREATES SNAPSHOT
// use for simple static components that don't require data eg. buttons, icons, etc.

describe('Does a component render to the page', () => {

  it('tests to see if the AddToBagButton component renders correctly', () => {
    const tree = renderer.create(<AddToBag />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the Description component renders correctly', () => {
    const tree = renderer.create(<Description product={ProdMock}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the ExpandedImage component renders correctly', () => {
    const tree = renderer.create(<ExpandedImage
      currentStyle={ProdMock.styles.results[0]}
      openModal={true}
      setOpenModal={MockFunc.default}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the ExpandedImageCard component renders correctly', () => {
    const tree = renderer.create(<ExpandedImageCard key={ProdMock.styles.product_id} photo={ProdMock.styles.results[0].photos[0]}
      openComparison={MockFunc.default} sendToCompare={MockFunc.default}
      changeProduct={MockFunc.default}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the Favorite component renders correctly', () => {
    const tree = renderer.create(<Favorite favorite={true} setFavorite={MockFunc.default} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the Header component renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the Image component renders correctly', () => {
    const tree = renderer.create(<Image currentStyle={ProdMock.styles.results[0]} openModal={true} setOpenModal={MockFunc.default} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the ImageCard component renders correctly', () => {
    const tree = renderer.create(<ImageCard photo={ProdMock.styles.results[0].photos[0]} setOpenModal={MockFunc.default} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the ImageThumbnail component renders correctly', () => {
    const tree = renderer.create(<ImageThumbnail index={0} active={true} onClick={MockFunc.default} currentStyle={ProdMock.styles.results[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the OverviewModule component renders correctly', () => {
    const tree = renderer.create(<OverviewModule product={ProdMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the ProductInformation component renders correctly', () => {
    const tree = renderer.create(<ProductInformation
      product={ProdMock}
      styleList={ProdMock.styles.results}
      favorite={true}
      setFavorite={MockFunc.default}
      currentStyle={ProdMock.styles.results[0]}
      setCurrentStyle={MockFunc.default}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the QuantitySelector component renders correctly', () => {
    const tree = renderer.create(<QuantitySelector product={ProdMock}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the Reviews component renders correctly', () => {
    const tree = renderer.create(<Reviews product={ProdMock}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the SizeSelector component renders correctly', () => {
    const tree = renderer.create(<SizeSelector />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the StyleList component renders correctly', () => {
    const tree = renderer.create(<StyleList
      currentStyle={ProdMock.styles.results[0]}
      setCurrentStyle={MockFunc.default}
      styleList={ProdMock.styles.results}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the StyleListItem component renders correctly', () => {
    const tree = renderer.create(<StyleListItem
      currentStyle={ProdMock.styles.results[0]}
      setCurrentStyle={MockFunc.default}
      item={ProdMock.styles.results[0]}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if the StylePrice component renders correctly', () => {
    const tree = renderer.create(<StylePrice currentStyle={ProdMock.styles.results[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})