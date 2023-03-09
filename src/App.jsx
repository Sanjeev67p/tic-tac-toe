import './Styles.scss'
import Board from './components/Board'
import { useState } from "react";
import { calculateWinner } from './winner';
import History from '.components/History';
import StatusMessage from './components/StatusMessage';

function App() {
    const [history, setHistory] = useState([{squares : Array(9).fill(null), isXNext : false }])
    //const [squares, setSquares] = useState(Array(9).fill(null));
    //const [isXNext, setIsXNext] = useState(false);
    const [currentMove , setCurrentMove] = useState(0);
    const gamingBoard = history[currentMove];
    const winner = calculateWinner(gamingBoard.squares);
        const handleSquareClick = (clickedPosition) => {

        if(gamingBoard.squares[clickedPosition] || winner){
            return;
        }

        setHistory(currentHistory => {
            const lastGamingState = history[history.length-1];

            const nextSquareState = lastGamingState.squares.map((squareValue, position) =>{
                if(clickedPosition === position){
                    return lastGamingState.isXnextisXnext ? 'X' :'0';
                }
                return squareValue;
            })
            return currentHistory.concat({ squares: nextSquareState, isXNext : !lastGamingState.isXNext, })      
        });
        setCurrentMove(move => move+1)
    }

  return (
  <div className='app'>
  <StatusMessage winner = {winner} gamingBoard = {gamingBoard} />
  <Board squares = {gamingBoard.squares} handleSquareClick = {handleSquareClick} /> 
  <History />       
  </div>
  )
}

export default App
