import { StyleSheet, FlatList, useWindowDimensions } from "react-native";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/ui/components/ThemedView";
import { ThemedText } from "@/ui/components/ThemedText";
import { usePosts } from "../hooks";
import PostItem from "../components/post-item";
import { FlashList } from "@shopify/flash-list";

export default function PostsScreen() {
  const { posts } = usePosts();
  const { height, width } = useWindowDimensions();

  return (
    <FlashList
      ListHeaderComponent={
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
          headerImage={
            <Ionicons size={310} name="newspaper" style={styles.headerImage} />
          }
        >
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Posts</ThemedText>
          </ThemedView>
        </ParallaxScrollView>
      }
      keyExtractor={(item) => item.id.toString()}
      estimatedFirstItemOffset={100}
      estimatedListSize={{ width, height }}
      estimatedItemSize={200}
      data={posts}
      renderItem={PostItem}
    />
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
