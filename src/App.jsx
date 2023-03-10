import './Styles.scss'
import Board from './components/Board'
import { useState } from "react";
import { calculateWinner } from './winner';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
    const NEW_GAME = [{squares : Array(9).fill(null), isXNext : false }];
function App() {
    const [history, setHistory] = useState(NEW_GAME)
    //const [squares, setSquares] = useState(Array(9).fill(null));
    //const [isXNext, setIsXNext] = useState(false);
    const [currentMove , setCurrentMove] = useState(0);
    const gamingBoard = history[currentMove];
    
    const {winner, winningSquares} = calculateWinner(gamingBoard.squares);
        const handleSquareClick = (clickedPosition) => {

        if(gamingBoard.squares[clickedPosition] || winner){
            return ;
        }

        setHistory(currentHistory => {
            const isTraversing = currentMove + 1 !== currentHistory.length;
            const lastGamingState = isTraversing ? currentHistory[currentMove] : currentHistory[currentHistory.length-1];

            const nextSquareState = lastGamingState.squares.map((squareValue, position) =>{
                if(clickedPosition === position){
                    return lastGamingState.isXNext ? 'X' :'0';
                }
                return squareValue;
            }
            );
            const base = isTraversing ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1) : currentHistory;
            return base.concat({ squares: nextSquareState, isXNext : !lastGamingState.isXNext })      
        });
    setCurrentMove(move => move + 1)
    }
    
    
    const moveTo = ((move) =>{
        setCurrentMove(move);
    })
    const onNewGameStart = () =>{
        setHistory(NEW_GAME)
        setCurrentMove(0)
    }
  return (
  <div className='app'>
  <h1><span className='text-orange'>TIC</span> TAC <span className='text-green'>TOE</span></h1>
  <StatusMessage winner = {winner} gamingBoard = {gamingBoard} />
  <Board squares = {gamingBoard.squares} handleSquareClick = {handleSquareClick} winningSquares = {winningSquares} /> 
  <button type='button' className={`btn-reset ${winner ? 'active' : ''}`} onClick={onNewGameStart}> Start New Game</button>
  <h3 style={{fontWeight: 'normal'}}>Current Game History</h3>
  <History history = {history} moveTo = {moveTo} currentMove = {currentMove} />       
  </div>
  )
}

export default App
