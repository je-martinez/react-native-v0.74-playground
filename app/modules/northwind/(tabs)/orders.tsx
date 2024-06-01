import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { StyleSheet, useWindowDimensions } from "react-native";
import CoverImage from "@/ui/components/CoverImage";
import { FlashList } from "@shopify/flash-list";
import { useOrders } from "../hooks";
import OrderItem from "../components/order-item";

const image = {
  source: require("@/assets/images/orders-logo.jpeg"),
  blurhash: "LQP~vE%2?]Io_MbaRQxGoyozRjM|",
};

export default function OrdersScreen() {
  const { orders } = useOrders();
  const { height, width } = useWindowDimensions();

  return (
    <FlashList
      ListHeaderComponent={
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
          headerImage={
            <CoverImage source={image.source} blurhash={image.blurhash} />
          }
        >
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Orders</ThemedText>
          </ThemedView>
          <ThemedText>
            This app includes example code to help you get started.
          </ThemedText>
        </ParallaxScrollView>
      }
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
    flexDirection: "row",
    gap: 8,
  },
});
