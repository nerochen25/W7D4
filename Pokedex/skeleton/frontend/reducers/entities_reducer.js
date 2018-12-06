import {combineReducers} from 'redux';
import pokemonsReducer from './pokemon_reducer';

export default combineReducers({
  pokemon: pokemonsReducer
});
