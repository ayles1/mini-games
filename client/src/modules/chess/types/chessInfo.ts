import { Board } from "../models/Board";
import { Player } from "../models/Player";

export interface IGameInfoState {
  whiteTime: number | null;
  blackTime: number | null;
  isCheck: boolean;
  isMate: boolean;
  isTimerEnded: boolean;
  currentPlayer: Player | null;
  whitePlayer: Player | null;
  blackPlayer: Player | null;
  userColor: Player | null;
  board: Board;
  matedPlayer: Player | null;
  usersNicknames: {
    this: string;
    enemy: string;
  };
}
export enum chessInfoActionTypes {
  SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER",
  SWAP_PLAYER = "SWAP_PLAYER",
  SET_MATE = "SET_MATE",
  TOGGLE_CHECK = "TOGGLE_CHECK",
  DECREMENT_WHITE_TIME = "DECREMENT_WHITE_TIME",
  DECREMENT_BLACK_TIME = "DECREMENT_BLACK_TIME",
  SET_TIME = "SET_TIME",
  END_TIMER = "END_TIMER",
  UPDATE_BOARD = "UPDATE_BOARD",
  RESTART_GAME = "RESTART_GAME",
  SET_USER_COLOR = "SET_USER_COLOR",
  SET_USERS_NICKNAMES = "SET_USERS_NICKNAMES",
}
// export type gameInfoAction = string;
