import { combineReducers } from "@reduxjs/toolkit";
import { connectionReducer } from "../../modules/connection";
import { chessInfoReducer } from "../../modules/chess/store/chessInfoReducer";
import { gameOptionsReducer } from "../../modules/gameOptions";
import { createApi } from "@reduxjs/toolkit/query";
import { gameEndReducer } from "../../modules/gameEnd/store/gameEndReducer";
import storage from "redux-persist/lib/storage";
import {createTransform, persistReducer} from "redux-persist";
import {stringify,parse} from 'flatted'
import {IGameInfoState} from "../../modules/chess/types/chessInfo";

function setPersistKey() : string{
  console.log('otrabotal')
  if(localStorage.getItem('persistenceId')) {
    return localStorage.getItem('persistenceId')!
  }else{
    localStorage.setItem('persistenceId',Math.random().toString(36).substring(2, 15))
    return localStorage.getItem('persistenceId')!
  }
}

const flattedTransform = createTransform(
    (inboundState,key)=>{
      return stringify(inboundState)
    },
    (outboundState,key)=>{
      return parse(outboundState)
    }
)

const persistConfig = {
  key: setPersistKey(),
  storage,
  serialize:true,
  transforms:[flattedTransform]
}
const persistConfig1 = {
  key:setPersistKey(),
  storage,
  serialize:true,
  transforms:[flattedTransform]

}
export const persistedChess = persistReducer<IGameInfoState>(persistConfig1, chessInfoReducer)
export const rootReducer = combineReducers({
  // chessInfo:chessInfoReducer,
  chessInfo:persistedChess,
  connection: connectionReducer,
  gameOptions: gameOptionsReducer,
  gameEnd: gameEndReducer,
});
// export const persistedReducer = persistReducer(persistConfig,rootReducer)
export type RootState = ReturnType<typeof rootReducer>;