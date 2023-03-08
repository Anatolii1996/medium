import { GET_ROOMS, UPDATE_ROOM } from "../constants";

const initialState = {};
const roomReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ROOMS:
            return { ...state, ...payload };
        case UPDATE_ROOM:
            return {
                ...state,
                [payload.id]: {
                    ...state[payload.id],
                    ...payload.data,
                }
            };
        default:
            return state;
    }
};

export default roomReducer;