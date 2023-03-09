const StatusMessage = ({ winner, isXNext, squares}) => {
const noMovesLeft = squares.every(squareValue=> squareValue !== null);
const nextPlayer = isXNext ? 'X' : '0';
const renderStatusMessage = () =>{
    if(winner){
        return <div>`Winner is ${winner}`</div>
    }

    if(!winner && noMovesLeft){
        return <div> X and 0 tied!</div>
    }

    if(!winner && noMovesLeft){
        return <div>`Next Player is ${nextPlayer}</div>
    }
    return null;
  }
  return (
    <div>{renderStatusMessage}</div>
  );
};

export default StatusMessage;