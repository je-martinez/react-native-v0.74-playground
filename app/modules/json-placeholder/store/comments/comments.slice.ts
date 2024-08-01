import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../types";
import { fetchComments } from "./comments.thunks";
import { createPersistReducer } from "../../../../store/utils";

interface CommentsState {
  loading: boolean;
  comments: Comment[];
  error: string | undefined | null;
}

const initialState = {
  comments: [],
  loading: false,
  error: null,
} satisfies CommentsState as CommentsState;

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload as Comment[];
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
  selectors: {
    selectComments: (state: CommentsState) => state.comments,
    selectLoadingComments: (state: CommentsState) => state.loading,
    selectErrorComments: (state: CommentsState) => state.error,
  },
});

export const {} = commentsSlice.actions;

export const { selectComments, selectLoadingComments, selectErrorComments } =
  commentsSlice.selectors;

export const selectCommentsByPostId = createSelector(
  selectComments,
  (_, postId: number) => postId,
  (comments: Comment[], postId: number) =>
    comments.filter((comment) => comment.postId === postId)
);

export const commentsReducer = createPersistReducer(commentsSlice.reducer, {
  key: "comments",
});
