import { call, put,takeEvery} from 'redux-saga/effects'
import {setIsChooser} from "../../modules/gameOptions/store/gameOptions";

function setChooser(action:any,){
    put(setIsChooser(true))
}
export default function* rootSaga(){
    yield takeEvery('',setChooser)
}