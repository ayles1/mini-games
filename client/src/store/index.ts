import { configureStore } from "@reduxjs/toolkit";
import { rootReducer} from "./reducers";
import createSagaMiddleware from 'redux-saga'
import {sideDispatchWatcher} from "./saga/saga";
import {persistReducer, persistStore} from 'redux-persist'
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware()



export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(sagaMiddleware)
});
export const persistor = persistStore(store);

sagaMiddleware.run(sideDispatchWatcher)
