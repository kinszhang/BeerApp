import fetch from 'isomorphic-fetch';
import Promise from 'promise';

//const API_KEY = 'a5c1b917e7ba62dcd79f434ed73bc72d';
const API_KEY = 'd89e704be6b9f0d54bd8f22235bfea32';

const HTTP = 'https://',
      PROX = 'CORS-Anywhere.HerokuApp.com/',
      SITE = 'api.brewerydb.com/',
      PATH = 'v2',
      API_URL  = HTTP + PROX + HTTP + SITE + PATH;

const apiCall = (url) => {
  const header = new Headers({
    'Access-Control-Allow-Origin': '*',
  });

  const options = {
    header,
  };

  return fetch(url, options)
    .then((response) => {
      if (response.status >= 400) {
        return Promise.reject('Invalid response');
      }
      return response.json();
    });
};

const queryRandomBeer = () => {
  return apiCall(`${API_URL}/beer/random/?withBreweries=Y&hasLabels=Y&key=${API_KEY}`)
    .then(json => json.data);
};

const queryBrewery = (breweryId) => {
  return apiCall(`${API_URL}/brewery/${breweryId}/?key=${API_KEY}`)
    .then(json => json.data);
};

export {
  queryRandomBeer,
  queryBrewery,
}