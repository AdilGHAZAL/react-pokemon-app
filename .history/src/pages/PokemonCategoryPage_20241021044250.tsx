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
  const error = useSelector((state) => state.pokemon.error);

  useEffect(() => {
    if (category) {
      dispatch(fetchPokemonByType(category));
    }
  }, [category, dispatch]);

  return (
    <div>
      <h2>Catégorie : {category}</h2>
      {status === 'loading' && <p>Chargement des Pokémon...</p>}
      {status === 'failed' && <p>Erreur : {error}</p>}
      {status === 'succeeded' && (
        <>
          {pokemonByType.length === 0 ? (
            <p>Aucun Pokémon trouvé dans cette catégorie.</p>
          ) : (
            <PokemonList pokemon={pokemonByType} />
          )}
        </>
      )}
    </div>
  );
};

export default PokemonCategoryPage;
