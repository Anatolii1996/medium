import { GET_CURRENT_USER } from "../constants";

const initialState = [];
const currentUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CURRENT_USER:
            return { ...state, payload };
        default:
            return state;
    }
};

export default currentUserReducer;