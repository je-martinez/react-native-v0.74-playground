import CoverImage from "@/ui/components/CoverImage";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { StyleSheet, useWindowDimensions } from "react-native";
import PostItem from "../../components/post-item";
import { usePosts } from "../../hooks";

const image = {
  source: require("@/assets/images/posts-logo.jpeg"),
  blurhash: "LHRe~Qm?XpT}5qMcxKMa9brd$eO?",
};

export default function PostsScreen() {
  const { posts } = usePosts();
  const { push } = useRouter();
  const { height, width } = useWindowDimensions();

  const onCommentPress = (postId: number) => {
    push(`/modules/json-placeholder/comments/by-post/${postId}`);
  };

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
            <ThemedText type="title">Posts</ThemedText>
          </ThemedView>
        </ParallaxScrollView>
      }
      keyExtractor={(item) => item.id.toString()}
      estimatedFirstItemOffset={100}
      estimatedListSize={{ width, height }}
      estimatedItemSize={200}
      data={posts}
      renderItem={({ item: post }) => (
        <PostItem post={post} onCommentPress={onCommentPress} />
      )}
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
