import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "../../api";
import { User } from "../../types";

const thunkActions = {
  fetchUsers: createAction("users/fetchUsers"),
};

const fetchUsers = createAsyncThunk<User[], undefined, { rejectValue: string }>(
  thunkActions.fetchUsers.type,
  async (_, { rejectWithValue }) => {
    try {
      const response = await jsonPlaceholderApi.fetchUsers();
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch users");
    }
  }
);

export { fetchUsers };
