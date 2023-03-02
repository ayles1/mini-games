import { Board } from "./Board";
import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Figure, FigureNames } from "./figures/Figure";

export class Player {
  color: Colors;
  board: Board;
  constructor(color: Colors, board: Board) {
    this.color = color;
    this.board = board;
  }
  isChecked(figure: Figure): boolean {
    const enemyKing = this.getEnemyKing();

    if (figure && enemyKing && figure.canMove(enemyKing)) {
      console.log("Шах!!!!");
      return true;
    }
    return false;
  }

  getEnemyKing(): Cell | null {
    for (let i = 0; i < this.board.cells.length; i++) {
      const row = this.board.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if (target.figure && target.figure.color !== this.color) {
          if (target.figure.name === FigureNames.KING) {
            return target;
          }
        }
      }
    }
    return null;
  }

  getCurrentPlayerFigures() {
    const figures = [];
    for (let i = 0; i < this.board.cells.length; i++) {
      const row = this.board.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if (target.figure && target.figure.color === this.color) {
          figures.push(target);
        }
      }
    }
    return figures;
  }
  isMated(): boolean {
    let isMated = false;
    const enemyKing = this.getEnemyKing();
    const currentPlayerFiguresCells = this.getCurrentPlayerFigures();
    currentPlayerFiguresCells.map((cell) => {
      if (enemyKing && cell.figure?.canMove(enemyKing)) {
        console.log("Мат!!!!");
        isMated = true;
      }
    });
    return isMated;
  }
  canDefendKing(): boolean {
    return true;
  }
}

// Представим я белый, сначала я ставлю из чек тру,
// потом по завершении хода черного я итерируюсь по белым и смотрю могут ли они схавать короля, если да , то мат, если нет, то сет чек фолс

// getMyFigures(cells: Cell[][]) {}
// isMated(): boolean {
//   return false;
// }

// Сейчас проверить работает ли мат и шах а затем реализовать метод Defence mode,
// Я получаю фигуры которыми могу сьесть короля и поля куда эти фигуры могут походить, после ставлю мод для фигур что они могут ходить только на эти поля
