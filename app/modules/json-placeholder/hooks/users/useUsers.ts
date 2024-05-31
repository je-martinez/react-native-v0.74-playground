import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  fetchUsers as fetchUsersFromApi,
  selectErrorUsers,
  selectLoadingUsers,
  selectUsers,
} from "../../store";

export const useUsers = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const loading = useAppSelector(selectLoadingUsers);
  const error = useAppSelector(selectErrorUsers);
  const fetchUsers = () => dispatch(fetchUsersFromApi());
  return { fetchUsers, users, loading, error };
};
