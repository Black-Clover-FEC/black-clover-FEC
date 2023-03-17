import axios from 'axios';

const api = {};

api.getReviews = (params) => {
  // TODO:
  // figure out how to quickly test functionality of requests
  // figure out how to get params into the request correctly
  axios.get(`/reviews/`)
    .then(results => return results.data)
    .catch(err => console.error('Error getting the reviews from server: ' + err));
}