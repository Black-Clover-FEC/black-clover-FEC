import ProdMock from './productMock.js';

const myMock = jest.fn();

const MockFunc = {

  default: myMock,
  returnTrue: myMock.mockReturnValueOnce(true),
  prodArray: myMock.mockReturnValueOnce([ProdMock, ProdMock, ProdMock]),
  num: myMock.mockReturnValueOnce(1),

};

export default MockFunc;