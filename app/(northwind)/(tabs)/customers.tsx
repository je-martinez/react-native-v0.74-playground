import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/ui//components/ParallaxScrollView";
import NavigationContainer from "@/ui//components/NavigationContainer";
import { ThemedText } from "@/ui//components/ThemedText";
import { ThemedView } from "@/ui//components/ThemedView";

export default function CustomersScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="people" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Customers</ThemedText>
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