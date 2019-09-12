import { GET_ERRORS, LOGIN_USER } from '../actions/actionTypes';

const initState = {
  currentUser: {}
};

export default function registerReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, currentUser: action.payload };
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
