import update from 'immutability-helper';
import {
  SET_CURRENT_BEER,
  ADD_PREVIOUS_VIEWED_BEER,
  ADD_FAVOURITE_BEER,
  REMOVE_FAVOURITE_BEER,
  RESET_BEER,
} from '../actions/actionTypes';

const initialState = {
  currentBeer: {
    id: null,
    name: null,
    breweries: [],
    isOrganic: 'N',
    label: '',
    desc: null,
  },
  previousBeers: [],
  favouriteBeers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_BEER:
      return update(state, {
        currentBeer: { $set: action.beer },
      });

    case RESET_BEER:
      return update(state, {
        $set: initialState,
      });

    // TODO second phase
    // case ADD_PREVIOUS_VIEWED_BEER:
    //   return update(state, {
    //     previousBeers: { $push: action.beer },
    //   });
    //
    // case ADD_FAVOURITE_BEER:
    //   return update(state, {
    //     favouriteBeers: { $push: action.beer },
    //   });
    //
    // case REMOVE_FAVOURITE_BEER:
    //   return {
    //     favouriteBeers: { $push: action.beer },
    //   };

    default:
      return state;
  }
};