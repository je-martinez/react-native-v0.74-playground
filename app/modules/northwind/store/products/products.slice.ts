import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";
import { fetchProducts } from "./products.thunks";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | undefined | null;
}

const initialState = {
  products: [],
  loading: false,
  error: null,
} satisfies ProductsState as ProductsState;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload as Product[];
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
  selectors: {
    selectProducts: (state: ProductsState) => state.products,
    selectLoadingProducts: (state: ProductsState) => state.loading,
    selectErrorProducts: (state: ProductsState) => state.error,
  },
});

export const {} = productsSlice.actions;
export const { selectProducts, selectLoadingProducts, selectErrorProducts } =
  productsSlice.selectors;
export const productReducer = productsSlice.reducer;
