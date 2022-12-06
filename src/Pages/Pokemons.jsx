import React from 'react';
import PokemonViewModel from '../view-models/PokemonsViewModel';
import Buttons from '../views/Buttons';
import PokemonView from '../views/PokemonView';

const Pokemons = () => (
  <PokemonViewModel>
    {({ pokemon, handleNext, handlePrev, disablePrev }) => (
      <>
        <Buttons handleNext={handleNext} handlePrev={handlePrev} disablePrev={disablePrev} />
        <h1>Gotta catch'em all</h1>
        <PokemonView pokemon={pokemon} backgroundColor={pokemon?.cardColor} />
      </>
    )}
  </PokemonViewModel>
);

export default Pokemons;
