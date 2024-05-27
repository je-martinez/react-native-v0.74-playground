import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/home/components/ParallaxScrollView";
import NavigationContainer from "@/shared/components/NavigationContainer";
import { ThemedText } from "@/shared/components/ThemedText";
import { ThemedView } from "@/shared/components/ThemedView";

export default function OrdersScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="file-tray-full" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Orders</ThemedText>
      </ThemedView>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
      <NavigationContainer />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
