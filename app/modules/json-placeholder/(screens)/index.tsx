import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/ui/components/ThemedView";
import { ThemedText } from "@/ui/components/ThemedText";

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons
          size={310}
          name="information-circle"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">JSON Placeholder</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">
          JSON Placeholder is a free online service that functions as a mock
          REST API. It provides developers with readily available fake data in
          JSON format, which is useful for various purposes, particularly during
          the initial development stages.
        </ThemedText>
      </ThemedView>
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
