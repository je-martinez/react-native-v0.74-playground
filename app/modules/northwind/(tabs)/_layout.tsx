import { Stack, Tabs } from "expo-router";
import React, { useEffect } from "react";

import { TabBarIcon } from "@/ui/components/TabBarIcon";
import { Colors } from "@/ui/constants/Colors";
import { useColorScheme } from "@/ui/hooks/useColorScheme";
import { NorthwindModuleRoutes } from "../routes";
import { useCustomers, useOrders, useProducts } from "../hooks";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { fetchCustomers } = useCustomers();
  const { fetchOrders } = useOrders();
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchCustomers();
    fetchOrders();
    fetchProducts();
  }, []);

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
