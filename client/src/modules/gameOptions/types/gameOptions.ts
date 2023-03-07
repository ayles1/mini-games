export interface IGameOptionsState {
  isGameReadyToBegin: boolean;
  isTimeSet: boolean;
  timeOffer: { isTimeOffered: boolean; time: number };
  isTimeRejected: boolean;
  isChooser: boolean;
  usersTime: number;
  userColor: "w" | "b" | null;
}
export enum gameOptionsActionTypes {
  OPTIONS_SET_IS_GAME_READY_TO_BEGIN = "OPTIONS_SET_IS_GAME_READY_TO_BEGIN",
  OPTIONS_SET_IS_TIME_SET = "OPTIONS_SET_IS_TIME_SET",
  OPTIONS_SET_IS_TIME_OFFERED = "OPTIONS_SET_IS_TIME_OFFERED",
  OPTIONS_SET_IS_TIME_REJECTED = "OPTIONS_SET_IS_TIME_REJECTED",
  OPTIONS_SET_IS_CHOOSER = "OPTIONS_SET_IS_CHOOSER",
  OPTIONS_SET_USERS_TIME = "OPTIONS_SET_USERS_TIME",
  OPTIONS_SET_USERS_COLOR = "OPTIONS_SET_USERS_COLOR",
  OPTIONS_RESET_STATE = 'OPTIONS_RESET_STATE',
}
