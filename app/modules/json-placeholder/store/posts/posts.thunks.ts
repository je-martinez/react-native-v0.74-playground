import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "../../api";
import { Post } from "../../types";

const thunkActions = {
  fetchPosts: createAction("posts/fetchPosts"),
};

const fetchPosts = createAsyncThunk<Post[], undefined, { rejectValue: string }>(
  thunkActions.fetchPosts.type,
  async (_, { rejectWithValue }) => {
    try {
      const response = await jsonPlaceholderApi.fetchPosts();
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch posts");
    }
  }
);

export { fetchPosts };
