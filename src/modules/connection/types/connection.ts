export interface IConnectionState {
  roomId: string;
  privateOrPublic: "private" | "public";
  isJoined: boolean;
  isRoomOverflow: boolean;
  nickname: string;
  isRoomReady: boolean;
  enemyNickname: string;
  isFirstPlayer: boolean;
}
export enum connectionActionTypes {
  SET_IS_JOINED = "SET_IS_JOINED",
  TOGGLE_MODE = "TOGGLE_MODE",
  SET_ROOM_ID = "SET_ROOM_ID",
  SET_ROOM_OVERFLOW = "SET_ROOM_OVERFLOW",
  SET_NICKNAME = "SET_NICKNAME",
  SET_IS_ROOM_READY = "SET_IS_ROOM_READY",
  SET_ENEMY_NICKNAME = "SET_ENEMY_NICKNAME",
  SET_IS_FIRST_PLAYER = "SET_IS_FIRST_PLAYER",
}
