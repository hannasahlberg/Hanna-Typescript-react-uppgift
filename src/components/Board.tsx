import Square from "./Square";

//Definierar typerna för Boardprops. squares är en array av rutor där varje ruta kan vara "x", "o" eller null.
// onSquarecllick är en funktion som körs när man klickar på en ruta.
type BoardProps = {
    squares: (string | null)[];
    onSquareClick: (i: number) => void;
  }

//skapar Board funktionen där vi plockar ut squares och onsquareclick från props. 
export default function Board({squares, onSquareClick}: BoardProps){

//returnerar en div där vi placerar ut alla squares tre stycken på en rad. 
//Lägger in square och anropar onsquareclick när rutan klickas på. 
    return(
        <div style={{display: "grid", gridTemplateColumns: "repeat(3,100px)"}}>
            {squares.map((value, i) =>(
                <Square key={i} value={value} onClick={() => onSquareClick(i)}/>
            ))}
        

        </div>
    )
}

