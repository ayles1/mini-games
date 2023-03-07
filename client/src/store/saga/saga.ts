import { put,takeEvery, select} from 'redux-saga/effects'
import {setIsChooser} from "../../modules/gameOptions/store/gameOptions";
import {connectionActionTypes} from "../../modules/connection/types/connection";
import {AnyAction} from "@reduxjs/toolkit";
import {setTime, setUserColor, setUsersNicknames} from "../../modules/chess/store/chess";
import {gameOptionsActionTypes} from "../../modules/gameOptions/types/gameOptions";

function* setChooserWorker(action:AnyAction){
    yield put(setIsChooser(action.payload))
}
function* setUserColorWorker(action:AnyAction){
    yield put(setUserColor(action.payload))
}
function* setNicknamesWorker() : Generator<any,void,any>{
    const {nickname,enemyNickname}  = yield select((state)=>state.connection);
    yield put(setUsersNicknames({this:nickname,enemy:enemyNickname}))
}
function* setTimeWorker(){
    const {usersTime} = yield select((state)=>state.gameOptions)
    yield put(setTime(usersTime))
}
export function* sideDispatchWatcher(){
    yield  takeEvery( connectionActionTypes.CONNECTION_SET_IS_FIRST_PLAYER,setChooserWorker )
    yield takeEvery( gameOptionsActionTypes.OPTIONS_SET_USERS_COLOR,setUserColorWorker )
    yield takeEvery( connectionActionTypes.CONNECTION_SET_IS_ROOM_READY, setNicknamesWorker )
    yield takeEvery ( gameOptionsActionTypes.OPTIONS_SET_IS_GAME_READY_TO_BEGIN,setTimeWorker )
}