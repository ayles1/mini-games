import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/Piece=Queen, Side=Black.png";
import whiteLogo from "../../assets/Piece=Queen, Side=White.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }
  override canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    return this.cell.isEmptyDiagonal(target);
  }
}
