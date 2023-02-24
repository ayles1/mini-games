import { AnyAction } from "@reduxjs/toolkit";
import {
  gameOptionsActionTypes,
  IGameOptionsState,
} from "../types/gameOptions";

const gameOptionsState: IGameOptionsState = {
  isTimeSet: false,
  isGameReadyToBegin: false,
  timeOffer: { isTimeOffered: false, time: 0 },
  isTimeRejected: false,
  isChooser: false,
  usersTime: 0,
  userColor: null,
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
    case gameOptionsActionTypes.SET_IS_TIME_REJECTED:
      return { ...state, isTimeRejected: action.payload };
    case gameOptionsActionTypes.SET_IS_CHOOSER:
      return { ...state, isChooser: action.payload };
    case gameOptionsActionTypes.SET_USERS_TIME:
      return { ...state, usersTime: action.payload };
    case gameOptionsActionTypes.SET_USERS_COLOR:
      return { ...state, userColor: action.payload };
    default:
      return state;
  }
}
