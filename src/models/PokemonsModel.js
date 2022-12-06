import usePokemons from '../services/usePokemons';
import PokemonColorModel from './PokemonColorModel';

const PokemonsModel = (query = 1) => {
  const { pokemon, error } = usePokemons(query);

  if (Boolean(pokemon)) {
    pokemon.name = makeFirstLetterUpperCase(pokemon?.name);
    pokemon.image = pokemon.sprites.front_default;
    pokemon.cardColor = PokemonColorModel?.[pokemon?.types?.[0]?.type?.name] || null;
  }

  return { pokemon, error };
};

export default PokemonsModel;

const makeFirstLetterUpperCase = (name) => {
  if (!name) {
    return '';
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
};
