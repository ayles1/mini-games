import { combineReducers } from "@reduxjs/toolkit";
import { gameInfoReducer } from "./gameInfoReducer";

export const rootReducer = combineReducers({
  gameInfo: gameInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
