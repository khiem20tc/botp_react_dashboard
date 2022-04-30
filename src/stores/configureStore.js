import thunkMiddleware from "redux-thunk";
import rootReducer from "reducers";
import clientMiddleware from "stores/middlewares/client";
import { configureStore } from "@reduxjs/toolkit";

const customConfigureStore = (preloadedState) => {
  // Middlewares
  const middlewares = [clientMiddleware, thunkMiddleware];
  // Create store
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: process.env.NODE_ENV === "development",
    preloadedState: preloadedState,
  });
  return store;
};

export default customConfigureStore;
