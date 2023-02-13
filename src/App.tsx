import React, { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";

function App() {
  const [board, setBoard] = useState(new Board());
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [isMate, setIsMate] = useState<boolean>(false);
  const whitePlayer = new Player(Colors.WHITE);
  const blackPlayer = new Player(Colors.BLACK);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
  }, []);

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setCurrentPlayer(whitePlayer);
    setBoard(newBoard);
    setIsMate(false);
  }
  // {isCheck && <div>Шах для {currentPlayer?.color}</div>}

  return (
    <div className="app">
      {isMate ? (
        <>
          <div>Шах и мат для {currentPlayer?.color}</div>
          <Timer currentPlayer={currentPlayer} restart={restart} />
        </>
      ) : (
        <>
          <Timer currentPlayer={currentPlayer} restart={restart} />
          <BoardComponent
            board={board}
            setBoard={setBoard}
            isCheck={isCheck}
            setIsCheck={setIsCheck}
            isMate={isMate}
            setIsMate={setIsMate}
            currentPlayer={currentPlayer}
            swapPlayer={swapPlayer}
          />
          <div>
            <LostFigures
              title="Черные фигуры"
              figures={board.lostBlackFigures}
            />
            <LostFigures
              title="Белые фигуры"
              figures={board.lostWhiteFigures}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
