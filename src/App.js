import React from 'react';
import Toggler from './components/Toggler';
import SimpleFormHooks from './components/SimpleFormHooks'; // this one use useState on the component
import SimpleFormInputHook from './components/SimpleFormInputHook'; // this one use a custom hook created in the hooks folder
import Clicker from './components/Clicker';
import Pokemons from './components/Pokemons';

function App() {
  return (
    <>
      {/* <Toggler />
      <SimpleFormHooks />
      <SimpleFormInputHook /> */}
      {/* <Clicker /> */}
      <Pokemons />
    </>
  );
}

export default App;
