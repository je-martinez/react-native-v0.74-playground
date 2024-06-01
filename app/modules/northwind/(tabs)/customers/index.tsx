import CoverImage from "@/ui/components/CoverImage";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet, useWindowDimensions } from "react-native";
import { useCustomers } from "../../hooks";
import CustomerItem from "../../components/customer-item";
import { useRouter } from "expo-router";

const image = {
  source: require("@/assets/images/customers-logo.png"),
  blurhash: "LNSOsZaf^[xsu%ayacof*0bIN5ae",
};

export default function CustomersScreen() {
  const { customers } = useCustomers();
  const { height, width } = useWindowDimensions();
  const { push } = useRouter();

  const onSeeOrders = (customerId: string) => {
    push(`/modules/northwind/orders/by-customer/${customerId}`);
  };

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
            <ThemedText type="title">Customers</ThemedText>
          </ThemedView>
        </ParallaxScrollView>
      }
      keyExtractor={(item) => item.id.toString()}
      estimatedFirstItemOffset={100}
      estimatedListSize={{ width, height }}
      estimatedItemSize={200}
      data={customers}
      renderItem={({ item: customer }) => (
        <CustomerItem customer={customer} onSeeOrdersPress={onSeeOrders} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
