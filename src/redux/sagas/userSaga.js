import { GET_USERS } from "../constants";
import { getUsers } from "../action/ActionCreator";
import { getUsersFirebase } from "../../firebase";

function* getUsersSaga() {
    const users = yield call(getUsersFirebase);
    yield put (getUsers(users))
}

export default function* watchUserSaga(){
    yield takeEvery(GET_USERS, getUsersSaga)
}