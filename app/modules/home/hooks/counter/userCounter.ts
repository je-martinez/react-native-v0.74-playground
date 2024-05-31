import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../../store";

export const useCounter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCount);
  const incrementCounter = () => dispatch(increment());
  const decreaseCounter = () => dispatch(decrement());
  const incrementCounterByAmount = (amount: number) =>
    dispatch(incrementByAmount(amount));
  return {
    counter,
    incrementCounter,
    incrementCounterByAmount,
    decreaseCounter,
  };
};
