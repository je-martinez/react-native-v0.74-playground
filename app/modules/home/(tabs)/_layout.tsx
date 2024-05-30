import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/ui/components/TabBarIcon";
import { Colors } from "@/app/modules/ui/constants/Colors";
import { useColorScheme } from "@/app/modules/ui/hooks/useColorScheme";
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
