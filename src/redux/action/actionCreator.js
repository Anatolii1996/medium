import { GET_ROOMS, GET_USERS, GET_CURRENT_USER } from "../constants";

export const getRooms = (roomsData) => ({ type: GET_ROOMS, payload: roomsData });
export const getUsers = (userssData) => ({ type: GET_USERS, payload: userssData });
export const getCurrentUser = (currentUsersData) => ({ type: GET_CURRENT_USER, payload: currentUsersData });

