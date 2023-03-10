/* eslint-disable */
import { call, put, takeEvery } from 'redux-saga/effects';
import { CHECK_OUT_ROOM, CHECK_IN_ROOM } from '../constants';
import { updateRoomGuest } from "../action/actionCreator";
import { updateRoomFirestore } from '../../firebase';
import moment from 'moment';



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
  yield updateRoom(id, updatedFields);
}

function* checkInRoomSaga({ payload }) {
  console.log("checkInRoomSaga");
  const { id, username, checkOutDate  } = payload;
  const updatedFields = {
    checkInDate: moment().format('YYYY-MM-DD'),
    isCheckedIn: true,
    guest: username,
    ...(checkOutDate && { checkOutDate: checkOutDate.format('YYYY-MM-DD') }),
  };
  yield updateRoom(id, updatedFields);
}

export default function* watchRoomSaga() {
  yield takeEvery(CHECK_IN_ROOM, checkInRoomSaga);
  yield takeEvery(CHECK_OUT_ROOM, checkOutRoomSaga);
}


