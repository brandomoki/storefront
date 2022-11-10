import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import categoryReducer from './catagories';
import productsReducer from './products.js';
import cartReducer from './cart.js';

let reducers = combineReducers({
  // categories: categoryReducer,
  products: productsReducer,
  cartReducer: cartReducer,

});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}

// export default function store() {
//   return configureStore(reducers, composeWithDevTools(applyMiddleware(logger)));
// }