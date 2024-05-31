import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { northwindApi } from "../../api";
import { Customer } from "../../types";

const thunkActions = {
  fetchCustomers: createAction("customers/fetchCustomers"),
};

const fetchCustomers = createAsyncThunk<
  Customer[],
  undefined,
  { rejectValue: string }
>(thunkActions.fetchCustomers.type, async (_, { rejectWithValue }) => {
  try {
    const response = await northwindApi.fetchCustomers();
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to fetch customers");
  }
});

export { fetchCustomers };
