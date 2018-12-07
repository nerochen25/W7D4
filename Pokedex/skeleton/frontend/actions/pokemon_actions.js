import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';


export const receiveAllPokemon = pokemon => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receiveOnePokemon = onePokemon => {
  return {
    type: RECEIVE_ONE_POKEMON,
    onePokemon
  };
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(allPokemon => 
      dispatch(receiveAllPokemon(allPokemon))
    )
);

export const requestOnePokemon = (id) => (dispatch) => (
  APIUtil.fetchOnePokemon(id)
    .then(onePokemon => 
      dispatch(receiveOnePokemon(onePokemon))
    )
);