import { all, call } from "@redux-saga/core/effects";
import watchRoomSaga from "./roomSaga";
// import { getRooms } from "../../api";
// import { getRoomsFirebase } from "../../firebase";
// import { setRoomsData } from "../action/actionCreator";

const sagasList = [
    
    watchRoomSaga,
  ];

export default function* rootSaga(){
    yield all(sagasList.map((saga) => call(saga)));
}