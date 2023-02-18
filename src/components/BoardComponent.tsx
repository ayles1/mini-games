import React, { FC, useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Cell } from "../models/Cell";
import CellComponent from "./CellComponent";

const BoardComponent: FC = () => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const { currentPlayer, board } = useTypedSelector((state) => state.gameInfo);

  const { setMate, setCheck, swapPlayer, updateBoard } = useActions();

  function click(cell: Cell) {
    if (cell.figure?.color === currentPlayer?.color) {
      return setSelectedCell(cell);
    } else {
      if (selectedCell !== cell && selectedCell?.figure?.canMove(cell)) {
        selectedCell.moveFigure(cell);
        swapPlayer();
        setSelectedCell(null);
      }
      if (currentPlayer?.isChecked(cell.figure!)) {
        setCheck(true);
      }
    }
  }

  useEffect(() => {
    if (currentPlayer?.isMated()) {
      setMate();
    }
  }, [currentPlayer]);

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
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
