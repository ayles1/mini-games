import React, { FC, useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Cell } from "../models/Cell";
import CellComponent from "./CellComponent";
import { socket } from "../../../socket/socket";

const BoardComponent: FC = () => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const { currentPlayer, board, userColor, usersNicknames } = useTypedSelector(
    (state) => state.chessInfo
  );

  const { setCheck, swapPlayer, updateBoard } = useActions();

  function onBoardUpdating(prevCell: Cell, nextCell: Cell) {
    socket.emit("TEST", {
      prevCell: [prevCell.x, prevCell.y],
      nextCell: [nextCell.x, nextCell.y],
    });
  }
  function click(cell: Cell) {
    if (currentPlayer?.color !== userColor?.color) {
      return;
    }
    if (cell.figure?.color === currentPlayer?.color) {
      return setSelectedCell(cell);
    } else {
      if (selectedCell !== cell && selectedCell?.figure?.canMove(cell)) {
        onBoardUpdating(selectedCell, cell);
        selectedCell.moveFigure(cell);
        swapPlayer();
        setSelectedCell(null);
      }
      if (currentPlayer?.isChecked(cell.figure!)) {
        socket.emit("TOGGLE:CHECK", true);
        setCheck(true);
      }
    }
  }

  function highlightCells() {
    board.highlightCells(selectedCell);
    const newBoard = board.getCopyBoard();
    updateBoard(newBoard);
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <>
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
    </>
  );
};

export default BoardComponent;
