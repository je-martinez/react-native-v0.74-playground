import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { northwindApi } from "../../api";
import { Order } from "../../types";

const thunkActions = {
  fetchOrders: createAction("orders/fetchOrders"),
};

const fetchOrders = createAsyncThunk<
  Order[],
  undefined,
  { rejectValue: string }
>(thunkActions.fetchOrders.type, async (_, { rejectWithValue }) => {
  try {
    const response = await northwindApi.fetchOrders();
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch orders");
  }
});

export { fetchOrders };
