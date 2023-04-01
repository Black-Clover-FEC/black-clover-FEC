// Steps to API success:
// 1. update your AUTH to match a github key you've made
// 2. make a COPY of this file named 'config.js'. don't replace the original.
// 3. triple check that client/src/env/config.js is on your .gitignore list

const config = {
  CAMPUS_CODE: 'hr-rfp',
  AUTH: 'YOUR KEY GOES HERE AS A STRING'
  IMGUR_CLIENT_ID: 'YOUR IMGUR CLIENT ID GOES HERE AS A STRING',
  IMGUR_CLIENT_SECRET: 'YOUR SECRET IMGUR CLIENT ID GOES HERE AS A STRING'
};

module.exports = config;