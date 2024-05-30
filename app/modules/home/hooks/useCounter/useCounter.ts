import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
} from "@/home/store/counter/counter.slice";

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
