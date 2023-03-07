import {connectionActionTypes} from "../types/connection";

export function setIsJoined(payload: boolean) {
  return {
    type: connectionActionTypes.CONNECTION_SET_IS_JOINED,
    payload,
  };
}
export function toggleMode() {
  return {
    type: connectionActionTypes.CONNECTION_TOGGLE_MODE,
  };
}
export function setRoomId(payload: string) {
  return {
    type: connectionActionTypes.CONNECTION_SET_ROOM_ID,
    payload,
  };
}
export function setRoomOverflow(payload: boolean) {
  return {
    type: connectionActionTypes.CONNECTION_SET_ROOM_OVERFLOW,
    payload,
  };
}
export function setNickname(payload: string) {
  return {
    type: connectionActionTypes.CONNECTION_SET_NICKNAME,
    payload,
  };
}
export function setIsRoomReady(payload: boolean) {
  return {
    type: connectionActionTypes.CONNECTION_SET_IS_ROOM_READY,
    payload,
  };
}
export function setIsFirstPlayer(payload:boolean){
  return {
    type:connectionActionTypes.CONNECTION_SET_IS_FIRST_PLAYER,
    payload
  }
}
export function setEnemyNickname(payload:string){
  return{
    type:connectionActionTypes.CONNECTION_SET_ENEMY_NICKNAME,
    payload
  }
}
export function resetState(){
  return {
    type: connectionActionTypes.CONNECTION_RESET_STATE,
  }
}