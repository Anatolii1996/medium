/* eslint-disable */
// import { compose, applyMiddleware } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store =  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);


// const store = configureStore({
//     reducer: rootReducer,
// });

export default store;

