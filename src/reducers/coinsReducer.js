import { handleActions } from 'redux-actions';
import sortBy from 'lodash/sortBy';
import * as actions from '../dispatchers/coinsActions';

const initState = {
  allCoins: [],
  favorites: []
};

const coinsReducer = handleActions(
  {
    [actions.coinsFetchSuccess]: (state, action) => {
      return {
        ...state,
        allCoins: sortBy(action.payload, ['name'])
      };
    },
    [actions.addToFavorites]: (state, action) => {
      const { favorites, allCoins } = state;
      const toAdd = allCoins.find(e => e.symbol === action.payload);
      const newFavs = sortBy([...favorites, toAdd], ['name']);
      const newAllCoins = allCoins.filter(e => e.symbol !== action.payload);
      console.log(newFavs);
      return {
        ...state,
        allCoins: newAllCoins,
        favorites: newFavs
      };
    }
  },

  initState
);

export default coinsReducer;
