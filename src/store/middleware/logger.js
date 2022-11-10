/**
 * The logger function takes a store, returns a function that takes a next function, which returns a
 * function that takes an action.
 * @param store - The store object
 */

const logger = (store) => (next) => (action) => {
  console.log("The action is: ", action);
  next(action);
}