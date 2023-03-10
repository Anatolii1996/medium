/* eslint-disable */
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ROOMS, CHECK_OUT_ROOM, CHECK_IN_ROOM } from '../constants';
import { getRooms, updateRoomGuest } from "../action/actionCreator";
import {  updateRoomFirestore } from '../../firebase';

// function* getRoomsSaga() {
//     const rooms = yield call(getRoomsFirebase);
//     yield put(getRooms(rooms))
// }


function* updateRoom(id, updatedFields) {
    yield call(updateRoomFirestore, id, updatedFields);
    yield put(updateRoomGuest(id, updatedFields));
  }

  function* checkOutRoomSaga({ payload }) {
    console.log("checkOutRoomSaga");
    const { id } = payload;
    const updatedFields = {
      checkInDate: null,
      checkOutDate: null,
      isCheckedIn: false,
      guest: '',
    };
    yield updateRoom(id, updatedFields) ;
  }

  function* checkInRoomSaga({ payload }) {
    console.log("checkInRoomSaga");
    const { id, username } = payload;
    const updatedFields = {
      checkInDate: new Date(),
      isCheckedIn: true,
     guest: username,
    };
    yield updateRoom(id, updatedFields) ;
  }

export default function* watchRoomSaga() {
    // yield takeEvery(GET_ROOMS, getRoomsSaga);
    yield takeEvery(CHECK_IN_ROOM, checkInRoomSaga);
    yield takeEvery(CHECK_OUT_ROOM, checkOutRoomSaga);
}


