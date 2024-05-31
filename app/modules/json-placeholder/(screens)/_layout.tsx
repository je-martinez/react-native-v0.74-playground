import { Stack } from "expo-router";
import { JsonPlaceholderModuleRoutes } from "../routes";
import { useComments, usePosts, useUsers } from "../hooks";
import { useEffect } from "react";

export default function Layout() {
  const { fetchPosts } = usePosts();
  const { fetchComments } = useComments();
  const { fetchUsers } = useUsers();

  useEffect(() => {
    fetchPosts();
    fetchComments();
    fetchUsers();
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name={JsonPlaceholderModuleRoutes.Index}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={JsonPlaceholderModuleRoutes.Posts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={JsonPlaceholderModuleRoutes.Comments}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={JsonPlaceholderModuleRoutes.CommentsByPostId}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
