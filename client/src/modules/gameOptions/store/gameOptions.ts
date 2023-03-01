import { gameOptionsActionTypes } from "../types/gameOptions";

export function setIsTimeSet(payload: boolean) {
  return {
    type: gameOptionsActionTypes.SET_IS_TIME_SET,
    payload,
  };
}
export function setIsGameReadyToBegin(payload: boolean) {
  return {
    type: gameOptionsActionTypes.SET_IS_GAME_READY_TO_BEGIN,
    payload,
  };
}
export function setIsTimeOffered(payload: {
  isTimeOffered: boolean;
  time?: number;
}) {
  return {
    type: gameOptionsActionTypes.SET_IS_TIME_OFFERED,
    payload,
  };
}
export function setIsTimeRejected(payload: boolean) {
  return {
    type: gameOptionsActionTypes.SET_IS_TIME_REJECTED,
    payload,
  };
}
export function setIsChooser(payload: boolean) {
  return {
    type: gameOptionsActionTypes.SET_IS_CHOOSER,
    payload,
  };
}
export function setUsersTime(payload: number) {
  return {
    type: gameOptionsActionTypes.SET_USERS_TIME,
    payload,
  };
}
export function setUsersColors(payload: "white" | "black") {
  return {
    type: gameOptionsActionTypes.SET_USERS_COLOR,
    payload,
  };
}
