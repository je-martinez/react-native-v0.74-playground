import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  fetchOrders as fetchOrdersFromApi,
  selectErrorOrders,
  selectLoadingOrders,
  selectOrders,
} from "../../store";

export const useOrders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);
  const loading = useAppSelector(selectLoadingOrders);
  const error = useAppSelector(selectErrorOrders);
  const fetchOrders = () => dispatch(fetchOrdersFromApi());
  return { fetchOrders, orders, loading, error };
};
