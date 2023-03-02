import { GET_ROOMS } from "../constants";

export const getRooms = (roomsData) => ({ type: GET_ROOMS, payload: roomsData });
