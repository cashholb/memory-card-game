import { useState } from 'react'
import HomePage from './pages/home-page';
import PokemonPage from './pages/pokemon-page';

import './App.css'



function App() {

  const [currPage, setCurrPage] = useState('home');

  const handlePageChange = (pageName) => {
    setCurrPage(pageName);
  }

  const renderPage = () => {
    switch (currPage) {
      case 'home':
        return <HomePage onChangePokemon={() => handlePageChange('pokemon')} onChangeMtg={() => handlePageChange('mtg')}/>
      case 'pokemon':
        return <PokemonPage onBackHome={() => handlePageChange('home')}/>
    }
  }

  return (
    <>
      {renderPage()}
    </>
  );
};

export default App
