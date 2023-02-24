export interface IGameOptionsState {
  isGameReadyToBegin: boolean;
  isTimeSet: boolean;
  timeOffer: { isTimeOffered: boolean; time: number };
  isTimeRejected: boolean;
  isChooser: boolean;
  usersTime: number;
  userColor: "white" | "black" | null;
}
export enum gameOptionsActionTypes {
  SET_IS_GAME_READY_TO_BEGIN = "SET_IS_GAME_READY_TO_BEGIN",
  SET_IS_TIME_SET = "SET_IS_TIME_SET",
  SET_IS_TIME_OFFERED = "SET_IS_TIME_OFFERED",
  SET_IS_TIME_REJECTED = "SET_IS_TIME_REJECTED",
  SET_IS_CHOOSER = "SET_IS_CHOOSER",
  SET_USERS_TIME = "SET_USERS_TIME",
  SET_USERS_COLOR = "SET_USERS_COLOR",
}
