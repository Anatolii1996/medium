import { GET_ROOMS } from "../constants";

const initialState = {};
const roomReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ROOMS:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default roomReducer;