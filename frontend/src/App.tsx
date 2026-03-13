import './App.css'
import GameBoard from './components/GameBoard/GameBoard'
import TopBar from './components/TopBar/TopBar'

function App() {

  return (
    <>
      <div className='appContainer'>
        <TopBar></TopBar>
        <GameBoard></GameBoard>
      </div>
    </>
  )
}

export default App
