const PokemonList = ({ pokemon }) => {
    return (
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    );
  };
  
  export default PokemonList;
  