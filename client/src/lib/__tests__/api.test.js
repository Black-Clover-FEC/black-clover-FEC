import api from '../api.js';

// resources: https://jestjs.io/docs/asynchronous

// TEST API CALLS
describe('Can an API call send and recieve data', () => {

  it('gets a list of products from the API', async () => {
    const data = await api.listProducts();
    expect(data).toHaveLength(5);
  })

  it('gets a product number 40344 from the API', async () => {
    const data = await api.getProductId(40344);
    const result = JSON.stringify({
      id: 40344,
      campus: 'hr-rfp',
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140.00',
      created_at: '2021-08-13T14:38:44.509Z',
      updated_at: '2021-08-13T14:38:44.509Z',
      features: [
        { feature: 'Fabric', value: 'Canvas' },
        { feature: 'Buttons', value: 'Brass' }
      ]
    })
    expect(JSON.stringify(data)).toBe(result);
  })

  })
