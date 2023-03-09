const StatusMessage = ({ winner, isXNext, squares}) => {
const noMovesLeft = squares.every(squareValue=> squareValue !== null);
const startgame = squares.every(squareValue=> squareValue === null);
const nextPlayer = isXNext ? 'X' : '0';
const renderStatusMessage = () =>{
    if(startgame){
        return <div>Start the Game!!!</div>
    }
    else{
    if(winner){
        return <div>Winner is {winner}</div>
    }

    if(!winner && noMovesLeft){
        return <div> X and 0 tied!</div>
    }

    if(!winner && !noMovesLeft){
        return <div>Next Player is {nextPlayer}</div>
    }
    return null;
}
  }
return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;