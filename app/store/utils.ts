import { Reducer } from "@reduxjs/toolkit";
import { reduxStorage } from "./persist";
import { PersistConfig, persistReducer } from "redux-persist";

interface PersistOptions<S> extends Partial<PersistConfig<S>> {
  key: string;
}

export const createPersistReducer = <S>(
  reducer: Reducer<S>,
  { key, ...rest }: PersistOptions<S>
) =>
  persistReducer(
    {
      key,
      ...rest,
      storage: reduxStorage,
    },
    reducer
  );
