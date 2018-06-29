import reducer from './brewery';
import expect from 'expect';
import { SET_CURRENT_BREWERY, RESET_BREWERY } from '../actions/actionTypes';
import { MOCKDATA } from '../mock/mockData';

describe('Brewery Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      "currentBrewery": {
        "desc": null,
        "established": null,
        "id": null,
        "label": "",
        "name": null
      }
    });
  });

  it('should handle SET_CURRENT_BREWERY', () => {
    const updateAction = {
      type: SET_CURRENT_BREWERY,
      brewery: MOCKDATA.brewery,
    };

    expect(reducer({}, updateAction)).toEqual({
      "currentBrewery": {
        "id": "uSFO4T",
        "name": "Great Lakes Brewing Company",
        "description": "In the 1870s, Cleveland had 30 breweries.",
        "established": "1988",
        "label": "https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/uSFO4T\/upload_JF7uqw-medium.png",
      }
    });
  });

  it('should handle RESET_BREWERY', () => {
    const resetAction = {
      type: RESET_BREWERY,
    };
    expect(reducer({}, resetAction)).toEqual({
      "currentBrewery": {
        "desc": null,
        "established": null,
        "id": null,
        "label": "",
        "name": null
      }
    });
  });

});