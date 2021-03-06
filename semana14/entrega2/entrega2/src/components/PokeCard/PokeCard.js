import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  // método que roda após a montagem do componente
  useEffect(() => {
    setPokemon(props.pokemon);
  }, []);

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  useEffect(
    (prevProps) => {
      pegaPokemon(props.pokemon);
    },
    [props.pokemon]
  );

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const currentPokemon = pokemon;

  return (
    <div>
      <p>{currentPokemon.name}</p>
      <p>{currentPokemon.weight} Kg</p>
      {currentPokemon.types && <p>{currentPokemon.types[0].type.name}</p>}
      {currentPokemon.sprites && (
        <img
          src={currentPokemon.sprites.front_default}
          alt={currentPokemon.name}
        />
      )}
    </div>
  );
}