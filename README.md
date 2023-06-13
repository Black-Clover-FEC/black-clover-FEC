# Overview: black-clover-FEC

## Table of Contents
<!-- QUESTIONING IF WE WANT THIS.. makes it look like the readme is longer than it is, which might discourage acutally reading it. -->
1. [Description](https://github.com/Black-Clover-FEC/black-clover-FEC#description)
2. [Authors](https://github.com/Black-Clover-FEC/black-clover-FEC#authors)
3. [Modules](https://github.com/Black-Clover-FEC/black-clover-FEC#modules)
   * [Product Index](https://github.com/Black-Clover-FEC/black-clover-FEC#product-index)
   * [Product Overview Module](https://github.com/Black-Clover-FEC/black-clover-FEC#product-overview-module)
   * [Related Products Module](https://github.com/Black-Clover-FEC/black-clover-FEC#Related-Products-Module)
   * [Q&A Module](https://github.com/Black-Clover-FEC/black-clover-FEC#Q%26A-Module)
   * [Ratings and Reviews Module](https://github.com/Black-Clover-FEC/black-clover-FEC#Ratings-and-Reviews-Module)
4. [Installation](https://github.com/Black-Clover-FEC/black-clover-FEC#installation)

---

## Description
An aesthetic and responsive e-commerce product page for retailers.

## Tech Stack
<!-- REPLACE THESE WITH BADGES
* Javascript (ES5/ES6)
* HTML5
* CSS3
* React-Router
* Styled-Components
* Express
* Axios
* AWS EC2
-->

## Authors
* [Yale Yang] (https://github.com/yaleyang5)
* [Brandon Woods] (https://github.com/brawoods)
* [Johnathan Simeroth] (https://github.com/johnsimeroth)
* [Noah Clouthier] (https://github.com/noahboa75)

## Modules
### Product Index - DRI: Johnathan Simeroth
#### Key Features
* Provides basic navigation to all products in the catalog
* *This module was not in the original project scope, but was added to improve overall dev-user experience*
<!-- insert gif of this feature in use here -->

### Product Overview Module - DRI: Yale Yang
#### Key Features
* Boasts a gallery of style-specific product images in a carousel
* Responsive style, size, and quantity selection
<!-- insert gif of this feature in use here -->

### Related Products Module - DRI: Brandon Woods
#### Key Features
* Displays a list of related products in a custom carousel
* Comparison of related products feature-by-feature
* Persistent memory of user-saved products in their "outfit"
<!-- insert gif of this feature in use here -->

### Ratings and Reviews Module - DRI: Johnathan Simeroth
#### Key Features
* Lists product-specific reviews
* Displays product review meta-data
* Enables users to sort reviews and stack multiple filters
* Modal form allows users to add their own reviews
* Integration with Imgur API enables user photo uploads (as a stopgap until the client's backend adds support for image storage)
<!-- insert gif of this feature in use here -->

### Q&A Module - DRI: Noah Clouthier
#### Key Features
* Lists product-specific questions and answers
* Enables users to add their own questions and answers
<!-- insert gif of this feature in use here -->


## Installation
To get started with the dev version of this repo, follow these steps:
1. Fork / Clone the repo
2. Replace config.example.js in the env folder with a config.js file, filling out the required tokens and keys.
3. `npm install`
4. `npm run serve`
5. `npm run build`
6. Navigate to localhost:8080 and start shopping!
