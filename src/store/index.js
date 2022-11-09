import {configureStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoryReducer from './categories.js';
import productsReducer from './products.js';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
});

export default function store() {
  return configureStore(reducers, composeWithDevTools());
}