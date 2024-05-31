import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reduxStorage } from "./persist";
import { persistReducer, persistStore } from "redux-persist";
import { counterReducer } from "@/home/store";
import {
  commentsReducer,
  postsReducer,
  usersReducer,
} from "@/json-placeholder/store";

const persistConfig = {
  key: "root",
  storage: reduxStorage,
};

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({
      counter: counterReducer,
      posts: postsReducer,
      comments: commentsReducer,
      users: usersReducer,
    })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
