import { combineReducers } from "redux";
import roomReducer from "./roomReducer";
import userReducer from "./userReducer";
import currentUserReducer from "./currentUserReducer";
// import { createSlice } from "@reduxjs/toolkit";

// const roomsSlice = createSlice({
//     name: "rooms",
//     initialState: {},
//     reducers: {
//         getRooms: (state, { payload }) => {
//             return { ...state, ...payload };
//         },
//         updateRoom: (state, { payload }) => {
//             const { id, data } = payload;
//             return {
//                 ...state,
//                 [id]: {
//                     ...state[id],
//                     ...data,
//                 }
//             };
//         },
//     },
// });

// const usersSlice = createSlice({
//     name: "users",
//     initialState: {},
//     reducers: {
//         getUsers: (state, { payload }) => {
//             return { ...state, ...payload };
//         },
//     },
// });

// const currentUserSlice = createSlice({
//     name: "currentUser",
//     initialState: "",
//     reducers: {
//         getCurrentUser: (state, { payload }) => {
//             return payload;
//         },
//     },
// });


// const rootReducer = combineReducers({
//     rooms: roomsSlice.reducer,
//     users: usersSlice.reducer,
//     currentUser: currentUserSlice.reducer,
// });

// export const { getRooms, updateRoom } = roomsSlice.actions;
// export const { getUsers } = usersSlice.actions;
// export const { getCurrentUser } = currentUserSlice.actions;
const rootReducer = combineReducers({
        rooms: roomReducer,
        users: userReducer,
        currentUser: currentUserReducer,
    });
export default rootReducer;

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