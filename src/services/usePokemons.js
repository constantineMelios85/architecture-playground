import useSWR from 'swr';

const usePokemons = (query) => {
  const { data: pokemon, error } = useSWR(
    Boolean(query) ? `https://pokeapi.co/api/v2/pokemon/${query}/` : null,
    (url) => fetch(url).then((res) => res.json()),
    { suspense: false, revalidateOnFocus: false }
  );

  return { pokemon, error, loading: !Boolean(pokemon) && !Boolean(error) };
};

export default usePokemons;
