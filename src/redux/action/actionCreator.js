/* eslint-disable */
import { GET_ROOMS, GET_USERS, GET_CURRENT_USER, CHECK_OUT_ROOM, UPDATE_ROOM } from "../constants";

export const getRooms = (roomsData) => ({ type: GET_ROOMS, payload: roomsData });
export const getUsers = (userssData) => ({ type: GET_USERS, payload: userssData });
export const getCurrentUser = (currentUsersData) => ({ type: GET_CURRENT_USER, payload: currentUsersData });

export const checkOutRoom = (id) => ({ type: CHECK_OUT_ROOM, payload: {id} });
export const updateRoomGuest = (id, data) => ({ type: UPDATE_ROOM, payload: {id, data} });


