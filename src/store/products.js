let initialState = [
  { name: 'TV', description: 'TV', price: 499, category: 'electronics', inStock: 7 },
  { name: 'Radio', description: 'Radio', price: 50, category: 'electronics', inStock: 15 },
  { name: 'Shirt', description: 'Shirt', price: 23, category: 'clothing', inStock: 25 },
  { name: 'Socks', description: 'Socks', price: 7, category: 'clothing', inStock: 50 },
  { name: 'Apples', description: 'Apples', price: .50, category: 'food', inStock: 300 },
  { name: 'Eggs', description: 'Eggs', price: 4, category: 'food', inStock: 24 },
  { name: 'Bread', description: 'Bread', price: 3, category: 'food', inStock: 16 },
];


function productsReducer(state = initialState, action) {

  switch (action.type) {
    case 'SELECT':
      return initialState.filter(product => product.category === action.payload);
    default:
      return state;
  }
}

export default productsReducer;