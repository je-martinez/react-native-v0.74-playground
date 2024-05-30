import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/app/modules/ui/hooks/useColorScheme";
import { Provider } from "react-redux";
import { persistor, store } from "@/app/store";
import { PersistGate } from "redux-persist/integration/react";
import { RootStackRoutes } from "./routes";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "modules/home/(tabs)/index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const route = usePathname();
  console.log(route);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name={RootStackRoutes.Index} redirect />
            <Stack.Screen
              name={RootStackRoutes.HomeModule}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={RootStackRoutes.JsonPlaceholder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={RootStackRoutes.Northwind}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
