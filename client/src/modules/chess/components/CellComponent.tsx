import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}
const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  const selectedClassName =
    cell.color === "white" ? "selected-white" : "selected-black";
  return (
    <div
      onClick={() => {
        click(cell)
      }}
      className={["cell", cell.color, selected && selectedClassName].join(" ")}
      style={{
        background: cell.available && cell.figure ? "green" : "",
      }}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.name} />
      )}
    </div>
  );
};

export default CellComponent;
