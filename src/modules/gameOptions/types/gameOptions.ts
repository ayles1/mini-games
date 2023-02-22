export interface IGameOptionsState {
  isGameReadyToBegin: boolean;
  isTimeSet: boolean;
  timeOffer: { isTimeOffered: boolean; time: number };
}
export enum gameOptionsActionTypes {
  SET_IS_GAME_READY_TO_BEGIN = "SET_IS_GAME_READY_TO_BEGIN",
  SET_IS_TIME_SET = "SET_IS_TIME_SET",
  SET_IS_TIME_OFFERED = "SET_IS_TIME_OFFERED",
}
