import './Styles.scss'
import Board from './components/Board'
import { useState } from "react";
import { calculateWinner } from './winner';

function App() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);
    
    console.log(squares);
    const nextPlayer = isXNext ? 'X' : '0'
    const winner = calculateWinner(squares);
    const statusMessage = winner ? `Winner is ${winner}`: `Next Player is ${nextPlayer}`;

    const handleSquareClick = (clickedPosition) => {

        if(squares[clickedPosition] || winner){
            return;
        }

        setSquares(currentSquares => {
            return currentSquares.map((squareValue, position) =>{
                if((clickedPosition === position)){
                    return isXNext ? 'X' : '0';
                }
            return squareValue;
            });      
        });
        setIsXNext((currentIsXNext) => !currentIsXNext) 
    }

  return (
  <div className='app'>
  <div>{statusMessage}</div>
  <Board squares = {squares} handleSquareClick = {handleSquareClick} />        
  </div>
  )
}

export default App
