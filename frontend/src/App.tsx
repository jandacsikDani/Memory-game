import './App.css'
import GameBoard from './components/GameBoard/GameBoard'
import TopBar from './components/TopBar/TopBar'
import { useState } from 'react'

function App() {
  const [gameSettings, setGameSettings] = useState<{pairs: number; seconds: number;}>({pairs: 0, seconds: 0});
  const [resetTrigger, setResetTrigger] = useState(0);
  const [matches, setMatches] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  function handleReset(){
    setResetTrigger(prev => prev +1);
  }

  return (
    <>
      <div className='appContainer'>
        <TopBar onModalSubmit={setGameSettings} onReset={handleReset} matches={matches} mistakes={mistakes}></TopBar>
        <GameBoard settings={gameSettings} resetTrigger={resetTrigger} onMatch={setMatches} onMistake={setMistakes}></GameBoard>
      </div>
    </>
  )
}

export default App
