import axios from 'axios';
import config from '../env/config.js';

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



// PRODUCTS
api.listProducts = (params) => {
  return get('products/', params);
};



// REVIEWS
api.listReviews = (params) => {
  return get('reviews', params);
};

api.getReviewsMetadata = (params) => {
  return get('reviews/meta', params);
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

// api.listProducts = (params) => {
//   return axios.get(`${url}/products/`, {headers: {Authorization: config.AUTH}, params: params})
//     .then(results => results.data)
//     .catch(err => console.error('Error getting the reviews from server: ' + err));
// }

// api.getReviews = (params) => {
//   return axios.get(`${url}/reviews/`, {headers: {Authorization: config.AUTH}, params: params})
//     .then(results => results.data)
//     .catch(err => console.error('Error getting the reviews from server: ' + err));
// }

// how to use this code in your other files:
// import api from '../lib/api.js';
// api.getReviews({product_id: 40344}) // example passing one parameter: product id
//   .then(data => console.log(data))
//   .catch(err=> console.error(err));

export default api;