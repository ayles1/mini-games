import { AnyAction } from "@reduxjs/toolkit";
import {
  connectionActionTypes,
  IConnectionState,
} from "../types/connection";

const connectionState: IConnectionState = {
  roomId: "",
  privateOrPublic: "public",
  isJoined: false,
  isRoomOverflow: false,
  nickname: "",
  isRoomReady: false,
  isFirstPlayer:false,
  enemyNickname:'',
};
export function connectionReducer(
  state = connectionState,
  action: AnyAction
): IConnectionState {
  switch (action.type) {
    case connectionActionTypes.CONNECTION_SET_IS_JOINED:
      return { ...state, isJoined: action.payload };
    case connectionActionTypes.CONNECTION_SET_ROOM_ID:
      return { ...state, roomId: action.payload };
    case connectionActionTypes.CONNECTION_TOGGLE_MODE:
      if (state.privateOrPublic === "private") {
        return { ...state, privateOrPublic: "public" };
      } else {
        return { ...state, privateOrPublic: "private" };
      }
    case connectionActionTypes.CONNECTION_SET_ROOM_OVERFLOW:
      return { ...state, isRoomOverflow: action.payload };
    case connectionActionTypes.CONNECTION_SET_NICKNAME:
      return { ...state, nickname: action.payload };
    case connectionActionTypes.CONNECTION_SET_IS_ROOM_READY:
      return { ...state, isRoomReady: action.payload };
    case connectionActionTypes.CONNECTION_SET_ENEMY_NICKNAME:
      return {...state,enemyNickname:action.payload}
    case connectionActionTypes.CONNECTION_SET_IS_FIRST_PLAYER:
      return {...state,isFirstPlayer:action.payload}
    case connectionActionTypes.CONNECTION_RESET_STATE:
      return connectionState
    default:
      return state;
  }
}
