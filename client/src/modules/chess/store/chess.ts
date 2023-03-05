import {Chess} from "chess.js";
import {chessActionTypes} from "../types/chess";

export function setTime(payload:number){
    return {
        type: chessActionTypes.CHESS_SET_TIME,
        payload
    }
}

export function decrementWhiteTime() {
  return {
    type: chessActionTypes.CHESS_DECREMENT_WHITE_TIME,
  };
}
export function decrementBlackTime() {
  return {
    type: chessActionTypes.CHESS_DECREMENT_BLACK_TIME,
  };
}
export function endTimer(){
    return {
        type: chessActionTypes.CHESS_END_TIMER,
    }
}
export function setGame(payload:Chess){
    return {
        type: chessActionTypes.CHESS_SET_CHESS_GAME,
        payload
    }
}
export function parsePosition(payload:any){
    return {
        type:chessActionTypes.CHESS_PARSE_POSITION,
        payload
    }
}
export function setUsersNicknames(payload:{this:string,enemy:string}){
    return {
        type:chessActionTypes.CHESS_SET_USERS_NICKNAMES,
        payload
    }
}
export function setUserColor(payload:'w'|'b'){
    return {
        type:chessActionTypes.CHESS_SET_USER_COLOR,
        payload
    }
}
export function setIsCheck(payload:boolean){
    return {
        type:chessActionTypes.CHESS_SET_IS_CHECK,
        payload
    }
}
export function setIsCheckmate(payload:boolean){
    return {
        type:chessActionTypes.CHESS_SET_IS_CHECKMATE,
        payload
    }
}
export function setCurrentPlayer(payload:string){
    return {
        type:chessActionTypes.CHESS_SET_CURRENT_PLAYER,
        payload
    }
}
export function highlightCells(payload:number[]){
    return {
        type:chessActionTypes.CHESS_HIGHLIGHT_CELLS,
        payload
    }
}