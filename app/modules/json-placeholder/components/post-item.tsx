import { ThemedText } from "@/ui/components/ThemedText";
import { Post } from "../types";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
interface Props {
  item: Post;
}

export default function PostItem({ item: post }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={`https://i.pravatar.cc/300?u=${post.userId}`}
        style={styles.avatar}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
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
});
