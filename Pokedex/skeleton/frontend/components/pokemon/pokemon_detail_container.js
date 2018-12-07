import { connect } from 'react-redux';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
});

const mapDispatchToProps = dispatch => {
  return {
    requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);