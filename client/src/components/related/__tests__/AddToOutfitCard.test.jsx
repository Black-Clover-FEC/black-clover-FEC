import React from 'react'; // import like any other jsx file
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';  // used to assert and manipulate rendered components
import AddToOutfitCard from '../card_components/AddToOutfitCard.jsx';

// for more info on testing with jest and react see, https://jestjs.io/docs/tutorial-react

// EXAMPLE TEST CASES

// TEST CHANGES TO COMPONENT RENDERING
it('test to see if the AddToOutfitCard component renders correctly', () => {
  const tree = renderer.create(<AddToOutfitCard />).toJSON();
  expect(tree).toMatchSnapshot();
})