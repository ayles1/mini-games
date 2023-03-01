import { Player } from "../models/Player";
import {chessInfoActionTypes} from "../types/chessInfo";
import { Board } from "../models/Board";

export function setMate(payload: Player) {
  return {
    type: chessInfoActionTypes.SET_MATE,
    payload,
  };
}
export function setCheck(payload: boolean) {
  return {
    type: chessInfoActionTypes.TOGGLE_CHECK,
    payload,
  };
}
export function decrementWhiteTime() {
  return {
    type: chessInfoActionTypes.DECREMENT_WHITE_TIME,
  };
}
export function decrementBlackTime() {
  return {
    type: chessInfoActionTypes.DECREMENT_BLACK_TIME,
  };
}
export function setTime(payload: number | null) {
  return {
    type: chessInfoActionTypes.SET_TIME,
    payload,
  };
}
export function endTimer() {
  return {
    type: chessInfoActionTypes.END_TIMER,
  };
}
export function setCurrentPlayer(payload: Player | null) {
  return {
    type: chessInfoActionTypes.SET_CURRENT_PLAYER,
    payload,
  };
}

export function swapPlayer() {
  return {
    type: chessInfoActionTypes.SWAP_PLAYER,
  };
}

export function updateBoard(payload: Board) {
  return {
    type: chessInfoActionTypes.UPDATE_BOARD,
    payload,
  };
}

export function restartGame() {
  return {
    type: chessInfoActionTypes.RESTART_GAME,
  };
}
export function setUserColor(payload: Player) {
  return {
    type: chessInfoActionTypes.SET_USER_COLOR,
    payload,
  };
}
export function setUsersNicknames(payload: { this: string; enemy: string }) {
  return {
    type: chessInfoActionTypes.SET_USERS_NICKNAMES,
    payload,
  };
}
