import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  fetchOrders as fetchOrdersFromApi,
  selectErrorOrders,
  selectLoadingOrders,
  selectOrders,
  selectOrdersByCustomerId,
} from "../../store";

export const useOrders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);
  const loading = useAppSelector(selectLoadingOrders);
  const error = useAppSelector(selectErrorOrders);
  const fetchOrders = () => dispatch(fetchOrdersFromApi());
  const getOrdersByCustomer = (customerId: string) =>
    useAppSelector((state) => selectOrdersByCustomerId(state, customerId));
  return { fetchOrders, getOrdersByCustomer, orders, loading, error };
};
