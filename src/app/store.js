import { configureStore } from "@reduxjs/toolkit";
import { default as userReducer } from "./userSlice";

// const rootReducer = {
//   user: userReducer,
// };
// const store = configureStore({
//   reducer: rootReducer,
// });
// export default store;

// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import thunk from "redux-thunk";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: [thunk],
// });
// export default store;
// export const persistor = persistStore(store);

import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // Xem thêm tại mục "Quá trình merge".
};
const rootReducer = combineReducers({
  user: userReducer,
});
const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: pReducer,
});
export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: rootReducer,
// });
export default store;
