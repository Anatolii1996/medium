/* eslint-disable */
import rootSaga from "./sagas";
import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
// import { compose, applyMiddleware } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();


// const composeEnhancers =
//     typeof window === "object" &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store =  configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
}
);

sagaMiddleware.run(rootSaga);

export default store;
