const initialState = {
  catagories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronics' },
    { name: 'food', displayName: 'Food', description: 'Food' },
    { name: 'clothing', displayName: 'Clothing', description: 'Clothing' },
  ],
  active: '',
};

function categoryReducer(state = initialState, action) {

  switch (action.type) {
    case 'SELECT':
      return { ...state, active: action.payload };
    default:
      return state;
  }
}

export default categoryReducer;