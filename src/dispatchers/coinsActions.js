import { createAction } from 'redux-actions';
import axios from 'axios';

export const coinsFetch = createAction('COINS_FETCH');
export const coinsFetchSuccess = createAction('COINS_FETCH_SUCCESS');
export const coinsFetchFailure = createAction('COINS_FETCH_FAILURE');
export const addToFavorites = createAction('ADD_TO_FAVORITES');

export function fetchCoins() {
  return dispatch => {
    dispatch(coinsFetch());
    return axios
      .get(`https://coincap.io/map`)
      .then(response => {
        dispatch(coinsFetchSuccess(response.data));
      })
      .catch(error => console.log(error));
  };
}
