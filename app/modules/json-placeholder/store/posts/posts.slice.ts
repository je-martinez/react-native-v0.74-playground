import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types";
import { fetchPosts } from "./posts.thunks";

export interface PostsState {
  loading: boolean;
  posts: Post[];
  error: string | undefined | null;
}

const initialState = {
  posts: [],
  loading: false,
  error: null,
} satisfies PostsState as PostsState;

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload as Post[];
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
  selectors: {
    selectPosts: (state: PostsState) => state.posts,
    selectLoadingPosts: (state: PostsState) => state.loading,
    selectErrorPosts: (state: PostsState) => state.error,
  },
});

export const {} = postsSlice.actions;
export const { selectPosts, selectLoadingPosts, selectErrorPosts } =
  postsSlice.selectors;
export const postsReducer = postsSlice.reducer;
