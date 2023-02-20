import { connectionActionTypes } from "../types/connection";

export function setIsJoined(payload: boolean) {
  return {
    type: connectionActionTypes.SET_IS_JOINED,
    payload,
  };
}
export function toggleMode() {
  return {
    type: connectionActionTypes.TOGGLE_MODE,
  };
}
export function setRoomId(payload: string) {
  return {
    type: connectionActionTypes.SET_ROOM_ID,
    payload,
  };
}
export function setRoomOverflow(payload: boolean) {
  return {
    type: connectionActionTypes.SET_ROOM_OVERFLOW,
    payload,
  };
}
export function setNickname(payload: string) {
  return {
    type: connectionActionTypes.SET_NICKNAME,
    payload,
  };
}
