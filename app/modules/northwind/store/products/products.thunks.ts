import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { northwindApi } from "../../api";
import { Product } from "../../types";

const thunkActions = {
  fetchProducts: createAction("products/fetchProducts"),
};

const fetchProducts = createAsyncThunk<
  Product[],
  undefined,
  { rejectValue: string }
>(thunkActions.fetchProducts.type, async (_, { rejectWithValue }) => {
  try {
    const response = await northwindApi.fetchProducts();
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch orders");
  }
});

export { fetchProducts };
