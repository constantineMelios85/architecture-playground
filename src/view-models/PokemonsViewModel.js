import { useState } from 'react';
import PokemonsModel from '../models/PokemonsModel';

const PokemonViewModel = ({ children }) => {
  const [index, setIndex] = useState(1);
  const { pokemon, error, loading } = PokemonsModel(index);

  const handleNext = () => setIndex((prevIndex) => prevIndex + 1);
  const handlePrev = () => setIndex((prevIndex) => prevIndex - 1);

  return children({
    pokemon,
    handleNext,
    handlePrev,
    showError: Boolean(error),
    showLoading: loading,
    disablePrev: index === 1,
  });
};

export default PokemonViewModel;
