import { SET_ROOMS } from "../constants"
import { takeEvery, call, put } from "@redux-saga/core/effects"
import { getRooms } from "../../api";
// import { getRoomsFirebase } from "../../firebase";
import { setRoomsData } from "../action/actionCreator";

export function* workRoomSaga(){
    const data = yield call(getRooms);
    yield put(setRoomsData(data))
}

export default function* rootSaga(){
    yield takeEvery(SET_ROOMS, workRoomSaga)
}