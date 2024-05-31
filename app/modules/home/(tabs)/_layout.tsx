import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/ui/components/TabBarIcon";
import { Colors } from "@/ui/constants/Colors";
import { useColorScheme } from "@/ui/hooks/useColorScheme";
import { HomeModuleRoutes } from "../routes";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name={HomeModuleRoutes.Index}
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "information" : "information-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={HomeModuleRoutes.Counter}
          options={{
            title: "Counter",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "calculator" : "calculator-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={HomeModuleRoutes.Explore}
          options={{
            title: "Explore",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "code-slash" : "code-slash-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
