//const Square= function Square (){
const Square = ({value}) =>{
    return(
    <button type="button" className="square">
        {value}
    </button>
    )
}

export default Square