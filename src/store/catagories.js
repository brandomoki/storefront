const initialState = {
  catagories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Welcome to Circuit City, Where Service Is State of the Art.' },
    { name: 'food', displayName: 'Food', description: 'I\'m lovin it' },
    { name: 'clothing', displayName: 'Clothing', description: 'For Us, By Us' },
  ],
  active: '',
};

function categoryReducer(state = initialState, action) {
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

export default categoryReducer;