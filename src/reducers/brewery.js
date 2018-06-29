import update from 'immutability-helper';
import {
  SET_CURRENT_BREWERY,
  RESET_BREWERY,
} from '../actions/actionTypes';

const initialState = {
  currentBrewery: {
    id: null,
    name: null,
    label: '',
    desc: null,
    established: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_BREWERY:
      return update(state, {
        currentBrewery: { $set: action.brewery },
      });

    case RESET_BREWERY:
      return update(state, {
        $set: initialState,
      });

    default:
      return state;
  }
};