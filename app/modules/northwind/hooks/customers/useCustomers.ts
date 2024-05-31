import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  fetchCustomers as fetchCustomersFromApi,
  selectCustomers,
  selectErrorCustomers,
  selectLoadingCustomers,
} from "../../store";

export const useCustomers = () => {
  const dispatch = useAppDispatch();
  const customers = useAppSelector(selectCustomers);
  const loading = useAppSelector(selectLoadingCustomers);
  const error = useAppSelector(selectErrorCustomers);
  const fetchCustomers = () => dispatch(fetchCustomersFromApi());
  return { fetchCustomers, customers, loading, error };
};
