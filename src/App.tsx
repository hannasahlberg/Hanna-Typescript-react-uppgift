import { useState } from 'react';
import Board from './components/Board'
import './App.css'



function App() {

  //Skapar useState. squares är knapparna som ändras och samlas i en array. 
  //xisNest är boolean och står för om x eller o är näst i spelet. 
  const [squares, setSquares]= useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  //funktion för att kunna starta om spelet
  const restartGame = () =>{
    setSquares(Array(9).fill(null));
    setXIsNext(true);

  }
  //funktion för att avgöra vem som vunnit. 
  const checkWin = (squares: (string | null) [], player: string): boolean => {
    const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern =>
      pattern.every(i => squares[i] === player)
    )
  }
  //denna funktionen tar emot själva klicken, är rutan redan i klickad så händer inget. 
  
  const handleClick = (i: number) =>{
    if (squares[i]) return;
    //Gör att nästa steg blir x eller o beroende på vad som var innan och detta läggs till i arrayen. 
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    
    //Kontrollerar vilken som vunnit och gör en alert och berättar vem som vunnit och startar sedan om spelet. 
    if(checkWin(nextSquares, nextSquares[i]!)){
      alert(nextSquares[i] + " vinner!");
      restartGame();
      return;
    }

  }

  //returnerar spelet och en starta om knapp. 
  return (
    <>
    <h1 style ={{backgroundColor: "white", borderRadius: "10px"}}>Tic Tac Toe</h1>
     <Board squares={squares} onSquareClick={handleClick}/>
     <button style={{marginTop: "30px"}}onClick={restartGame}>Starta om spelet</button>
    </>
  )
}

export default App
