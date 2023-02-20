export interface IConnectionState {
  roomId: string;
  privateOrPublic: "private" | "public";
  isJoined: boolean;
  isRoomOverflow: boolean;
  nickname: string;
}
export enum connectionActionTypes {
  SET_IS_JOINED,
  TOGGLE_MODE,
  SET_ROOM_ID,
  SET_ROOM_OVERFLOW,
  SET_NICKNAME,
}
