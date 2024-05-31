import CoverImage from "@/ui/components/CoverImage";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet, useWindowDimensions } from "react-native";
import CommentItem from "../../components/comment-item";
import { useComments } from "../../hooks";

const image = {
  source: require("@/assets/images/comments-logo.png"),
  blurhash: "LIQt@dWq:5xakWWqS5js{IoI74R,",
};

export default function CommentsScreen() {
  const { comments } = useComments();
  const { height, width } = useWindowDimensions();

  return (
    <FlashList
      ListHeaderComponent={
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
          headerImage={
            <CoverImage source={image.source} blurhash={image.blurhash} />
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
