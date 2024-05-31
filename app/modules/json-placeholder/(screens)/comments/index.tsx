import { StyleSheet, useWindowDimensions } from "react-native";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/ui/components/ThemedView";
import { ThemedText } from "@/ui/components/ThemedText";
import { FlashList } from "@shopify/flash-list";
import { useComments } from "../../hooks";
import CommentItem from "../../components/comment-item";

export default function CommentsScreen() {
  const { comments } = useComments();
  const { height, width } = useWindowDimensions();

  return (
    <FlashList
      ListHeaderComponent={
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
          headerImage={
            <Ionicons size={310} name="people" style={styles.headerImage} />
          }
        >
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Comments</ThemedText>
          </ThemedView>
        </ParallaxScrollView>
      }
      keyExtractor={(item) => item.id.toString()}
      estimatedFirstItemOffset={100}
      estimatedListSize={{ width, height }}
      estimatedItemSize={200}
      data={comments}
      renderItem={CommentItem}
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
