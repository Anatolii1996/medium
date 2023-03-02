import { GET_ROOMS, GET_USERS } from "../constants";

export const getRooms = (roomsData) => ({ type: GET_ROOMS, payload: roomsData });
export const getUsers = (userssData) => ({ type: GET_USERS, payload: userssData });

