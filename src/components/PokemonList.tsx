const PokemonList = ({ pokemon }) => {
    return (
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    );
  };
  
  export default PokemonList;
  