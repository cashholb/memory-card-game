import { useState, useEffect } from 'react'
import HomePage from './pages/home-page';
import PokemonPage from './pages/pokemon-page';

import './App.css'

function App() {

  const [currPage, setCurrPage] = useState('home');
  const [normalHighScore, setNormalHighScore] = useState(0);
  const [hardHighScore, setHardHighScore] = useState(0);

  // get local storage data for high scores
  useEffect (() => {
    const localNormalHighScore = localStorage.getItem('localNormalHighScore') || 0;
    const localHardHighScore = localStorage.getItem('localHardHighScore') || 0;

    setNormalHighScore(localNormalHighScore);
    setHardHighScore(localHardHighScore);
  }, []);

  const checkIncrementNormalHighScore = (currScore) => {
    let newHighScore = normalHighScore;

    if (currScore > normalHighScore) {
      newHighScore = currScore;
      localStorage.setItem('localNormalHighScore', newHighScore);
    }
    setNormalHighScore(newHighScore);
  }

  const checkIncrementHardHighScore = (currScore) => {
    let newHighScore = hardHighScore;

    if (currScore > hardHighScore) {
      newHighScore = currScore;
      localStorage.setItem('localHardHighScore', newHighScore);
    }
    setHardHighScore(newHighScore);
  }

  const handlePageChange = (pageName) => {
    setCurrPage(pageName);
  }

  const renderPage = () => {
    switch (currPage) {
      case 'home':
        return <HomePage onChangeNormal={() => handlePageChange('normal')} onChangeHard={() => handlePageChange('hard')} normalHighScore={normalHighScore} hardHighScore={hardHighScore}/>
      case 'normal':
        return <PokemonPage onBackHome={() => handlePageChange('home')} highScore={normalHighScore} checkIncrementHighScore={checkIncrementNormalHighScore}/>
      case 'hard':
        return <PokemonPage onBackHome={() => handlePageChange('home')} highScore={hardHighScore} checkIncrementHighScore={checkIncrementHardHighScore} isHard={true}/>
    }
  }

  return (
    <div className='app-container'>
      {renderPage()}
    </div>
  );
};

export default App
