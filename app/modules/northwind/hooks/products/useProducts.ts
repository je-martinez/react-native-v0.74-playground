import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  fetchProducts as fetchProductsFromApi,
  selectErrorProducts,
  selectLoadingProducts,
  selectProducts,
} from "../../store";

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectLoadingProducts);
  const error = useAppSelector(selectErrorProducts);
  const fetchProducts = () => dispatch(fetchProductsFromApi);
  return { fetchProducts, products, loading, error };
};
