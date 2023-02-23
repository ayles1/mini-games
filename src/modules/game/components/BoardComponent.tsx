import React, { FC, useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Cell } from "../models/Cell";
import CellComponent from "./CellComponent";
import { socket } from "../../../socket/socket";
import { FigureNames } from "../models/figures/Figure";

const BoardComponent: FC = () => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const { currentPlayer, board, userColor } = useTypedSelector(
    (state) => state.gameInfo
  );

  const { setMate, setCheck, swapPlayer, updateBoard } = useActions();
  useEffect(() => {
    socket.on("UPDATE:BOARD", (board) => {
      console.log("updated bord");
      updateBoard(board);
    });
  }, []);
  function onBoardUpdating() {
    // function replacer(key: string, value: any) {
    //   if (key === "cell") {
    //     if (value !== "board") {
    //       return value;
    //     }
    //   }
    //   if(key === 'figure'){
    //     if(value === )
    //   }
    //   return value;
    // }
    // console.log(board);
    // socket.emit("TEST", JSON.parse(JSON.stringify(board, replacer)));
  }
  function click(cell: Cell) {
    // if (currentPlayer !== userColor) {
    //   return;
    // }
    if (cell.figure?.color === currentPlayer?.color) {
      return setSelectedCell(cell);
    } else {
      if (selectedCell !== cell && selectedCell?.figure?.canMove(cell)) {
        selectedCell.moveFigure(cell);
        swapPlayer();
        setSelectedCell(null);
        console.log(board);
        onBoardUpdating();
      }
      if (currentPlayer?.isChecked(cell.figure!)) {
        setCheck(true);
      }
    }
    // console.log("emit");
  }

  useEffect(() => {
    if (currentPlayer?.isMated()) {
      setMate();
    }
  }, [currentPlayer]);

  function highlightCells() {
    board.highlightCells(selectedCell);
    const newBoard = board.getCopyBoard();
    updateBoard(newBoard);
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <div>
      <h3>Текущий игрок : {currentPlayer?.color}</h3>
      <div className="board">
        {board.cells.map((row, index) => {
          return (
            <>
              {row.map((cell) => {
                return (
                  <CellComponent
                    key={cell.id}
                    cell={cell}
                    selected={
                      cell.x === selectedCell?.x && cell.y === selectedCell?.y
                    }
                    click={click}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BoardComponent;
