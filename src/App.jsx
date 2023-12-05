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
        return <HomePage onChangeNormal={() => handlePageChange('normal')} onChangeHard={() => handlePageChange('hard')}/>
      case 'normal':
        return <PokemonPage onBackHome={() => handlePageChange('home')}/>
      case 'hard':
        return <PokemonPage onBackHome={() => handlePageChange('home')} isHard={true}/>
    }
  }

  return (
    <>
      {renderPage()}
    </>
  );
};

export default App
