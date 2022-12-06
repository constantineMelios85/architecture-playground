import React from 'react';

import { Card } from '@mui/material';

import styles from './styles/PokemonView.module.scss';

const PokemonView = ({ pokemon, backgroundColor = '#FFD700 ' }) => {
  if (!pokemon) return null;

  return (
    <div className={styles.container}>
      <Card raised styles={{ borderRadius: '100px' }}>
        <div className={styles.card} style={{ backgroundColor }}>
          <h1>{pokemon.name}</h1>
          <p>ID: {pokemon.id}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <div className={styles.imageContainer}>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PokemonView;
