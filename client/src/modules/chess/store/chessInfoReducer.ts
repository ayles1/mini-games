import { AnyAction } from "@reduxjs/toolkit";
import { Board } from "../models/Board";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";
import { chessInfoActionTypes, IGameInfoState } from "../types/chessInfo";

const initialState: IGameInfoState = {
  whiteTime: null,
  blackTime: null,
  isCheck: false,
  isMate: false,
  isTimerEnded: false,
  currentPlayer: null,
  whitePlayer: null,
  blackPlayer: null,
  userColor: null,
  matedPlayer: null,
  board: new Board(),
  usersNicknames: {
    this: "",
    enemy: "",
  },
};

export function chessInfoReducer(
  state = initialState,
  action: AnyAction
): IGameInfoState {
  switch (action.type) {
    case chessInfoActionTypes.SET_CURRENT_PLAYER:
      return { ...state, currentPlayer: action.payload };
    case chessInfoActionTypes.SWAP_PLAYER:
      const player =
        state.currentPlayer?.color === Colors.WHITE
          ? state.blackPlayer
          : state.whitePlayer;
      return { ...state, currentPlayer: player };
    case chessInfoActionTypes.SET_MATE:
      return { ...state, isMate: true, matedPlayer: action.payload };
    case chessInfoActionTypes.TOGGLE_CHECK:
      return { ...state, isCheck: action.payload };
    case chessInfoActionTypes.DECREMENT_WHITE_TIME:
      if (state.whiteTime) {
        return { ...state, whiteTime: state.whiteTime - 1 };
      }
      return { ...state, whiteTime: null };
    case chessInfoActionTypes.DECREMENT_BLACK_TIME:
      if (state.blackTime) {
        return { ...state, blackTime: state.blackTime - 1 };
      }
      return { ...state, blackTime: null };
    case chessInfoActionTypes.SET_TIME:
      return {
        ...state,
        whiteTime: action.payload,
        blackTime: action.payload,
      };
    case chessInfoActionTypes.END_TIMER:
      return { ...state, isTimerEnded: true };
    case chessInfoActionTypes.UPDATE_BOARD:
      return { ...state, board: action.payload };
    case chessInfoActionTypes.RESTART_GAME:
      const board = new Board();
      const whitePlayer = new Player(Colors.WHITE, board);
      const blackPlayer = new Player(Colors.BLACK, board);
      board.initCells();
      board.addFigures();
      return {
        ...state,
        board,
        whitePlayer,
        blackPlayer,
        currentPlayer: whitePlayer,
      };
    case chessInfoActionTypes.SET_USER_COLOR:
      return { ...state, userColor: action.payload };
    case chessInfoActionTypes.SET_USERS_NICKNAMES:
      return { ...state, usersNicknames: action.payload };
    default:
      return state;
  }
}
