import React from 'react';
import Game from './components/Game';
import RockPaperScissors from './components/RockPaperScissors';
import MemoryGame from './components/MemoryGame';
import './css/memorygame.css';
import './css/rockpaperscissors.css';
import './css/game.css';
function App() {
  return (
    <>
      <div className="jeuxdevinettes">
        <h1>Jeu de Devinettes</h1>
        <Game />
      </div>
      <div className="pierrepapierciseaux">
        <h1>Jeu de Pierre-Papier-Ciseaux</h1>
        <RockPaperScissors />
      </div>
      <div className="jeuxmemoire">
        <h1>Jeu de Mémoire</h1>
        <MemoryGame />
      </div>
    </>

  );
}

export default App;