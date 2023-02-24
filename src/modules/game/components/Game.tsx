import React, { useEffect } from "react";
import "../Game.css";
import BoardComponent from "./BoardComponent";
import LostFigures from "./LostFigures";
import Timer from "./Timer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { socket } from "../../../socket/socket";
import { Outlet, useNavigate } from "react-router-dom";
function Game() {
  const navigate = useNavigate();
  const { restartGame, swapPlayer, setCheck, setMate } = useActions();

  const { board, currentPlayer } = useTypedSelector((state) => state.gameInfo);

  useEffect(() => {
    socket.on("UPDATE:BOARD", ({ prevCell, nextCell }) => {
      const cell = board.getCell(prevCell[0], prevCell[1]);
      if (cell.figure) {
        board
          .getCell(prevCell[0], prevCell[1])
          .moveFigure(board.getCell(nextCell[0], nextCell[1]));
        swapPlayer();
      }
    });

    return () => {
      socket.off("UPDATE:BOARD");
    };
  }, [board]);
  useEffect(() => {
    socket.on("CHECK", (data: boolean) => {
      console.log("тебе шах!!");
      setCheck(data);
    });
    socket.on("MATE", () => {});
  }, []);
  useEffect(() => {
    restartGame();
  }, []);
  useEffect(() => {
    if (currentPlayer?.isMated()) {
      socket.emit("SET:MATE");
      setMate(currentPlayer);
      navigate("/game/ended");
    }
  }, [currentPlayer]);
  return (
    <div className="game">
      <Outlet />
      <Timer />
      <BoardComponent />
      <div>
        <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
        <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
}

export default Game;
