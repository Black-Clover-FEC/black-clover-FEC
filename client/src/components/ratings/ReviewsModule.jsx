import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import StyleLib from '../../assets/Stylesheet.jsx';
import ReviewStyles from './assets/ReviewStyles.jsx';
import Stars from '../../assets/Stars.jsx';
import ReviewAndQuestionList from '../../assets/ReviewAndQuestionList.jsx';
import FormModal from '../../assets/FormModal.jsx';
import RatingFiltersList from './RatingFiltersList.jsx';
import FactorsList from './FactorsList.jsx';
import api from '../../lib/api.js';


const ReviewsModule = ({product, reviewsMeta}) => {
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
  useEffect(() => refreshReviewData(), [product, reviewsMeta]);
  useEffect(() => getSortedReviews(), [sortBy]);
  useEffect(() => filterReviews(), [sorted, filterBy]);
  useEffect(() => displayReviews(), [filtered, displayCount]);


  // HELPER FUNCTIONS
  const refreshReviewData = () => {
    getSortedReviews(p_id, sortBy);
    setMetaData(p_id);
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

  const setMetaData = () => {
    setReviewsCount(reviewsMeta.reviewsCount);
    setAverageRating(reviewsMeta.averageRating);
    setRatingBreakdown(Object.values(reviewsMeta.ratings).map(value => parseInt(value)));
    setPercentRecommended(100 * reviewsMeta.recRate);
    setCharacteristics(Object.entries(reviewsMeta.characteristics));
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

    } else if (filterBy.filter(bool => bool).length === 1 && filterBy.indexOf(true) === index) {
      setFilterBy(new Array(5).fill(true));

    } else {
      newFilterBy = [...filterBy];
      newFilterBy[index] = !newFilterBy[index];
      setFilterBy(newFilterBy);
    }
  }

  // RENDER IT!
  return (
    <StyleLib.module>
      <StyleLib.h2>Ratings and Reviews</StyleLib.h2>
      <ReviewStyles.gridContainer>
        <ReviewStyles.gridCol1>

          <ReviewStyles.avgRating>{averageRating.toFixed(1)}</ReviewStyles.avgRating>

          <Stars rating={averageRating} />

          <StyleLib.p>{percentRecommended.toFixed(0)}% recommend this product</StyleLib.p>

          <StyleLib.small visibility={filterBy.includes(false) ? 'visible' : 'hidden'}>
            Showing only {[1, 2, 3, 4, 5].filter((rating, index) => filterBy[index]).join(', ')} star reviews.
            <StyleLib.linkButton onClick={(e) => setFilterBy(new Array(5).fill(true))}>Reset</StyleLib.linkButton>
          </StyleLib.small>

          <RatingFiltersList ratings={ratingBreakdown} handleClick={handleFilterClick} />

          <FactorsList characteristics={characteristics} />

        </ReviewStyles.gridCol1>

        <ReviewStyles.gridCol2>

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

        </ReviewStyles.gridCol2>
      </ReviewStyles.gridContainer>

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
    </StyleLib.module>
  )
}

export default ReviewsModule;