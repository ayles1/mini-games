import React, { useEffect, useState } from "react";
import "./Game.css";
import BoardComponent from "./components/BoardComponent";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { connectSocket, socket } from "../../socket/socket";
function Game() {
  const { isMate, isTimerEnded, currentPlayer, board, whiteTime } =
    useTypedSelector((state) => state.gameInfo);

  const { restartGame } = useActions();

  useEffect(() => {
    restartGame();
  }, []);

  return (
    <div className="game">
      <>
        <Timer />
        <BoardComponent />
        <div>
          <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
          <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
        </div>
      </>
    </div>
  );
}

export default Game;
