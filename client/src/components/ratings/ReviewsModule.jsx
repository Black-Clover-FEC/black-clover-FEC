import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import StyleLib from '../../assets/Stylesheet.jsx';
import Stars from '../../assets/Stars.jsx';
import ReviewAndQuestionList from '../../assets/ReviewAndQuestionList.jsx';
import FormModal from '../../assets/FormModal.jsx';
import RatingFiltersList from './RatingFiltersList.jsx';
import FactorsList from './FactorsList.jsx';
import api from '../../lib/api.js';

// COMPONENTS STYLING
const AvgRating = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 6em;
  text-align: left;
  // color: #2E4552;
  color: #E7A66C;
  text-transform: none;
`

const GridContainer = styled.section`
display: grid;
grid-template-columns: 2fr 5fr;
`

const GridCol1 = styled.aside`
grid-column: 1;
`

const GridCol2 = styled.section`
grid-column: 2;
`


const ReviewsModule = ({product}) => {
  // productInfo = { p_id: 40399, productName: 'Ultradark shades' };
  const p_id = product.id;

  // REACT HOOKS

  // reviews lists:
  const [sorted, setSorted] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [displayed, setDisplayed] = useState([]);

  // list variables:
  const [sortBy, setSortBy] = useState('relevant');
  const [filterBy, setFilterBy] = useState(new Array(5).fill(true));
  const [displayCount, setDisplayCount] = useState(2);

  // summary and metadata:
  const [reviewsCount, setReviewsCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingBreakdown, setRatingBreakdown] = useState([]);
  const [percentRecommended, setPercentRecommended] = useState(0);
  const [characteristics, setCharacteristics] = useState([]);

  // modal:
  const [modalIsOpen, setIsOpen] = useState(false);

  // effects:
  useEffect(() => refreshReviewData(), []);
  useEffect(() => getSortedReviews(), [sortBy]);
  useEffect(() => filterReviews(), [sorted, filterBy]);
  useEffect(() => displayReviews(), [filtered, displayCount]);


  // HELPER FUNCTIONS
  const refreshReviewData = () => {
    getSortedReviews(p_id, sortBy);
    getMetaData(p_id);
  }

  const getSortedReviews = () => {
    const queryParams = {
      product_id: p_id,
      sort: sortBy,
      count: 1000,
      page: 1
    };
    api.listReviews(queryParams)
      .then(data => setSorted(data))
      .catch(err => console.error(err));
  }

  const getMetaData = () => {
    api.getReviewsMetadata({ product_id: p_id })
      .then(data => {
        setReviewsCount(data.reviewsCount);
        setAverageRating(data.averageRating);
        setRatingBreakdown(Object.values(data.ratings).map(value => parseInt(value)));
        setPercentRecommended(100 * data.recRate);
        setCharacteristics(Object.entries(data.characteristics));
      })
      .catch(err => console.error(err));
  }

  const filterReviews = () => setFiltered(sorted.filter(review => filterBy[review.rating - 1]));

  const displayReviews = () => setDisplayed(filtered.slice(0, displayCount));


  // EVENT HANDLERS
  const handleSortChange = (e) => setSortBy(e.target.value);
  const handleShowMoreClick = (e) => setDisplayCount(displayCount + 2);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleFilterClick = (index) => {
    let newFilterBy;

    if (!filterBy.includes(false)) {
      newFilterBy = new Array(5).fill(false);
      newFilterBy[index] = true;
      setFilterBy(newFilterBy);

<<<<<<< HEAD
  const getAndSetMetadata = (p_id) => {
    return api.getReviewsMetadata({product_id: p_id})
    .then(data => {
      setReviewsCount(data.reviewsCount);
      setAverageRating(data.averageRating);
      setRatingBreakdown(Object.values(data.ratings).map(value => parseInt(value)));
      setPercentRecommended(100 * data.recRate);
      setCharacteristics(Object.entries(data.characteristics));
    })
    .catch(err => console.log(err));
=======
    } else if (filterBy.filter(bool => bool).length === 1 && filterBy.indexOf(true) === index) {
      setFilterBy(new Array(5).fill(true));

    } else {
      newFilterBy = [...filterBy];
      newFilterBy[index] = !newFilterBy[index];
      setFilterBy(newFilterBy);
    }
>>>>>>> main
  }

  // RENDER IT!
  return (
    <section>
      <StyleLib.h2>Ratings and Reviews</StyleLib.h2>
      <GridContainer>
        <GridCol1>

          <AvgRating>{averageRating.toFixed(1)}</AvgRating>

          <Stars rating={averageRating} />

          <StyleLib.p>{percentRecommended.toFixed(0)}% recommend this product</StyleLib.p>

          <RatingFiltersList ratings={ratingBreakdown} handleClick={handleFilterClick} />

          <FactorsList characteristics={characteristics} />

        </GridCol1>

        <GridCol2>

          <StyleLib.h4>{reviewsCount} reviews, sorted by
            <StyleLib.dropdown name='sort' onChange={handleSortChange} value={sortBy}>
              <option value="relevant">relevance</option>
              <option value="newest">recency</option>
              <option value="helpful">helpfulness</option>
            </StyleLib.dropdown>
          </StyleLib.h4>

          <StyleLib.searchBar placeholder='Search reviews' />

          {displayed.length !== 0 && <ReviewAndQuestionList reviews={displayed} helpReportCB={getSortedReviews} />}

          <StyleLib.button onClick={handleShowMoreClick}>
            More Reviews
          </StyleLib.button>

          <StyleLib.button onClick={openModal}>
            Add a Review
          </StyleLib.button>

        </GridCol2>
      </GridContainer>

      <FormModal
        product={product}
        isOpen={modalIsOpen}
        onClose={closeModal}
        submitFunc={refreshReviewData}
        factors={characteristics.map(([factorName, data]) => ({
          id: data.id,
          name: factorName
          })
        )} />
    </section>
  )
}

export default ReviewsModule;