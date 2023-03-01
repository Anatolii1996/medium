import { SET_ROOMS } from "../constants";
import { createReducer } from "@reduxjs/toolkit";

const rootReducer = createReducer([], (builder) => {
    builder.addCase(
        SET_ROOMS, (state, action) => {
            state.push(action.payload)
            return state
        }
    )
});
export default rootReducer;