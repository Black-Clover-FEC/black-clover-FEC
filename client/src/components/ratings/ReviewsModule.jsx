import React from 'react';
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


const ReviewsModule = (productInfo) => {
  // hard coding while waiting for product info to be populated and passed down upstream.
  productInfo = { p_id: 40399, productName: 'Ultradark shades' };
  const { p_id } = productInfo;


  // REACT HOOKS

  // reviews display:
  const [reviews, setReviews] = React.useState([]);
  const [displayedReviews, setDisplayedReviews] = React.useState([]);
  const [displayCount, setDisplayCount] = React.useState(2);
  const [sortBy, setSortBy] = React.useState('relevant');
  const [reviewsCount, setReviewsCount] = React.useState(0);

  // summary and metadata:
  const [averageRating, setAverageRating] = React.useState(0);
  const [ratingBreakdown, setRatingBreakdown] = React.useState([]);
  const [percentRecommended, setPercentRecommended] = React.useState(0);
  const [characteristics, setCharacteristics] = React.useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // effects:
  React.useEffect(() => refreshReviewData(), []);
  // React.useEffect(() => )


  // HELPER FUNCTIONS
  const refreshReviewData = () => {
    getAndSetReviews(p_id, sortBy);
    getAndSetMetadata(p_id);
  }

  const getAndSetReviews = async () => {
    console.log('getting reviews from server');
    const queryParams = {
      product_id: p_id,
      sort: sortBy,
      count: 1000,
      page: 1
    };
    setReviews(await api.listReviews(queryParams));
  }

  const getAndSetMetadata = () => {
    console.log('getting metadata from server');
    return api.getReviewsMetadata({ product_id: p_id })
      .then(data => {
        setReviewsCount(data.reviewsCount);
        setAverageRating(data.averageRating);
        setRatingBreakdown(Object.values(data.ratings).map(value => parseInt(value)));
        setPercentRecommended(100 * data.recRate);
        setCharacteristics(Object.entries(data.characteristics));
      })
      .catch(err => console.error(err));
  }

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSortBy(newSort);
  }

  const sortReviews = () => {
    console.log('sorting');
    let sortFunc;
    if (sortBy === 'relevant') {
      sortFunc = (a, b) => a;
    } else if (sortBy === 'helpful') {

    } else if (sortBy === 'newest') {

    } else {
      console.error('Somerthing other than relevant, helpful, or newest was chosen as sort order')
    }

    const sortedReviews = [...reviews].sort(sortFunc)
  }

  const filterReviews = () => {
    console.log('filtering');
  }

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  // RENDER IT!
  return (
    <section>
      <StyleLib.h2>Ratings and Reviews</StyleLib.h2>
      <GridContainer>
        <GridCol1>
          <AvgRating>{averageRating.toFixed(1)}</AvgRating>
          <Stars rating={averageRating} />
          <StyleLib.p>{percentRecommended.toFixed(0)}% recommend this product</StyleLib.p>

          <RatingFiltersList ratings={ratingBreakdown} />
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
          {reviews.length !== 0 && <ReviewAndQuestionList reviews={reviews} />}
          <StyleLib.button>More Reviews</StyleLib.button>
          <StyleLib.button onClick={openModal}>
            Add a Review
          </StyleLib.button>
        </GridCol2>
      </GridContainer>
      <FormModal
        productInfo={productInfo}
        isOpen={modalIsOpen}
        onClose={closeModal}
        submitFunc={refreshReviewData} />
    </section>
  )
}

export default ReviewsModule;