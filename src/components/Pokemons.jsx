import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemons = () => {
  const [number, setNumber] = useState(1);
  const [pokemon, setPokemon] = useState('');
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${number}`
      );
      const {
        sprites: { front_default },
        name,
        weight
      } = response.data;
      const object = { front_default, name, weight };
      setPokemon(object);
    }
    getData();
  }, [number]);
  return (
    <div>
      <h1>Pick a pokemon</h1>
      <h4>You chose: {number}</h4>
      <h4>
        Name: {pokemon.name}. Weight: {pokemon.weight}
      </h4>
      <img src={pokemon.front_default} alt={pokemon.name} />
      <br />
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
      </select>
    </div>
  );
};

export default Pokemons;
