import { all, call } from "@redux-saga/core/effects";
import watchRoomSaga from "./roomSaga";

const sagasList = [
  watchRoomSaga,
  
];

export default function* rootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}