import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';  // used to assert and manipulate rendered components
import ProdMock from '../../../../../__mocks__/productMock.js';
import MockFunc from '../../../../../__mocks__/functionMocks.js';
import QuestionMock from '../../../../../__mocks__/questionMock.js';

import Answer from '../Answer.jsx';
import AnswerList from '../AnswerList.jsx';
import QAModule from '../QAModule.jsx';
import Question from '../Question.jsx';
import QuestionList from '../QuestionList.jsx';
import FormModalQ from '../../../assets/FormModalQ.jsx';
import FormModalA from '../../../assets/FormModalA.jsx';
import StyleLib from '../../../assets/Stylesheet.jsx';
import api from '../../../lib/api.js';

describe('Does a component render to the page', () => {

  it('tests to see if QuestionList component renders correctly', () => {
    const tree = renderer.create(<QuestionList displayedResults={QuestionMock.results} helpfulCB={MockFunc} product={ProdMock}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if Question component renders correctly', () => {
    const tree = renderer.create(<Question result={QuestionMock.results[0]} product={ProdMock} helpfulCB={MockFunc} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if AnswerList component renders correctly', () => {
    const tree = renderer.create(<AnswerList answers={QuestionMock.results[0].answers} helpfulCB={MockFunc} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if Answer component renders correctly', () => {
    const tree = renderer.create(<Answer answer={QuestionMock.results[0].answers[0]} helpfulCB={MockFunc} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if FormModalQ component renders correctly', () => {
    const tree = renderer.create(<FormModalQ product={ProdMock} isOpen={true} onClose={MockFunc.default} submitFunc={MockFunc.default} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('tests to see if FormModalA component renders correctly', () => {
    const tree = renderer.create(<FormModalA
       product={ProdMock}
       question={QuestionMock.results[0]}
       isOpen={true}
       onClose={MockFunc.default}
       submitFunc={MockFunc.default}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  })


  it('tests to see if StyleLib.searchBar component renders correctly', ()=> {
    const tree = renderer.create(<StyleLib.searchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('test helpfulHandler', () => {
    const tree = renderer.create(<Answer answer={QuestionMock.results[0].answers[5991165]} helpfulCB={MockFunc.default} />).toJSON();
    tree.getInstance().helpfulHandler();
  })



})