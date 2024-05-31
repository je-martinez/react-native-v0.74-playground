import CoverImage from "@/ui/components/CoverImage";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { StyleSheet } from "react-native";

const image = {
  source: require("@/assets/images/northwind-logo.jpeg"),
  blurhash: "L4Rfwixu?bxu.8fQWBfQ~qfQ9Fay",
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
        <ThemedText type="title">Northwind</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">
          Northwind database, it's a sample database developed by Microsoft that
          showcases the features of their database products like SQL Server and
          Microsoft Access.
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
