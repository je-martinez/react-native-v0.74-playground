import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/ui/components/TabBarIcon";
import { Colors } from "@/app/modules/ui/constants/Colors";
import { useColorScheme } from "@/app/modules/ui/hooks/useColorScheme";
import { NorthwindModuleRoutes } from "../routes";

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
          name={NorthwindModuleRoutes.Index}
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
          name={NorthwindModuleRoutes.Customers}
          options={{
            title: "Customers",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "people" : "people-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={NorthwindModuleRoutes.Orders}
          options={{
            title: "Orders",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "file-tray-full" : "file-tray-full-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
