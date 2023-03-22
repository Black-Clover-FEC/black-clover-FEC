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
  productInfo = {p_id: 40399, productName: 'Ultradark shades'};
  // REACT HOOKS
  const [reviews, setReviews] = React.useState([]);
  const [reviewsCount, setReviewsCount] = React.useState(0);
  const [averageRating, setAverageRating] = React.useState(0);
  const [ratingBreakdown, setRatingBreakdown] = React.useState([]);
  const [percentRecommended, setPercentRecommended] = React.useState(0);
  const [characteristics, setCharacteristics] = React.useState([]);
  React.useEffect(() => refreshReviewData(40399), []);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // HELPER FUNCTIONS
  const refreshReviewData = (p_id) => {
    getAndSetReviews(p_id);
    getAndSetMetadata(p_id);
   }

   const getAndSetReviews = (p_id) => {
     return api.listReviews({ product_id: p_id })
       .then(data => setReviews(data))
       .catch(err => console.log(err));
   }

  const getAndSetMetadata = (p_id) => {
    return api.getReviewsMetadata({product_id: p_id})
    .then(data => {
      console.log(data);
      setReviewsCount(data.reviewsCount);
      setAverageRating(data.averageRating);
      setRatingBreakdown(Object.values(data.ratings).map(value => parseInt(value)));
      setPercentRecommended(100 * data.recRate);
      setCharacteristics(Object.entries(data.characteristics));
    })
    .catch(err => console.log(err));
  }

  // RENDER IT!
  return (
    <section>
      <StyleLib.h2>Ratings and Reviews</StyleLib.h2>
      <GridContainer>
        <GridCol1>
          <AvgRating>{averageRating.toFixed(1)}</AvgRating>
          <Stars rating={averageRating}/>
          <StyleLib.p>{percentRecommended.toFixed(0)}% recommend this product</StyleLib.p>

          <RatingFiltersList ratings={ratingBreakdown}/>
          <FactorsList characteristics={characteristics}/>
        </GridCol1>

        <GridCol2>
          <StyleLib.h4>{reviewsCount} reviews, sorted by
            <StyleLib.dropdown>
              <option value="relevance">relevance</option>
              <option value="recent">recency</option>
              <option value="helpful">helpfulness</option>
            </StyleLib.dropdown>

          </StyleLib.h4>
          <StyleLib.searchBar placeholder='Search reviews'/>
          {reviews.length !== 0 && <ReviewAndQuestionList reviews={reviews} />}
          <StyleLib.button>More Reviews</StyleLib.button>
          <StyleLib.button onClick={openModal}>
            Add a Review
            </StyleLib.button>
        </GridCol2>
      </GridContainer>
      <FormModal productInfo={productInfo} isOpen={modalIsOpen} onClose={closeModal} />
    </section>
  )
}

export default ReviewsModule;