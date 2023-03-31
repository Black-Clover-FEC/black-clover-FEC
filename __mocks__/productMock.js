const ProductInfoObject = {
  details: {
    campus: '',
    category: '',
    created_at: '',
    default_price: '',
    description: '',
    features: [
      {
        feature: '',
        value: null
      },
      {
        feature: '',
        value: null
      }
    ],
    id: null,
    name: '',
    slogan: '',
    updated_at: ''
  },
  reviewsMeta: {
    averageRating: null,
    characteristics: {
      Comfort: {
        id: null,
        value: ''
      },
      Fit: {
        id: null,
        value: ''
      },
      Length: {
        id: null,
        value: ''
      },
      Quality: {
        id: null,
        value: ''
      }
    },
    product_id: '',
    ratings: {},
    recRate: null,
    recommended: {
      false: '',
      true: ''
    },
    reviewsCount: null
  },
  styles: {
    product_id: '',
    results: [
      {
        "default?": true,
        photos: [
          {
            thumbnail_url: '',
            url: ''
          }
        ],
        skus: {
          quantity: 0,
          size: ''
        },
        original_price: '0.00',
        sale_price: null
      }
    ]
  }
}

export default ProductInfoObject;