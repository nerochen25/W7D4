import merge from 'lodash/merge';
import {RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';

const pokemonsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, state, action.pokemon);
    case RECEIVE_ONE_POKEMON:
      let poke = action.onePokemon.pokemon; 
      return merge({}, state, {[poke.id]: poke});
    default:
      return state;
  }
};

export default pokemonsReducer;