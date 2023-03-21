import axios from 'axios';
import config from '../env/config.js';


// This first section contains helper/template functions to keep our other functions
// simple and DRY. Reuse them! But please don't edit them without team buy-in, because all
// of our individual API functions rely on them.
const api = {};

const url = `https://app-hrsei-api.herokuapp.com/api/fec2/${config.CAMPUS_CODE}`;

const get = (endpoint, params = {}) => {
  return axios.get(`${url}/${endpoint}/`, {headers: {Authorization: config.AUTH}, params: params})
    .then(results => results.data)
    .catch(err => console.error(`Error getting ${endpoint} from server:  ${err}`));
}

const post = (endpoint, data = {}, params = {}) => {
  return axios.post(`${url}/${endpoint}/`, data, {headers: {Authorization: config.AUTH}, params: params})
    .then(results => results.data)
    .catch(err => console.error(`Error getting ${endpoint} from server:  ${err}`));
}

const put = (endpoint, data = {}, params = {}) => {
  return axios.put(`${url}/${endpoint}/`, data, {headers: {Authorization: config.AUTH}, params: params})
    .then(results => results.data)
    .catch(err => console.error(`Error getting ${endpoint} from server:  ${err}`));
}



// FOR ALL BELOW FUNCTIONS, SEE ATELIER DOCS (ON LEARN) FOR LIST OF RELEVANT PARAMS TO PASS IN

// PRODUCTS
api.listProducts = (params) => {
  return get('products', params);
};

api.getProductId = (product_id) => {
  return get(`products/${product_id}`);
}

api.getProductStyles = (product_id) => {
  return get(`products/${product_id}/styles`);
}

api.getRelatedProducts = (product_id) => {
  return get(`products/${product_id}/related`);
}



// REVIEWS
api.listReviews = (params) => {
  return get('reviews', params)
    .then(data => data.results);
};

api.getReviewsMetadata = (params) => {
  return get('reviews/meta', params)
    .then(data => {
      let totalCount = 0;
      let totalScore = 0;
      for (let rating in data.ratings) {
        const count = parseInt(data.ratings[rating]);
        totalCount += count;
        totalScore += rating * count;
      }
      data.reviewsCount = totalCount;
      data.averageRating = totalScore / totalCount;
      data.recRate = data.recommended.true / totalCount;
      return data;
  })
  .catch(err => console.error(err));
};

api.addReview = (review) => {
  return post('reviews', review);
};

api.markReviewHelpful = (review_id) => {
  return put(`reviews/${review_id}/helpful`);
};

api.reportReview = (review_id) => {
  return put(`reviews/${review_id}/report`);
};



export default api;