import {INCREMENT_ERRORS, INCREMENT_QUESTION, RESET} from "./actions";

const initialState = {
  questionNumber: 0,
  errors: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ERRORS:
      return Object.assign({}, state, {
        errors: state.errors + 1,
      });
    case INCREMENT_QUESTION:
      return Object.assign({}, state, {
        questionNumber: state.questionNumber + 1,
      });
    case RESET:
      return Object.assign({}, state, {
        questionNumber: 0,
        errors: 0,
      });
    default:
      return state;
  }
};

export default reducer;
