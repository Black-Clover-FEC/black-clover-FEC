import React, {useState, useEffect} from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import api from '../../lib/api.js';
import ReviewAndQuestionList from '../../assets/ReviewAndQuestionList.jsx';
import QuestionList from './QuestionList.jsx';
import FormModalQ from '../../assets/FormModalQ.jsx'

const QAModule = ({product}) => {
  const productID = product.id;

  // React Hooks
  const [numberOfQuestions, setNumberOfQuestions] = useState(2);
  const [displayedResults, setDisplayedResults] = useState([]);
  const [productResults, setProductResults] = useState([]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState([]);

  // On Render Effects
  useEffect(() => {getQuestions()}, []);
  useEffect(() => {updateDisplayedResults()}, []);
  useEffect(() => {updateDisplayedResults(), sortResults()}, [numberOfQuestions, search]);
  useEffect(() => {filterResults()}, [input]);

  // Helper Functions
  const getQuestions = () => {
    api.listQuestions({
      product_id: productID,
      page: 1,
      count: 900
    })
      .then(data => {
        setProductResults(data.results)
        setSearch(data.results.filter(product => product.question_body.includes(input)))
        setDisplayedResults(data.results.slice(0, numberOfQuestions))
      })
      .catch(err => console.error(err))
  }

  const sortResults = () => {
    setSearch(search.sort((a, b) => b.helpfulness - a.helpfulness))
  }

  const inputTracker = (e) => {
    if (e.target.value.length >= 3) {
      setInput(e.target.value);
    } else {
      setInput('');
    }
  }

  const filterResults = () => {
    setSearch(productResults.filter(product => product.question_body.includes(input)));
  }

  const showMoreHandler = (e) => setNumberOfQuestions(numberOfQuestions + 2);
  const updateDisplayedResults = () => setDisplayedResults(search ? search.slice(0, numberOfQuestions) : productResults.slice(0, numberOfQuestions));
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  // Rendered Elements
  return (
    <section>
      <StyleLib.tile>
        <StyleLib.h2>Questions and Answers</StyleLib.h2>
        <StyleLib.searchBar placeholder={"Have a question? Search for answers…"} onChange={(e) => inputTracker(e)}/>
        <QuestionList displayedResults={displayedResults} helpfulCB={getQuestions} product={product}/>
        {(search ? (displayedResults.length < search.length) : (displayedResults.lenght < productResults.length)) && <StyleLib.button onClick={showMoreHandler}>More Answered Questions</StyleLib.button> }
        <StyleLib.button onClick={openModal}>Add A Question</StyleLib.button>
      </StyleLib.tile>

      <FormModalQ
        product={product}
        isOpen={modal}
        onClose={closeModal}
        submitFunc={getQuestions}
         />
    </section>
  )
}

export default QAModule;