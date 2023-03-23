import React from 'react'; // import like any other jsx file
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';  // used to assert and manipulate rendered components
import RelatedProducts from '../related/RelatedProductsModule.jsx';

// for more info on testing with jest and react see, https://jestjs.io/docs/tutorial-react

it('test to see if the related module renders correctly', () => {
  const tree = renderer.create(<RelatedProducts />).toJSON();
  expect(tree).toMatchShapshot();
})