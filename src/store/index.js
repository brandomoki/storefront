import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  // Add reducers here
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}