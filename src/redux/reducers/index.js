import { combineReducers } from "redux";
import roomReducer from "./roomReducer";
import userReducer from "./userReducer";
import currentUserReducer from "./currentUserReducer";
// import { createReducer } from "@reduxjs/toolkit";

// const rootReducer = createReducer([], (builder) => {
//     builder.addCase(
//         SET_ROOMS, (state, action) => {
//             state.push(action.payload)
//             return state
//         }
//     )
// });
// export default rootReducer;

const rootReducer = combineReducers({
    rooms: roomReducer,
    users: userReducer,
    currentUser: currentUserReducer,
});
export default rootReducer;