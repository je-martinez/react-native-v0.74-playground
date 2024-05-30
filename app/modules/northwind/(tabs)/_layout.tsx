import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/app/modules/home/components/navigation/TabBarIcon";
import { Colors } from "@/app/modules/ui/constants/Colors";
import { useColorScheme } from "@/app/modules/ui/hooks/useColorScheme";

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
          name="customers"
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
          name="orders"
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
