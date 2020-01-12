// Action types
export const ADD_KEY = 'ADD_KEY';

/**
 * Add a key pad to the expressions
 * @param {String} key Key pad (digits, operators)
 */
export const addKey = key => ({
  type: ADD_KEY,
  key
});
