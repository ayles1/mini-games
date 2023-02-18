import { Player } from "../../models/Player";
import { gameInfoActionTypes } from "../types/gameInfo";

export function setMate() {
  return {
    type: "setMate",
  };
}
export function setCheck(payload: boolean) {
  return {
    type: gameInfoActionTypes.TOGGLE_CHECK,
    payload,
  };
}
export function decrementWhiteTime() {
  return {
    type: gameInfoActionTypes.DECREMENT_WHITE_TIME,
  };
}
export function decrementBlackTime() {
  return {
    type: gameInfoActionTypes.DECREMENT_BLACK_TIME,
  };
}
export function setTime(payload: number | null) {
  return {
    type: gameInfoActionTypes.SET_TIME,
    payload,
  };
}
export function endTimer() {
  return {
    type: gameInfoActionTypes.END_TIMER,
  };
}
export function setCurrentPlayer(payload: Player | null) {
  return {
    type: gameInfoActionTypes.SET_CURRENT_PLAYER,
    payload,
  };
}

export function swapPlayer() {
  return {
    type: gameInfoActionTypes.SWAP_PLAYER,
  };
}

export function updateBoard() {
  return {
    type: gameInfoActionTypes.UPDATE_BOARD,
  };
}

export function restartGame() {
  return {
    type: gameInfoActionTypes.RESTART_GAME,
  };
}