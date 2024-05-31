import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

interface UsersState {
  loading: boolean;
  users: User[];
  error: string | null;
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
