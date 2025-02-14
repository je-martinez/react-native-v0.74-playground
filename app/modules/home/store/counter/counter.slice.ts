import { createPersistReducer } from "@/app/store/utils";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState = { value: 0 } satisfies CounterState as CounterState;

const name = "counter";

const counterSlice = createSlice({
  name,
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
  selectors: {
    selectCount: (state) => state.value,
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { selectCount } = counterSlice.selectors;
export const counterReducer = createPersistReducer(counterSlice.reducer, {
  key: name,
});
