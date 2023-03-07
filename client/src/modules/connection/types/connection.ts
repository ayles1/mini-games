
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
  CONNECTION_SET_IS_JOINED = "SET_IS_JOINED",
  CONNECTION_TOGGLE_MODE = "TOGGLE_MODE",
  CONNECTION_SET_ROOM_ID = "SET_ROOM_ID",
  CONNECTION_SET_ROOM_OVERFLOW = "SET_ROOM_OVERFLOW",
  CONNECTION_SET_NICKNAME = "SET_NICKNAME",
  CONNECTION_SET_IS_ROOM_READY = "SET_IS_ROOM_READY",
  CONNECTION_SET_ENEMY_NICKNAME = "SET_ENEMY_NICKNAME",
  CONNECTION_SET_IS_FIRST_PLAYER = "SET_IS_FIRST_PLAYER",
  CONNECTION_RESET_STATE = "CONNECTION_RESET_STATE"
}

