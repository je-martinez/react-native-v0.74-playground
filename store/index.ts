import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reduxStorage } from "./persist";
import { persistReducer, persistStore } from "redux-persist";
import counterReducer from "./slices/counter.slice";

// const persistConfig = {
//   key: "root",
//   storage: reduxStorage,
// };

// const rootReducers = persistReducer(
//   persistConfig,
//   combineReducers({
//     counter: counterReducer,
//   })
// );

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
