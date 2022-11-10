let initialState = {
  products: [

  { name: 'TV', description: 'TV', price: 499, category: 'electronics', inStock: 7 },
  { name: 'Radio', description: 'Radio', price: 50, category: 'electronics', inStock: 15 },
  { name: 'Shirt', description: 'Shirt', price: 23, category: 'clothing', inStock: 25 },
  { name: 'Socks', description: 'Socks', price: 7, category: 'clothing', inStock: 50 },
  { name: 'Apples', description: 'Apples', price: .50, category: 'food', inStock: 300 },
  { name: 'Eggs', description: 'Eggs', price: 4, category: 'food', inStock: 24 },
  { name: 'Bread', description: 'Bread', price: 3, category: 'food', inStock: 16 },

  ],
  active: '',
};


function productsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'category':
      return { ...state, active: payload };

      case 'reset':
        return initialState;

    default:
      return initialState;
  }
}

export const selectCategory = (active) => {
  return {
    type: 'category',
    payload: active,
  };
};


export default productsReducer;