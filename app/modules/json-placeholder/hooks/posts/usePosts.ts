import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  fetchPosts as fetchPostsFromApi,
  selectErrorPosts,
  selectLoadingPosts,
  selectPosts,
} from "../../store";

export const usePosts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const loading = useAppSelector(selectLoadingPosts);
  const error = useAppSelector(selectErrorPosts);
  const fetchPosts = () => dispatch(fetchPostsFromApi());
  return { fetchPosts, posts, loading, error };
};
