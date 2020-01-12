import { ADD_KEY } from './actions';
import {
  OPERATIONS,
  DIGITS,
  DOT,
  CLEAR_KEY,
  CALCULATE_KEY,
  MAX_DIGITS
} from './constants';

const initState = {
  expressions: '',
  display: '0',
  operation: ''
};

function keyController(state, action) {
  const key = action.key;
  // Clear expressions
  if (key === CLEAR_KEY) {
    return initState;
  }
  // Handle digits
  const isValidDigit =
    DIGITS.includes(key) && state.display.length < MAX_DIGITS;
  if (isValidDigit) {
    // push display number into expressions if operation is existed
    const newExpressions = OPERATIONS.includes(state.operation)
      ? `${state.expressions}${state.operation}`
      : state.expressions;
    const newDisplay = state.operation
      ? key
      : parseFloat(`${state.display}${key}`).toString();
    return {
      ...state,
      expressions: newExpressions,
      display: newDisplay,
      operation: ''
    };
  }
  // Handle dot
  const isValidDot =
    DOT === key && // is '.'
    (state.operation || state.display.indexOf(DOT) === -1) && // no '.' in current number
    state.display.length < MAX_DIGITS; // still enough space
  if (isValidDot) {
    // push operation into expressions if existed
    const newExpressions = OPERATIONS.includes(state.operation)
      ? `${state.expressions}${state.operation}`
      : state.expressions;
    // reset display if operation (include '=') is existed
    const newDisplay = state.operation ? '0.' : `${state.display}${key}`;
    return {
      ...state,
      expressions: newExpressions,
      operation: '',
      display: newDisplay
    };
  }
  // Handle operations
  const isOperation = OPERATIONS.includes(key);
  if (isOperation) {
    return {
      ...state,
      expressions: OPERATIONS.includes(state.operation)
        ? state.expressions
        : `${state.expressions}${parseFloat(state.display)}`,
      operation: key
    };
  }
  // Calculate
  if (CALCULATE_KEY === key) {
    // Push display number to express if no operation
    const lastExpressions = OPERATIONS.includes(state.operation)
      ? state.expressions
      : `${state.expressions}${state.display}`;
    // calculate if expression isn't empty
    const display = state.expressions
      ? eval(lastExpressions).toString()
      : state.display;
    return {
      ...initState,
      display,
      operation: key
    };
  }
  return state;
}

const calculator = (state = initState, action) => {
  switch (action.type) {
    case ADD_KEY:
      return keyController(state, action);
    default:
      return state;
  }
};
export default calculator;
