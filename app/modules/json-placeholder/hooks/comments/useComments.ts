import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  fetchComments as fetchCommentsFromApi,
  selectComments,
  selectErrorComments,
  selectLoadingComments,
} from "../../store";

export const useComments = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectComments);
  const loading = useAppSelector(selectLoadingComments);
  const error = useAppSelector(selectErrorComments);
  const fetchComments = () => dispatch(fetchCommentsFromApi());
  return { fetchComments, comments, loading, error };
};
