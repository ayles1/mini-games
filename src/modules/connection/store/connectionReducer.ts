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
  enemyNickname:''
};
export function connectionReducer(
  state = connectionState,
  action: AnyAction
): IConnectionState {
  switch (action.type) {
    case connectionActionTypes.SET_IS_JOINED:
      return { ...state, isJoined: action.payload };
    case connectionActionTypes.SET_ROOM_ID:
      return { ...state, roomId: action.payload };
    case connectionActionTypes.TOGGLE_MODE:
      if (state.privateOrPublic === "private") {
        return { ...state, privateOrPublic: "public" };
      } else {
        return { ...state, privateOrPublic: "private" };
      }
    case connectionActionTypes.SET_ROOM_OVERFLOW:
      return { ...state, isRoomOverflow: action.payload };
    case connectionActionTypes.SET_NICKNAME:
      return { ...state, nickname: action.payload };
    case connectionActionTypes.SET_IS_ROOM_READY:
      return { ...state, isRoomReady: action.payload };
    case connectionActionTypes.SET_ENEMY_NICKNAME:
      return {...state,enemyNickname:action.payload}
    case connectionActionTypes.SET_IS_FIRST_PLAYER:
      return {...state,isFirstPlayer:action.payload}
    default:
      return state;
  }
}
