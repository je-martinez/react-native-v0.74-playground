import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../../types";
import { fetchCustomers } from "./customers.thunks";
import { createPersistReducer } from "../../../../store/utils";

interface CustomersState {
  customers: Customer[];
  loading: boolean;
  error: string | undefined | null;
}

const initialState = {
  customers: [],
  loading: false,
  error: null,
} satisfies CustomersState as CustomersState;

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = action.payload as Customer[];
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
  selectors: {
    selectCustomers: (state: CustomersState) => state.customers,
    selectLoadingCustomers: (state: CustomersState) => state.loading,
    selectErrorCustomers: (state: CustomersState) => state.error,
  },
});

export const {} = customersSlice.actions;
export const { selectCustomers, selectLoadingCustomers, selectErrorCustomers } =
  customersSlice.selectors;
export const customerReducer = createPersistReducer(customersSlice.reducer, {
  key: "customers",
});
