import { combineReducers } from "@reduxjs/toolkit";
import { connectionReducer } from "../../modules/connection";
import { gameOptionsReducer } from "../../modules/gameOptions";
import { gameEndReducer } from "../../modules/gameEnd/store/gameEndReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer} from "redux-persist";
import {stringify,parse} from 'flatted'
import {chessReducer} from "../../modules/chess";
import {gameReducer} from "./gameReducer";
//
// function setPersistKey() : string{
//   if(localStorage.getItem('persistenceId')) {
//     return localStorage.getItem('persistenceId')!
//   }else{
//     localStorage.setItem('persistenceId',Math.random().toString(36).substring(2, 15))
//     return localStorage.getItem('persistenceId')!
//   }
// }
//
// const flattedTransform = createTransform(
//     (inboundState,key)=>{
//       return stringify(inboundState)
//     },
//     (outboundState,key)=>{
//       return parse(outboundState)
//     }
// )
//
// const persistConfig = {
//   key: setPersistKey(),
//   storage,
//   serialize:true,
//   transforms:[flattedTransform]
// }
// export const persistedChess = persistReducer<IGameInfoState>(persistConfig1, chessInfoReducer)
export const rootReducer = combineReducers({
  chess : chessReducer,
  connection: connectionReducer,
  gameOptions: gameOptionsReducer,
  gameEnd: gameEndReducer,
  game:gameReducer
});
// export const persistedReducer = persistReducer(persistConfig,rootReducer)
export type RootState = ReturnType<typeof rootReducer>;
