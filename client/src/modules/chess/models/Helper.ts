import {Figure} from "./figures/Figure";
import {Cell} from "./Cell";
import {Board} from "./Board";

export class Helper {

    board:Board
    figure:Figure
    cell:Cell

    constructor(board:Board, figure:Figure, cell:Cell) {
        this.board = board
        this.figure = figure
        this.cell = cell
    }
    getBoard(){
        return this.board
    }
}

