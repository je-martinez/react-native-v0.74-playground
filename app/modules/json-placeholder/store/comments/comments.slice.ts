import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../types";

interface CommentsState {
  loading: boolean;
  comments: Comment[];
  error: string | null;
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
  selectors: {
    selectComments: (state: CommentsState) => state.comments,
    selectLoadingComments: (state: CommentsState) => state.loading,
    selectErrorComments: (state: CommentsState) => state.error,
  },
});

export const {} = commentsSlice.actions;
export const { selectComments, selectLoadingComments, selectErrorComments } =
  commentsSlice.selectors;
export const commentsReducer = commentsSlice.reducer;
