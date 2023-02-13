import { Board } from "./Board";
import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Figure, FigureNames } from "./figures/Figure";

export class Player {
  color: Colors;
  constructor(color: Colors) {
    this.color = color;
  }
  isChecked(player: Player, board: Board, figure: Figure): boolean {
    const enemyFigures = player.getEnemyFigures(board.cells);
    if (enemyFigures) {
      for (let i = 0; i < enemyFigures.length; i++) {
        const figurePosition = board.getCell(
          enemyFigures[i].x,
          enemyFigures[i].y
        );
        if (
          enemyFigures[i].figure?.name === FigureNames.KING &&
          figure.canMove(figurePosition)
        ) {
          console.log(figure.canMove(figurePosition));
          return true;
        }
      }
    }
    return false;
  }
  isMated() {}
  getEnemyFigures(cells: Cell[][]): Cell[] {
    const figures: any[] = [];
    for (let i = 0; i < cells.length; i++) {
      const row = cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        console.log();
        if (target.figure?.color !== this.color) {
          figures.push(target);
        }
      }
    }
    return figures;
  }

  getKing() {}
}
