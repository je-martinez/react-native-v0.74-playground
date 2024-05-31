import CoverImage from "@/ui/components/CoverImage";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { StyleSheet } from "react-native";

const image = {
  source: require("@/assets/images/jsonplaceholder-logo.png"),
  blurhash: "LHNwm3?aIpt7~qt6D*j[oIRjt5WB",
};

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <CoverImage source={image.source} blurhash={image.blurhash} />
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
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
