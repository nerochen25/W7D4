import merge from 'lodash/merge';

import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state={}, action) => {
  Object.freeze(state);
  let items;
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      items = action.onePokemon.items; //payload??
      return merge({}, state, items);
    default:
      return state;
  }
};

export default itemsReducer;