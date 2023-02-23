import { AnyAction } from "@reduxjs/toolkit";
import { Board } from "../models/Board";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";
import { gameInfoActionTypes, IGameInfoState } from "../types/gameInfo";

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
  board: new Board(),
};

export function gameInfoReducer(
  state = initialState,
  action: AnyAction
): IGameInfoState {
  switch (action.type) {
    case gameInfoActionTypes.SET_CURRENT_PLAYER:
      return { ...state, currentPlayer: action.payload };
    case gameInfoActionTypes.SWAP_PLAYER:
      const player =
        state.currentPlayer?.color === Colors.WHITE
          ? state.blackPlayer
          : state.whitePlayer;
      return { ...state, currentPlayer: player };
    case gameInfoActionTypes.SET_MATE:
      return { ...state, isMate: true };
    case gameInfoActionTypes.TOGGLE_CHECK:
      return { ...state, isCheck: action.payload };
    case gameInfoActionTypes.DECREMENT_WHITE_TIME:
      if (state.whiteTime) {
        return { ...state, whiteTime: state.whiteTime - 1 };
      }
      return { ...state, whiteTime: null };
    case gameInfoActionTypes.DECREMENT_BLACK_TIME:
      if (state.blackTime) {
        return { ...state, blackTime: state.blackTime - 1 };
      }
      return { ...state, blackTime: null };
    case gameInfoActionTypes.SET_TIME:
      return {
        ...state,
        whiteTime: action.payload,
        blackTime: action.payload,
      };
    case gameInfoActionTypes.END_TIMER:
      return { ...state, isTimerEnded: true };
    case gameInfoActionTypes.UPDATE_BOARD:
      // const newBoard = state.board.getCopyBoard();
      return { ...state, board: action.payload };
    case gameInfoActionTypes.RESTART_GAME:
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
    case gameInfoActionTypes.SET_USER_COLOR:
      console.log("Отработал,", action.payload);
      return { ...state, userColor: action.payload };
    default:
      return state;
  }
}
