import { Stack } from "expo-router";
import { JsonPlaceholderModuleRoutes } from "../routes";

export default function Layout() {
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
    </Stack>
  );
}
