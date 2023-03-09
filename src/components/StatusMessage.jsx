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
        return <div>Winner is <span className={winner === 0 ? "text-orange" : "text-green"}>{winner}</span></div>
    }

    if(!winner && noMovesLeft){
        return <div> <span className="text-green">X</span> and <span className="text-orange">0</span> tied!</div>
    }

    if(!winner && !noMovesLeft){
        return <div>Next Player is <span className= {isXNext? "text-green" :"text-orange" }>{nextPlayer}</span></div>
    }
    return null;
}
  }
return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;