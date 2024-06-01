import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";
import { useOrders } from "@/northwind/hooks";
import { useWindowDimensions, StyleSheet } from "react-native";
import OrderItem from "@/northwind/components/order-item";

export default function OrdersByCustomerScreen() {
  const { customerId } = useLocalSearchParams();
  const { getOrdersByCustomer } = useOrders();
  const { height, width } = useWindowDimensions();
  const orders = getOrdersByCustomer(customerId as string);

  return (
    <FlashList
      ListHeaderComponent={
        <ThemedView>
          <ThemedText type="subtitle">Orders ({orders?.length})</ThemedText>
        </ThemedView>
      }
      ListHeaderComponentStyle={styles.titleContainer}
      keyExtractor={(item) => item.id.toString()}
      estimatedFirstItemOffset={100}
      estimatedListSize={{ width, height }}
      estimatedItemSize={200}
      data={orders}
      renderItem={({ item: order }) => <OrderItem order={order} />}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
});
