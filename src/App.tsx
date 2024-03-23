import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <PokemonList />
        <PokemonDetails pokemonName="pikachu" />
      </div>
    </Provider>
  );
};

export default App;
