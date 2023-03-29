import React, {useState, useEffect} from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import api from '../../lib/api.js';
import ReviewAndQuestionList from '../../assets/ReviewAndQuestionList.jsx';
import QuestionList from './QuestionList.jsx';
import SearchQA from './SearchQA.jsx';

const QAModule = ({product}) => {
  const productID = product.id;

  // React Hooks
  const [numberOfQuestions, setNumberOfQuestions] = useState(2);
  const [displayedResults, setDisplayedResults] = useState([]);
  const [productResults, setProductResults] = useState([]);
  const [modal, setModal] = useState(false);

  // On Render Effects
  useEffect(() => {getQuestions()}, []);
  useEffect(() => {updateDisplayedResults()}, []);
  useEffect(() => {updateDisplayedResults()}, [numberOfQuestions]);

  // Helper Functions
  const getQuestions = () => {
    api.listQuestions({
      product_id: productID,
      page: 1,
      count: 900
    })
      .then(data => {
        setProductResults(data.results)
        setDisplayedResults(data.results.slice(0, numberOfQuestions))
      })
      .catch(err => console.error(err))
  }

  const showMoreHandler = (e) => setNumberOfQuestions(numberOfQuestions + 2);
  const updateDisplayedResults = () => setDisplayedResults(productResults.slice(0, numberOfQuestions));
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  // Rendered Elements
  return (
    <StyleLib.tile>
      <StyleLib.h2>Questions and Answers</StyleLib.h2>
      <SearchQA />
      <QuestionList displayedResults={displayedResults} helpfulCB={getQuestions}/>
      <StyleLib.button onClick={showMoreHandler}>More Answered Questions</StyleLib.button>
      <StyleLib.button onClick={openModal}>Add A Question</StyleLib.button>
    </StyleLib.tile>
  )
}

export default QAModule;