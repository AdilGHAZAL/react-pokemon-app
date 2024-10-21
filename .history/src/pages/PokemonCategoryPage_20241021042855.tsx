import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonByType } from '../features/pokemon/pokemonSlice';
import PokemonList from '../components/PokemonList';
import { useParams } from 'react-router-dom';

const PokemonCategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const pokemonByType = useSelector((state) => state.pokemon.pokemonByType[category]);
  const status = useSelector((state) => state.pokemon.status);
  
  useEffect(() => {
    dispatch(fetchPokemonByType(category));
  }, [category, dispatch]);

  return (
    <div>
      <h2>Pokémon Type: {category}</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <PokemonList pokemon={pokemonByType} />}
      {status === 'failed' && <p>Error loading Pokémon.</p>}
    </div>
  );
};

export default PokemonCategoryPage;
