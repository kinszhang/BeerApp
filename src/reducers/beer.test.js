import reducer from './beer';
import expect from 'expect';
import { SET_CURRENT_BEER, RESET_BEER } from '../actions/actionTypes';
import { MOCKDATA } from '../mock/mockData';

describe('Beer Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      "currentBeer": {
        id: null,
        name: null,
        breweries: [],
        isOrganic: 'N',
        label: '',
        desc: null,
      },
      "previousBeers": [],
      "favouriteBeers": [],
    });
  });

  it('should handle SET_CURRENT_BEER', () => {
    const updateAction = {
      type: SET_CURRENT_BEER,
      beer: MOCKDATA.beer,
    };

    expect(reducer({}, updateAction)).toEqual({
      "currentBeer": {
        "id":"tZbLKw",
        "name":"Hop Madness",
        "desc":"Beware! Our deranged brewers",
        "isOrganic":"N",
        "label":"https:\/\/s3.amazonaws.com\/brewerydbapi\/beer\/tZbLKw\/upload_FOjJat-medium.png",
        "breweries":[
          {
            "id":"uSFO4T",
            "name":"Great Lakes Brewing Company",
            "nameShortDisplay":"Great Lakes",
            "description":"In the 1870s, Cleveland had 30 breweries. By the early 1980s, the last one had shuttered its doors. So when brothers Patrick and Daniel Conway opened Great Lakes Brewing Company on September 6, 1988, it not only signaled a new era in Cleveland brewing, it was also the first microbrewery in the state of Ohio. And the idea of a craft brewery in Cleveland caught on fast, as curious patrons hurried in for a pint crafted in the styles of old and drawn from the taps of the beautiful Victorian era bar. The company's commitment to sustainable business practices greatly contributed to its early popularity and success. Before long, Great Lakes Brewing Company had become one of Cleveland's most popular destinations for both dining and a fun night out.",
            "website":"http:\/\/www.greatlakesbrewing.com\/",
            "established":"1988",
            "isOrganic":"N",
            "images":{
              "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/uSFO4T\/upload_JF7uqw-icon.png",
              "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/uSFO4T\/upload_JF7uqw-medium.png",
              "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/uSFO4T\/upload_JF7uqw-large.png",
              "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/uSFO4T\/upload_JF7uqw-squareMedium.png",
              "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/uSFO4T\/upload_JF7uqw-squareLarge.png"
            },
            "status":"verified",
            "statusDisplay":"Verified",
            "createDate":"2012-01-03 02:41:56",
            "updateDate":"2016-10-19 04:41:40",
            "isMassOwned":"N",
            "brandClassification":"craft",
            "locations":[
              {
                "id":"8dIvZw",
                "name":"Main Brewery",
                "streetAddress":"1947 West 28th Street",
                "locality":"Cleveland",
                "region":"Ohio",
                "postalCode":"44113",
                "phone":"216-771-4404",
                "website":"http:\/\/www.greatlakesbrewing.com\/",
                "hoursOfOperation":"Monday - Thursday: 11:30 AM - 10:30 PM (bar open until 12:00 AM)\r\nFriday and Saturday: 11:30 AM - 11:30 PM (bar open until 1:00 AM)\r\nSundays: Closed",
                "latitude":41.484295,
                "longitude":-81.705375,
                "isPrimary":"Y",
                "inPlanning":"N",
                "isClosed":"N",
                "openToPublic":"Y",
                "locationType":"micro",
                "locationTypeDisplay":"Micro Brewery",
                "countryIsoCode":"US",
                "yearOpened":"1988",
                "status":"verified",
                "statusDisplay":"Verified",
                "createDate":"2012-01-03 02:41:56",
                "updateDate":"2014-07-23 19:11:34",
                "country":{
                  "isoCode":"US",
                  "name":"UNITED STATES",
                  "displayName":"United States",
                  "isoThree":"USA",
                  "numberCode":840,
                  "createDate":"2012-01-03 02:41:33"
                }
              },
              {
                "id":"xSmsLL",
                "name":"Great Lakes Brewpub",
                "streetAddress":"2516 Market Avenue",
                "locality":"Cleveland",
                "region":"Ohio",
                "postalCode":"44113",
                "phone":"216-771-4404",
                "website":"http:\/\/www.greatlakesbrewing.com\/brewpub\/around-the-brewpub",
                "hoursOfOperation":"Monday - Thursday: 11:30 AM - 10:30 PM (bar open until 12:00 AM)\r\nFriday and Saturday: 11:30 AM - 11:30 PM (bar open until 1:00 AM)\r\nSundays: Closed",
                "latitude":41.484446,
                "longitude":-81.704436,
                "isPrimary":"N",
                "inPlanning":"N",
                "isClosed":"N",
                "openToPublic":"Y",
                "locationType":"brewpub",
                "locationTypeDisplay":"Brewpub",
                "countryIsoCode":"US",
                "status":"verified",
                "statusDisplay":"Verified",
                "createDate":"2013-12-10 17:48:32",
                "updateDate":"2014-07-23 19:11:34",
                "country":{
                  "isoCode":"US",
                  "name":"UNITED STATES",
                  "displayName":"United States",
                  "isoThree":"USA",
                  "numberCode":840,
                  "createDate":"2012-01-03 02:41:33"
                }
              }
            ]
          }
        ],
      }
    });
  });

  it('should handle RESET_BEER', () => {
    const resetAction = {
      type: RESET_BEER,
    };
    expect(reducer({}, resetAction)).toEqual({
      "currentBeer": {
        id: null,
        name: null,
        breweries: [],
        isOrganic: 'N',
        label: '',
        desc: null,
      },
      "previousBeers": [],
      "favouriteBeers": [],
    });
  });

});