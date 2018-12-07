import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => {
  const key = pokemon.id;
  const image = pokemon.image_url;
  const name = pokemon.name;
  return (      
    <Link to={`/pokemon/${key}`}>
    <li key={key}>
    {key}. 
    <img key={key} src={image} />
    {name}
    </li>
    </Link>
  );
};

export default PokemonIndexItem;