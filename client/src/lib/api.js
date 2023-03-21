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



// PRODUCTS
api.listProducts = (params) => {
  return get('products/', params);
};

// QUESTIONS AND ANSWERS
api.listQuestions = (params) => {
  return get('/qa/questions', params);
}

api.listAnswers = (question_id) => {
  return get(`/qa/questions/${question_id}/answers`, params);
}

api.addQuestion = (params) => {
  return post('/qa/questions', params);
}

api.addAnswer = (question_id) => {
  return post(`/qa/questions/${question_id}/answers`, params);
}

api.markQuestionHelpful = (question_id) => {
  return put(`/qa/questions/${question_id}/helpful`, params);
}

api.reportQuesion = (question_id) => {
  return put(`/qa/questions/${question_id}/report`, params)
}

api.markAnswerHelpful = (answer_id) => {
  return put(`/qa/answers/${answer_id}/helpful`, params)
}

api.reportAnswer = (answer_id) => {
  return put(`/qa/answers/${answer_id}/report`, params)
}
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



export default api;