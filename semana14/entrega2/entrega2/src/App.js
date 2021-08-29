import React, { useState, useEffect } from "react";
import './index.css';
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

const App = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  // método que roda após a montagem do componente
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokemonList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changePokeName = (event) => {
    setPokemonName(event.target.value);
  };

  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokemonList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokemonName && <PokeCard pokemon={pokemonName} />}
    </div>
  );
};

export default App;


