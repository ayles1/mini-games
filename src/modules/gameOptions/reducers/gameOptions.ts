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
  time: number;
}) {
  return {
    type: gameOptionsActionTypes.SET_IS_TIME_OFFERED,
    payload,
  };
}
