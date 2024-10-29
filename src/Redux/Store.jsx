import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
});

//persist store data even in rerendering
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //middleware to secure the localstorage data
  middleware: (getDefaultMiddlewares) => {
  return  getDefaultMiddlewares({ serializableCheck: false });
  },
});
export const persistor=persistStore(store)