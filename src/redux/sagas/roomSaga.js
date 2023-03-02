import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ROOMS } from '../constants';
import { getRooms } from '../action/ActionCreator';
import { getRoomsFirebase } from '../../firebase';

function* getRoomsSaga() {
    const rooms = yield call(getRoomsFirebase);
    yield put (getRooms(rooms))
}

export default function* watchRoomSaga(){
    yield takeEvery(GET_ROOMS, getRoomsSaga)
}


