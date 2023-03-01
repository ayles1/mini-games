import { AnyAction } from "@reduxjs/toolkit";
import { gameEndActionTypes, IGameEndState } from "../types/gameEnd";

const gameEndInitialState = {
  end: false,
};

export function gameEndReducer(
  state = gameEndInitialState,
  action: AnyAction
): IGameEndState {
  switch (action.type) {
    case gameEndActionTypes.END_GAME:
      return { ...state, end: true };
    default:
      return state;
  }
}
