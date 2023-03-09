//const Square= function Square (){
const Square = ({value}) =>{
    return(
    <button type="button" className="square" onClick={onclick}>
        {value}
    </button>
    )
}

export default Square