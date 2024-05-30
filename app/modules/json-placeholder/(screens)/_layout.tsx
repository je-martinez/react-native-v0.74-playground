import { Stack } from "expo-router";
import { JsonPlaceholderModuleRoutes } from "../routes";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name={JsonPlaceholderModuleRoutes.Index}
        options={{ headerShown: true, title: "Home" }}
      />
    </Stack>
  );
}
