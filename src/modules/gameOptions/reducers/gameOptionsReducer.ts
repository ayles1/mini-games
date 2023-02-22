import { AnyAction } from "@reduxjs/toolkit";
import {
  gameOptionsActionTypes,
  IGameOptionsState,
} from "../types/gameOptions";

const gameOptionsState: IGameOptionsState = {
  isTimeSet: false,
  isGameReadyToBegin: false,
  timeOffer: { isTimeOffered: false, time: 0 },
};

export function gameOptionsReducer(
  state = gameOptionsState,
  action: AnyAction
): IGameOptionsState {
  switch (action.type) {
    case gameOptionsActionTypes.SET_IS_TIME_SET:
      return { ...state, isTimeSet: action.payload };
    case gameOptionsActionTypes.SET_IS_GAME_READY_TO_BEGIN:
      return { ...state, isGameReadyToBegin: action.payload };
    case gameOptionsActionTypes.SET_IS_TIME_OFFERED:
      return { ...state, timeOffer: action.payload };
    default:
      return state;
  }
}
