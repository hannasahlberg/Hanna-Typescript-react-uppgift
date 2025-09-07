//Definierar typer för props, value kan vara "X", "O" eller null. onClick är en funktion. 
type SquareProps = {
    value: string | null;
    onClick : () => void;
};

//Skapar funktionen Square och plockar ut value och onClick från props
export default function Square({value, onClick}: SquareProps){

//Returnerar en knapp som står för en ruta på spelbrädet
    return(
        <>
        <button
        onClick={onClick}
        style = {{
        width: 100,
        height: 100,
        border: "1px solid black"
        }}>
        {value}
        </button>
        </>
    )
}