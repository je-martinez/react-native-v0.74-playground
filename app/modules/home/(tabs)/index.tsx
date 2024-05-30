import { StyleSheet, Image } from "react-native";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/ui/components/ThemedView";
import { ThemedText } from "@/ui/components/ThemedText";
import { HelloWave } from "@/home/components/HelloWave";

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">React Native</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">
          React Native is a popular open-source framework created by Meta
          Platforms (formerly Facebook) for building mobile apps. It allows
          developers to use JavaScript and React to create native-looking
          applications for iOS, Android, and other platforms.
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
