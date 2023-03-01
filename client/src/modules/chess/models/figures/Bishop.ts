import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/Piece=Bishop, Side=Black.png";
import whiteLogo from "../../assets/Piece=Bishop, Side=White.png";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
  override canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return this.cell.isEmptyDiagonal(target);
  }
}
