import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
} from "@/app/modules/home/store/counter/counter.slice";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

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
