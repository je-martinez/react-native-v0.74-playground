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
      <Stack>
        <Stack.Screen
          name={NorthwindModuleRoutes.OrdersByCustomer}
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack>
    </>
  );
}
