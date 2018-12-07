import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestOnePokemon(this.props.match.params.pokemonId);
  } 
}
  
  render() {
    const { pokemon } = this.props;
    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemon.image_url} alt={pokemon.name} />
        </figure>
        <ul>
          <li>
            <h2>{pokemon.name}</h2>
          </li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {pokemon.moves}</li>
        </ul>
      </section>
    );
  }
  
}

export default PokemonDetail;