import {Chess, Square} from "chess.js";

export enum chessActionTypes  {
    CHESS_SET_TIME = 'SET_TIME',
    CHESS_DECREMENT_WHITE_TIME = "DECREMENT_WHITE_TIME",
    CHESS_DECREMENT_BLACK_TIME = "DECREMENT_BLACK_TIME",
    CHESS_END_TIMER = "CHESS_END_TIMER",
    CHESS_SET_CHESS_GAME = 'SET_CHESS_GAME',
    CHESS_PARSE_POSITION = 'PARSE_POSITION',
    CHESS_SET_USERS_NICKNAMES = "SET_USERS_NICKNAMES",
    CHESS_SET_USER_COLOR = 'SET_USER_COLOR',
    CHESS_SET_IS_CHECK = "SET_IS_CHECK",
    CHESS_SET_IS_CHECKMATE = "SET_IS_CHECKMATE",
    CHESS_SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER",
    CHESS_HIGHLIGHT_CELLS = "HIGHLIGHT_CELLS"

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