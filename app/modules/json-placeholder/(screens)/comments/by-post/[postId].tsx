import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, useWindowDimensions } from "react-native";
import CommentItem from "../../../components/comment-item";
import { useComments } from "../../../hooks";

export default function CommentsScreen() {
  const { getCommentsByPostId } = useComments();
  const { postId } = useLocalSearchParams();
  const { height, width } = useWindowDimensions();
  const comments = getCommentsByPostId(Number(postId));

  return (
    <FlashList
      ListHeaderComponent={
        <ThemedView>
          <ThemedText type="subtitle">Comments ({comments.length})</ThemedText>
        </ThemedView>
      }
      ListHeaderComponentStyle={styles.titleContainer}
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
  titleContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
});
