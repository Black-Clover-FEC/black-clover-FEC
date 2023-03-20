import React from 'react';
import StyleLib from '../../assets/Stylesheet.jsx';
import Stars from '../../assets/Stars.jsx';
import ReviewAndQuestionList from '../../assets/ReviewAndQuestionList.jsx';
import api from '../../lib/api.js';

// const emptyReview = {
//   review_id: 0,
//   rating: 5,
//   summary: null,
//   recommend: false,
//   response: null,
//   date: "2023-01-27T00:00:00.000Z",
//   helpfulness: 0,

// }

const ReviewsModule = () => {
  const [reviews, setReviews] = React.useState([]);
  React.useEffect(() => { listAndSetReviews(40344) }, []);

  const listAndSetReviews = (p_id) => {
    return api.listReviews({ product_id: p_id })
      .then(data => {
        console.log(data)
        setReviews(data);
      })
      .catch(err => console.log(err));
  }


  return (
    <div>
      <StyleLib.h2>Ratings and Reviews</StyleLib.h2>
      <StyleLib.h4>248 reviews, sorted by relevance</StyleLib.h4>
      {reviews.length !== 0 && <ReviewAndQuestionList reviews={reviews} />}
      <StyleLib.button>More Reviews</StyleLib.button>
      <StyleLib.dropdown>
        <option value="option1">option 1</option>
        <option value="option2">option 2</option>
        <option value="option3">option 3</option>
      </StyleLib.dropdown>

    </div>
  )
}

export default ReviewsModule;