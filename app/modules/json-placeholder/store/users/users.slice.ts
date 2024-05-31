import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
import { fetchUsers } from "./users.thunks";

interface UsersState {
  loading: boolean;
  users: User[];
  error: string | undefined | null;
}

const initialState = {
  users: [],
  loading: false,
  error: null,
} satisfies UsersState as UsersState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload as User[];
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
  selectors: {
    selectUsers: (state: UsersState) => state.users,
    selectLoadingUsers: (state: UsersState) => state.loading,
    selectErrorUsers: (state: UsersState) => state.error,
  },
});

export const {} = usersSlice.actions;
export const { selectUsers, selectLoadingUsers, selectErrorUsers } =
  usersSlice.selectors;
export const usersReducer = usersSlice.reducer;
