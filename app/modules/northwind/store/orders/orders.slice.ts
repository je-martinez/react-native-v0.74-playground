import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../types";
import { fetchOrders } from "./orders.thunks";

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | undefined | null;
}

const initialState = {
  orders: [],
  loading: false,
  error: null,
} satisfies OrdersState as OrdersState;

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload as Order[];
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
  selectors: {
    selectOrders: (state: OrdersState) => state.orders,
    selectLoadingOrders: (state: OrdersState) => state.loading,
    selectErrorOrders: (state: OrdersState) => state.error,
  },
});

export const {} = ordersSlice.actions;
export const { selectOrders, selectLoadingOrders, selectErrorOrders } =
  ordersSlice.selectors;
export const ordersReducer = ordersSlice.reducer;
