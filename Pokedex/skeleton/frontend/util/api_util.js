export const fetchAllPokemon = searchPokemon => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

