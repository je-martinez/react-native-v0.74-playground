import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="navigation"
        options={{
          headerShown: true,
          title: "Navigation",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
