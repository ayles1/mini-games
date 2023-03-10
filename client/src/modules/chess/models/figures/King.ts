import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/Piece=King, Side=Black.png";
import whiteLogo from "../../assets/Piece=King, Side=White.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
  override canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const dy = Math.abs(this.cell.y - target.y);
    const dx = Math.abs(this.cell.x - target.x);
    return (dy === 1 && dx === 1) || (dy < 2 && dx < 2 && dx !== dy);
  }
}
