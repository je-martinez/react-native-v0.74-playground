import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Post } from "../types";
interface Props {
  post: Post;
  onCommentPress: (postId: number) => void;
}

export default function PostItem({ post, onCommentPress }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={`https://i.pravatar.cc/300?u=${post.userId}`}
        style={styles.avatar}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
        <TouchableOpacity
          style={styles.commentButton}
          onPress={() => {
            onCommentPress(post.id);
          }}
        >
          <MaterialCommunityIcons
            name="comment-outline"
            size={20}
            color="#ccc"
          />
          <Text style={styles.commentButtonText}>View comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 16,
    color: "#333",
  },
  commentButton: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  commentButtonText: {
    fontSize: 14,
    color: "#ccc",
    marginLeft: 4,
  },
});
