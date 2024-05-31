import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "../../types";
import { jsonPlaceholderApi } from "../../api";

const thunkActions = {
  fetchComments: createAction("comments/fetchComments"),
};

const fetchComments = createAsyncThunk<
  Comment[],
  undefined,
  { rejectValue: string }
>(thunkActions.fetchComments.type, async (_, { rejectWithValue }) => {
  try {
    const response = await jsonPlaceholderApi.fetchComments();
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch comments");
  }
});

export { fetchComments };
