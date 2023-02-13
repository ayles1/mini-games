import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  isCheck: boolean;
  setIsCheck: (state: boolean) => void;
  isMate: boolean;
  setIsMate: (state: boolean) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  isCheck,
  setIsCheck,
  isMate,
  setIsMate,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (selectedCell !== cell && selectedCell?.figure?.canMove(cell)) {
      if (isCheck) {
        setIsMate(true);
      }
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
      if (currentPlayer?.isChecked(currentPlayer, board, cell.figure!)) {
        console.log("pizda!");
        return setIsCheck(true);
      }
      setIsCheck(false);
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        return setSelectedCell(cell);
      }
    }
  }
  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }
  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }
  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <div>
      <h3>Текущий игрок : {currentPlayer?.color}</h3>
      <div className="board">
        {board.cells.map((row) => {
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
