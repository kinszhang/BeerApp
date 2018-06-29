import update from 'immutability-helper';
import {
  SET_LOADING_STATE,
  SET_FETCH_ERROR,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  hasError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return update(state, {
        isLoading: { $set: action.isLoading },
        hasError: { $set: false },
      });

    case SET_FETCH_ERROR:
      return update(state, {
        hasError: { $set: action.hasError }
      });

    default:
      return state;
  }
};