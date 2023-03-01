import {connectionActionTypes, gameType} from "../types/connection";

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
export function setIsRoomReady(payload: boolean) {
  return {
    type: connectionActionTypes.SET_IS_ROOM_READY,
    payload,
  };
}
export function setIsFirstPlayer(payload:boolean){
  return {
    type:connectionActionTypes.SET_IS_FIRST_PLAYER,
    payload
  }
}
export function setEnemyNickname(payload:string){
  return{
    type:connectionActionTypes.SET_ENEMY_NICKNAME,
    payload
  }
}
export function setGame(payload:gameType){
  return {
    type: connectionActionTypes.SET_GAME,
    payload
  }
}