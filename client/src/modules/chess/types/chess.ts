import {Chess, Square} from "chess.js";

export enum chessActionTypes  {
    CHESS_SET_TIME = 'CHESS_SET_TIME',
    CHESS_DECREMENT_WHITE_TIME = "CHESS_DECREMENT_WHITE_TIME",
    CHESS_DECREMENT_BLACK_TIME = "CHESS_DECREMENT_BLACK_TIME",
    CHESS_END_TIMER = "CHESS_END_TIMER",
    CHESS_SET_CHESS_GAME = 'CHESS_SET_CHESS_GAME',
    CHESS_PARSE_POSITION = 'CHESS_PARSE_POSITION',
    CHESS_SET_USERS_NICKNAMES = "CHESS_SET_USERS_NICKNAMES",
    CHESS_SET_USER_COLOR = 'CHESS_SET_USER_COLOR',
    CHESS_SET_IS_CHECK = "CHESS_SET_IS_CHECK",
    CHESS_SET_IS_CHECKMATE = "CHESS_SET_IS_CHECKMATE",
    CHESS_SET_CURRENT_PLAYER = "CHESS_SET_CURRENT_PLAYER",
    CHESS_HIGHLIGHT_CELLS = "CHESS_HIGHLIGHT_CELLS",
    CHESS_RESET_STATE = 'CHESS_RESET_STATE'

}
export interface IChessState {
    whiteTime:number | null,
    blackTime:number | null,
    isTimerEnded:boolean,
    game: Chess,
    position:Square | null,
    usersNicknames:{
        this:string,
        enemy:string
    },
    userColor:'w' | 'b' | null,
    isCheck:boolean,
    isCheckmate:boolean,
    currentPlayer: 'w' | 'b' | null,
    highlightedCells: number[]

}