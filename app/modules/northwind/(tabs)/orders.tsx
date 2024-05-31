import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { StyleSheet } from "react-native";
import CoverImage from "@/ui/components/CoverImage";

const image = {
  source: require("@/assets/images/orders-logo.jpeg"),
  blurhash: "LQP~vE%2?]Io_MbaRQxGoyozRjM|",
};

export default function OrdersScreen() {
  return (
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
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
