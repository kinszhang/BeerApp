import { queryRandomBeer, queryBrewery } from '../api';
import * as actions from './actionTypes';
import PlacehoderBeerIcon from '../images/placeholder.png';

const setCurrentBeer = beer => ({
  type: actions.SET_CURRENT_BEER,
  beer: {
    id: beer.id,
    name: beer.nameDisplay,
    breweries: beer.breweries,
    isOrganic: beer.isOrganic,
    label: beer.labels ? beer.labels.medium : PlacehoderBeerIcon,
    desc: beer.description ? beer.description : 'N/A',
  },
});

const setCurrentBrewery = brewery => ({
  type: actions.SET_CURRENT_BREWERY,
  brewery: {
    id: brewery.id,
    name: brewery.name,
    label: brewery.images ? brewery.images.medium : PlacehoderBeerIcon,
    desc: brewery.description ? brewery.description : 'N/A',
    established: brewery.established ? brewery.established : 'N/A',
  },
});

const setFetchError = hasError => ({
  type: actions.SET_FETCH_ERROR,
  hasError,
});

const setLoadingState = isLoading => ({
  type: actions.SET_LOADING_STATE,
  isLoading,
});

const resetBeer = () => ({
  type: actions.RESET_BEER,
});

const resetBrewery =() => ({
  type: actions.RESET_BREWERY,
});

// TODO second phase
// const addPreviousViewedBeer = beer => ({
//   type: actions.ADD_PREVIOUS_VIEWED_BEER,
//   beer,
// });
//
// const addFavourite = beer => ({
//   type: actions.ADD_FAVOURITE_BEER,
//   beer,
// });
//
// const removeFavourite = beer => ({
//   type: actions.REMOVE_FAVOURITE_BEER,
//   beer,
// });


// Action Creators
const fetchRandomBeer = () => (dispatch => {
  dispatch(setLoadingState(true));
  queryRandomBeer()
    .then(beer => {
      dispatch(setCurrentBeer(beer));
      dispatch(setLoadingState(false));
    })
    .catch(error => {
      dispatch(setFetchError(true));
      throw error;
    })
});

const fetchBrewery = id => (dispatch => {
  dispatch(setLoadingState(true));
  queryBrewery(id)
    .then(brewery => {
      dispatch(setCurrentBrewery(brewery));
      dispatch(setLoadingState(false));
    })
    .catch(error => {
      dispatch(setFetchError(true));
      throw error;
    })
});

export {
  fetchRandomBeer,
  fetchBrewery,
  setLoadingState,
  setFetchError,
  resetBeer,
  resetBrewery,
};
