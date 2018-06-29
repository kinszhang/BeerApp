import reducer from './util';
import expect from 'expect';
import { SET_LOADING_STATE, SET_FETCH_ERROR } from '../actions/actionTypes';

describe('Util Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      hasError: false,
    });
  });

  it('should handle SET_LOADING_STATE', () => {
    const setLoadingStateAction = {
      type: SET_LOADING_STATE,
      isLoading: true,
      hasError: false,
    };

    expect(reducer({}, setLoadingStateAction)).toEqual({
      isLoading: true,
      hasError: false,
    });
  });

  it('should handle SET_FETCH_ERROR', () => {
    const setFetchErrorAction = {
      type: SET_FETCH_ERROR,
      hasError: true,
    };
    expect(reducer({}, setFetchErrorAction)).toEqual({
      hasError: true,
    });
  });

});